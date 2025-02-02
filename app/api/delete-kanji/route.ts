import { type NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  const req = await fetch(`${API_URL}/kanji/${id}`, {
    method: "DELETE",
  });

  const res = await req.json();
  
  if (!res.ok) {
    return Response.json({
      status: req.status,
      message: req.statusText,
    });
  }

  return Response.json({
    status: 200,
    message: "Kanji successfully deleted."
  });
}
