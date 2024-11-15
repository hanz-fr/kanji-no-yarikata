"use client";

import { useRouter } from "next/navigation";

import React from "react";

export const Container = (props: {
  children: React.ReactNode;
  kanjiId: string;
}) => {
  const router = useRouter();

  return (
    <div
      className="border border-r-0 border-l-0 border-b-0 border-t-gray-200 dark:border-t-zinc-800 border-b-gray-200 w-full h-fit hover:bg-gray-100 dark:hover:bg-zinc-800 hover:cursor-pointer transition-colors"
      onClick={() => router.push(`/kanji/${props.kanjiId}`)}
    >
      <div className="flex justify-between h-full gap-4 md:gap-8">
        {props.children}
      </div>
    </div>
  );
};

export const KanjiGroupingContainer = (props: {
  children: React.ReactNode;
}) => {
  return(
    <div className="flex gap-2 md:gap-4">{props.children}</div>
  )
};

export const Kanji = (props: { kanji: string }) => {
  return (
    <span className="w-10 md:w-12 h-10 md:h-12 my-auto">
      <p className="font-bold text-2xl text-center p-2">{props.kanji}</p>
    </span>
  );
};

export const OnKun = (props: {
  onyomi: string;
  onyomiRomaji: string;
  kunyomi: string;
  kunyomiRomaji: string;
}) => {

  let isRomajiReadingActive = localStorage.getItem("romajiReadingState");

  return (
    <div className="flex gap-2 md:gap-4">
      <div className={`flex flex-col ${isRomajiReadingActive == 'true' ? 'gap-5 my-3' : 'gap-3 my-2'}`}>
        <div className="px-1 text-nowrap text-xs text-center text-[#C2C2C2] border">
          音読み
        </div>
        <div className="px-1 text-xs text-center text-[#C2C2C2] border">
          訓読み
        </div>
      </div>
      <div className={`flex flex-col gap-2 ${isRomajiReadingActive == 'true' ? 'my-2' : 'my-auto'}`}>
        <div className="flex flex-col">
          <span className="onyomi-text">{props.onyomi}</span>
          <span className="onyomi-romaji-text">{isRomajiReadingActive == 'true' && props.onyomiRomaji}</span>
        </div>
        <div className="flex flex-col">
          <div className="kunyomi-text">{props.kunyomi}</div>
          <div className="kunyomi-romaji-text">{isRomajiReadingActive == 'true' && props.kunyomiRomaji}</div>
        </div>
      </div>
    </div>
  );
};

export const KanjiMeaningText = (props: { meaning: string }) => {
  return <div className="my-auto text-[14px] truncate">({props.meaning})</div>;
};
