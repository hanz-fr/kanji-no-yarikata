export async function GET() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  let data = await fetch(`${API_URL}/kanji`);
  let res = await data.json();

  return Response.json(res);
}
