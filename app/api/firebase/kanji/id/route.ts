import { NextRequest } from "next/server";
import {
  doc,
  query,
  getDoc,
  getDocs,
  where,
  collection,
  limit,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("query") as string;
 
  try {
    let kanji;
    let kanjiExamples: Array<object> = [];
    let kanjiComponents: Array<object> = [];

    const kanjiRef = doc(db, "Kanji", id);
    const kanjiExamplesRef = collection(db, "KanjiExamples");
    const kanjiReferencesRef = collection(db, "KanjiReferences");
    const kanjiComponentsRef = collection(db, "KanjiComponents");

    const kanjiExamplesQuery = query(
      kanjiExamplesRef,
      where("kanjiId", "==", id)
    );

    const kanjiComponentsQuery = query(
      kanjiComponentsRef,
      where("kanjiId", "==", id),
      limit(1)
    );

    const kanjiSnap = await getDoc(kanjiRef);
    const kanjiExamplesSnap = await getDocs(kanjiExamplesQuery);
    const kanjiReferencesSnap = await getDocs(kanjiReferencesRef);
    const kanjiComponentsSnap = await getDocs(kanjiComponentsQuery);

    !kanjiComponentsSnap.empty
      ? kanjiComponents.push(kanjiComponentsSnap.docs[0].data())
      : null;

    // get the references based on current kanji id, then later according to kanjiExampleId
    const kanjiReferences = kanjiReferencesSnap.docs.filter(
      (doc) => doc.data().id.slice(0, 8) == id
    );

    kanjiExamplesSnap.forEach((doc) => {
      const kanjiExampleId = doc.data().id;
      const filteredKanjiReferences = kanjiReferences
        .find((doc) => doc.data().kanjiExampleId == kanjiExampleId)
        ?.data();
      kanjiExamples.push({
        ...doc.data(),
        kanjiReferences: [{ ...filteredKanjiReferences }],
      });
    });

    kanji = {
      ...kanjiSnap.data(),
      kanjiComponents: kanjiComponents,
      kanjiExamples: kanjiExamples,
    };

    if (kanjiSnap.exists()) {
      return Response.json(kanji);
    } else {
      return Response.json({
        status: 204,
        message: `No kanji found with '${id}' id.`,
      });
    }
  } catch (error) {
    return Response.json({
      status: 500,
      error: error,
    });
  }
}
