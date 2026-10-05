// Pages asset caches may retain deleted HTML in individual data centers.
// Resolve retirement decisions before consulting the asset service.
export function createBlogRoutingWorker({ purgedSlugs, notFoundHtml, securityHeaders }) {
  return `const purged = new Set(${JSON.stringify([...purgedSlugs])});
const notFoundHtml = ${JSON.stringify(notFoundHtml)};
const securityHeaders = ${JSON.stringify(securityHeaders)};
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const firstSegment = url.pathname.split('/')[2] || '';
    const slug = firstSegment.replace(/\\.html$/, '');
    if (purged.has(slug)) {
      const headers = new Headers(securityHeaders.map(({ key, value }) => [key, value]));
      headers.set('Content-Type', 'text/html; charset=utf-8');
      headers.set('Cache-Control', 'no-store');
      headers.set('X-Robots-Tag', 'noindex');
      return new Response(request.method === 'HEAD' ? null : notFoundHtml, { status: 404, headers });
    }
    const asset = await env.ASSETS.fetch(request);
    const response = new Response(asset.body, asset);
    for (const { key, value } of securityHeaders) response.headers.set(key, value);
    if (response.status === 404) response.headers.set('Cache-Control', 'no-store');
    return response;
  }
};
`;
}

export function blogFunctionRoutes(articleRedirects) {
  // Keep exact consolidation paths on the static _redirects handler.
  return { version: 1, include: ["/blog/*"], exclude: Object.keys(articleRedirects).map(slug => `/blog/${slug}*`) };
}
