import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/firebaseAdmin";

// TODO: Figure out why fetch kanji by id not working
export async function GET(req: NextRequest, res: NextResponse) {
  
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get('query');

  try {
    const kanjiRef = db.collection('Kanji').doc(id!.toString());
    const doc = await kanjiRef.get();
    return Response.json(doc.data());
  } catch (error) {
    return Response.json({
      status: 500,
      error: error,
    })
  }
}