import { NextRequest, NextResponse } from "next/server";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function GET(req: NextRequest, res: NextResponse) {
  
  const searchParams = req.nextUrl.searchParams;
  const jlpt = searchParams.get('query');
  
  try {
    const q = query(collection(db, "Kanji"), where("jlpt", "==", jlpt));
    const querySnapshot = await getDocs(q);
    const kanjiList = querySnapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
    return Response.json(kanjiList);
  } catch (error) {
    return Response.json({
      status: "error",
      error: error,
    });
  }
}