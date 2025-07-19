import { NextRequest } from "next/server";
import { doc, getDocs, query, where, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { IResultCard } from "@/interfaces";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const filterQuery = searchParams.get('q');
    const [keyword = '', jlpt = '', grade = '', searchBy = ''] = filterQuery?.split('-') || [];
    const filters = [];

    // TODO: FIX CONDITIONAL SEARCHING
    console.log(keyword+"."+jlpt+"."+grade+"."+searchBy);
    console.log(keyword!=undefined);

    if (keyword) {
        if (searchBy) {
            filters.push(where(keyword, "in", searchBy));
        } else {
            filters.push(where(keyword, "in", ["kanji", "meaning", "onyomi", "onyomiRomaji", "kunyomi", "kunyomiRomaji"]));
        }
    }

    if (jlpt) {
        filters.push(where("jlpt", "==", jlpt));
    }

    if (grade) {
        filters.push(where("grade", "==", grade));
    }

    const q = query(collection(db, "Kanji"), ...filters);
    const snapshot = await getDocs(q);
    const searchResult = snapshot.docs.map((doc: IResultCard) => ({
        id: doc.id,
        kanji: doc.kanji,
        meaning: doc.meaning,
        kunyomi: doc.kunyomi,
        kunyomiRomaji: doc.kunyomiRomaji,
        onyomi: doc.onyomi,
        onyomiRomaji: doc.onyomiRomaji,
    }));
    console.log(searchResult);
}