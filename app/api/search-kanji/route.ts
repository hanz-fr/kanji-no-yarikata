import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  console.log(query);

  let data = await fetch(`${API_URL}/kanji/search?query=${query}`);
  let res = await data.json();

  return Response.json(res);
}
