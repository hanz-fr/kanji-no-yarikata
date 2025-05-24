import { IKanji } from "@/interfaces";
import Link from "next/link";
import React from "react";

export default function N4KanjiSection(props: {N4Kanji: IKanji[] | undefined }) {
  return (
    <>
      {/* N4 Kanji */}
      <div className="flex flex-col">
        <span>N4 Kanji</span>
        <hr className="border-black dark:border-white mt-3" />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 py-5 gap-y-4 place-items-center">
        {props.N4Kanji?.map((e) => (
          <Link
            key={e.id}
            href={`/kanji/${e.id}`}
            className="w-20 h-20 border-[1px] rounded-md border-[#E4E4E4] hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <span className="h-full items-center flex justify-center text-xl">
              {e.kanji}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
