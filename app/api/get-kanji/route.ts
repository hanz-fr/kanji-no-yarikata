import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const id = request.nextUrl.searchParams;

  let data = await fetch(`${API_URL}/kanji/${id}`);
  let res = await data.json();

  return Response.json(res);
}

