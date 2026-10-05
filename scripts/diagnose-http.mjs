import dns from "node:dns/promises";
console.log("DNS diagnostic", JSON.stringify(await dns.lookup("www.projectmonet.space",{all:true})));
const base="https://www.projectmonet.space/blog/airtop-agent-builder";
for (const [name,headers,suffix] of [
["default",{},""],["verification",{"user-agent":"ProjectMonet-production-verification/1.0","cache-control":"no-cache",pragma:"no-cache"},""],
["browser",{"user-agent":"Mozilla/5.0","accept":"text/html"},""],
["query",{}, "?verification=7d5260c7fe40ae52987fbfb32da398271817eea1"],
["html",{},".html"],["pages",{},null]
]) {
const url=suffix===null?"https://projectmonetspace.pages.dev/blog/airtop-agent-builder":base+suffix;
try {const response=await fetch(url,{headers,redirect:"manual",cache:"no-store",signal:AbortSignal.timeout(30000)});const body=await response.text();
console.log("HTTP variant",JSON.stringify({name,url,status:response.status,headers:Object.fromEntries(response.headers),title:body.match(/<title>([^<]*)<\/title>/)?.[1]}));}catch(e){console.log("HTTP variant",name,String(e));}
}
