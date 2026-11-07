import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const source = path.join(
    process.cwd(),
    "stitch_novva_agency_website_recreation",
    "about us",
    "code.html",
  );

  return new Response(await readFile(source, "utf8"), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
