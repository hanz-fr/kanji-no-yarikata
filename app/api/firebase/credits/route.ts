import { NextRequest, NextResponse } from "next/server";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const querySnapshot = await getDocs(collection(db, "Credits"));
    const credits = querySnapshot.docs.map((doc: any) => {
      const data = doc.data();

      return {
        id: doc.id,
        author: data.author,
        description: data.description,
        link: data.link
      }
    });
    return Response.json(credits);
  } catch (error) {
    return Response.json({
      status: "error",
      error: error,
    });
  }
}
