import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const req = await request.json();
  const result = await fetch(`${API_URL}/kanji`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  return Response.json({
    status: result.status,
    message: result.statusText,
  });
}
