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
    let lowerCaseSearch = keyword.toLowerCase();

    jlpt.length > 0 && jlpt != "all"
      ? jlptClause.push(jlpt)
      : jlptClause.push("N5", "N4", "N3");

    grade.length > 0 && grade != "all"
      ? gradeClause.push(parseInt(grade))
      : gradeClause.push(1, 2, 3, 4, 5, 6, 7, 8, 9);

    if (searchBy.length > 0 && searchBy !== "all") {
      if (searchBy === "kanji" || searchBy === "meaningLowercase") {
        queries.push(
          query(
            kanjiRef,
            where(searchBy, ">=", lowerCaseSearch),
            where(searchBy, "<", lowerCaseSearch + "\uf8ff"),
            where("grade", "in", gradeClause),
            where("jlpt", "in", jlptClause)
          )
        );
      } else {
        queries.push(
          query(
            kanjiRef,
            where(searchBy, "array-contains", lowerCaseSearch),
            where("grade", "in", gradeClause),
            where("jlpt", "in", jlptClause)
          )
        );
      }
    } else {
      queries.push(
        query(
          kanjiRef,
          where("kanji", ">=", lowerCaseSearch),
          where("kanji", "<", lowerCaseSearch + "\uf8ff"),
          where("grade", "in", gradeClause),
          where("jlpt", "in", jlptClause)
        ),
        query(
          kanjiRef,
          where("meaningLowercase", ">=", lowerCaseSearch),
          where("meaningLowercase", "<", lowerCaseSearch + "\uf8ff"),
          where("grade", "in", gradeClause),
          where("jlpt", "in", jlptClause)
        )
      );

      const readingsQuery = query(
        kanjiRef,
        where("grade", "in", gradeClause),
        where("jlpt", "in", jlptClause)
      );
      
      queries.push(readingsQuery);
    }

    const snapshots = await Promise.all(queries.map((q) => getDocs(q)));

    const allDocsMap = new Map();

    snapshots.forEach((snapshot, index) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        
        if (searchBy.length <= 0 || searchBy === "all") {
          if (index === 2) {
            const kunyomi = data.kunyomi || [];
            const onyomi = data.onyomi || [];
            const kunyomiRomaji = data.kunyomiRomaji || [];
            const onyomiRomaji = data.onyomiRomaji || [];
            
            const allReadings = [
              ...kunyomi,
              ...onyomi,
              ...kunyomiRomaji,
              ...onyomiRomaji
            ];
            
            const hasMatch = allReadings.some(reading =>
              reading && reading.toLowerCase().includes(lowerCaseSearch)
            );
            
            if (hasMatch) {
              allDocsMap.set(doc.id, { id: doc.id, ...data });
            }
          } else {
            allDocsMap.set(doc.id, { id: doc.id, ...data });
          }
        } else {
          allDocsMap.set(doc.id, { id: doc.id, ...data });
        }
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