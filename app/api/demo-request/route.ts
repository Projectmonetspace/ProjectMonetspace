import { NextResponse } from "next/server";

const fieldLimits = {
  name: 80,
  business_name: 120,
  business_type: 100,
  phone: 30,
  email: 120,
  google_business_profile: 20,
  message: 1200,
  source: 80,
} as const;

const requiredFields = ["name", "business_name", "business_type", "phone", "email"] as const;

function readField(formData: FormData, field: keyof typeof fieldLimits) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim().slice(0, fieldLimits[field]) : "";
}

export async function POST(request: Request) {
  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return NextResponse.json({ success: false }, { status: 403 });
  }

  const formData = await request.formData();
  if (formData.get("botcheck")) {
    return NextResponse.json({ success: true });
  }

  const fields = Object.fromEntries(
    Object.keys(fieldLimits).map((field) => [field, readField(formData, field as keyof typeof fieldLimits)]),
  ) as Record<keyof typeof fieldLimits, string>;

  if (requiredFields.some((field) => !fields[field]) || !/^\S+@\S+\.\S+$/.test(fields.email)) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not configured");
    return NextResponse.json({ success: false }, { status: 503 });
  }

  const upstreamBody = new FormData();
  upstreamBody.set("access_key", accessKey);
  upstreamBody.set("subject", "New Project Monet free demo request");
  upstreamBody.set("from_name", "Project Monet Website");
  for (const [field, value] of Object.entries(fields)) {
    if (value) upstreamBody.set(field, value);
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: upstreamBody,
      signal: AbortSignal.timeout(10_000),
    });
    const result = (await response.json()) as { success?: boolean };

    if (!response.ok || !result.success) {
      return NextResponse.json({ success: false }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 502 });
  }
}
