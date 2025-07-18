import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function GET(req: NextRequest, res: NextResponse) {
  
  const searchParams = req.nextUrl.searchParams;
  const jlpt = searchParams.get('query');

  try {
    const snapshot = await db.collection("Kanji").where('jlpt', '==', jlpt).get();
    const kanjiList = snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
    return Response.json(kanjiList);
  } catch (error) {
    return Response.json({
      status: "error",
      error: error,
    });
  }
}