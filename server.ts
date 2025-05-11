import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { join, fromFileUrl } from "https://deno.land/std@0.192.0/path/mod.ts";

const PORT = 8000;

const kv = await Deno.openKv();

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname === "/save-record" && request.method === "POST") {
    const { name, time } = await request.json();
    const record = { name, time, place: 0 };
    await kv.set(["records", Date.now()], record);
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  if (url.pathname === "/leaderboard" && request.method === "GET") {
    const records = [];
    for await (const entry of kv.list({ prefix: ["records"] })) {
      records.push(entry.value);
    }
    // Sorting
    records.sort((a, b) => a.time - b.time);
    // Update places
    records.forEach((record, index) => {
      record.place = index + 1;
    });
    // Return top 10
    const top10 = records.slice(0, 10);
    return new Response(JSON.stringify(top10), {
      headers: { "Content-Type": "application/json" },
    });
  }

  let filePath = join(fromFileUrl(import.meta.url), "..", url.pathname);
  if (url.pathname === "/") {
    filePath = join(fromFileUrl(import.meta.url), "..", "index.html");
  }

  try {
    const file = await Deno.readFile(filePath);
    const contentType = getContentType(filePath);
    return new Response(file, {
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return new Response("File not found", { status: 404 });
    }
    return new Response("Internal server error", { status: 500 });
  }
}

function getContentType(filePath: string): string {
  const extension = filePath.split(".").pop()?.toLowerCase();
  switch (extension) {
    case "html":
      return "text/html";
    case "js":
      return "application/javascript";
    case "css":
      return "text/css";
    case "png":
      return "image/png";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    default:
      return "text/plain";
  }
}

// Start
console.log(`Server running at http://localhost:${PORT}`);
await serve(handleRequest, { port: PORT }); 