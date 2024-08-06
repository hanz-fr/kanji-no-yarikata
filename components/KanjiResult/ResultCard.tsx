'use client';

import React from "react";

import { useRouter } from "next/navigation";

import { IResultCard } from "@/interfaces";

const ResultCard: React.FC<IResultCard> = ({
  id,
  kanji,
  onyomi,
  onyomiRomaji,
  kunyomi,
  kunyomiRomaji,
  meaning
}) => {
  const router = useRouter();

  return (
    <div
      className="border border-r-0 border-l-0 border-b-0 border-t-gray-200 dark:border-t-zinc-800 border-b-gray-200 w-full h-fit hover:bg-gray-100 dark:hover:bg-zinc-800 hover:cursor-pointer transition-colors"
      onClick={() => router.push(`/kanji/${id}`)}
    >
      <div className="flex justify-between h-full gap-4 md:gap-8">
        <div className="flex gap-2 md:gap-4">
          {/* Kanji Leading */}
          <span className="w-10 md:w-12 h-10 md:h-12 my-auto">
            <p className="font-bold text-2xl text-center p-2">{kanji}</p>
          </span>
          {/* On'yomi Kun'yomi Column */}
          <div className="flex gap-2 md:gap-4">
            <div className="flex flex-col gap-5 my-auto">
              <div className="px-1 text-nowrap text-xs text-center text-[#C2C2C2] border">
                音読み
              </div>
              <div className="px-1 text-xs text-center text-[#C2C2C2] border">
                訓読み
              </div>
            </div>
            <div className="flex flex-col gap-2 my-2">
              <div className="flex flex-col">
                <span className="onyomi-text">{onyomi}</span>
                <span className="onyomi-romaji-text">{onyomiRomaji}</span>
              </div>
              <div className="flex flex-col">
                <div className="kunyomi-text">{kunyomi}</div>
                <div className="kunyomi-romaji-text">{kunyomiRomaji}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Meaning */}
        <div className="my-auto text-[14px] truncate">({meaning})</div>
      </div>
    </div>
  );
};

export default ResultCard;
