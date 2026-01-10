import { NextRequest } from "next/server";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(req: NextRequest) {
  try {
    const kanjiRef = collection(db, "Kanji");
    const snapshot = await getDocs(kanjiRef);
    
    let updated = 0;
    
    for (const docSnap of snapshot.docs) {
      const data = docSnap.data();
      if (data.meaning) {
        await updateDoc(doc(db, "Kanji", docSnap.id), {
          meaningLowercase: data.meaning.toLowerCase(),
          onyomiLowercase: data.onyomi?.toLowerCase() || "",
          kunyomiLowercase: data.kunyomi?.toLowerCase() || "",
        });
        updated++;
      }
    }
    
    return Response.json({ 
      success: true, 
      message: `Migration complete! Updated ${updated} documents.` 
    });
  } catch (error) {
    console.error("Migration error:", error);
    return Response.json({ 
      success: false, 
      error: String(error) 
    }, { status: 500 });
  }
}