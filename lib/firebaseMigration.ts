import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

async function migrateMeaningToLowercase() {
  const kanjiRef = collection(db, "Kanji");
  const snapshot = await getDocs(kanjiRef);
  
  const updates = snapshot.docs.map(async (docSnap) => {
    const data = docSnap.data();
    if (data.meaning && !data.meaningLowercase) {
      await updateDoc(doc(db, "Kanji", docSnap.id), {
        meaningLowercase: data.meaning.toLowerCase()
      });
    }
  });
  
  await Promise.all(updates);
  console.log("Migration complete!");
}