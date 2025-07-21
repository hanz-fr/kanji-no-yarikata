import { NextRequest } from "next/server";
import {
  getDocs,
  query,
  where,
  collection,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const filterQuery = searchParams.get("q");
  const [keyword = "", jlpt = "", grade = "", searchBy = ""] =
    filterQuery?.split("-") || [];

  try {
    const kanjiRef = collection(db, "Kanji");
    let queries = [];
    let jlptClause = [];
    let gradeClause = [];

    jlpt.length > 0 && jlpt != "all"
      ? jlptClause.push(jlpt)
      : jlptClause.push("N5", "N4", "N3");

    grade.length > 0 && grade != "all"
      ? gradeClause.push(parseInt(grade))
      : gradeClause.push(1, 2, 3, 4, 5, 6, 7, 8, 9);

    if (searchBy.length <= 0 || searchBy == "all") {
      queries.push(
        query(
          kanjiRef,
          where("kanji", ">=", keyword),
          where("kanji", "<", keyword + "\uf8ff"),
          where("grade", "in", gradeClause),
          where("jlpt", "in", jlptClause)
        ),
        query(
          kanjiRef,
          where("meaning", ">=", keyword),
          where("meaning", "<", keyword + "\uf8ff"),
          where("grade", "in", gradeClause),
          where("jlpt", "in", jlptClause)
        ),
        query(
          kanjiRef,
          where("onyomi", ">=", keyword),
          where("onyomi", "<", keyword + "\uf8ff"),
          where("grade", "in", gradeClause),
          where("jlpt", "in", jlptClause)
        ),
        query(
          kanjiRef,
          where("onyomiRomaji", ">=", keyword),
          where("onyomiRomaji", "<", keyword + "\uf8ff"),
          where("grade", "in", gradeClause),
          where("jlpt", "in", jlptClause)
        ),
        query(
          kanjiRef,
          where("kunyomi", ">=", keyword),
          where("kunyomi", "<", keyword + "\uf8ff"),
          where("grade", "in", gradeClause),
          where("jlpt", "in", jlptClause)
        ),
        query(
          kanjiRef,
          where("kunyomiRomaji", ">=", keyword),
          where("kunyomiRomaji", "<", keyword + "\uf8ff"),
          where("grade", "in", gradeClause),
          where("jlpt", "in", jlptClause)
        )
      );
    } else {
      queries.push(
        query(
          kanjiRef,
          where(searchBy, "==", keyword),
          where("grade", "in", gradeClause),
          where("jlpt", "in", jlptClause)
        )
      );
    }

    const snapshots = await Promise.all(queries!.map((q) => getDocs(q)));

    const allDocsMap = new Map();

    snapshots.forEach((snapshot) => {
      snapshot.forEach((doc) => {
        allDocsMap.set(doc.id, { id: doc.id, ...doc.data() });
      });
    });

    const results = Array.from(allDocsMap.values());

    return Response.json(results);
  } catch (error) {
    return Response.json({
      status: 500,
      message: error,
    });
  }
}
