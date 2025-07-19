import { NextRequest } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("query") as string;

  try {
    const docRef = doc(db, "Kanji", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return Response.json(docSnap.data());
    } else {
      return Response.json({
        status: 204,
        message: `No kanji found with '${id}' id.`
      })
    }
  } catch (error) {
    return Response.json({
      status: 500,
      error: error,
    });
  }
}
