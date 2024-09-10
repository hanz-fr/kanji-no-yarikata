"use client";
import { useRouter } from "next/navigation";

import React from "react";

import { FiArrowLeft } from "react-icons/fi";

const KanjiPageSkeleton = () => {
  
  const router = useRouter();

  return (
    <div className="flex flex-col w-full md:w-1/2 mx-auto h-screen gap-[10px] p-5">
      <div className="w-full md:w-1/2">
        <FiArrowLeft
          className="cursor-pointer"
          size={25}
          color="#ADADAD"
          onClick={() => {
            router.back();
          }}
        />
      </div>
      {/* Kanji Heading Container */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-3">
          <span className="flex w-32 h-32 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse"></span>
          <div className="w-full flex justify-center">
            <span className="w-20 h-8 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse"></span>
          </div>
          <div className="flex justify-center gap-2">
            <div className="w-10 h-10 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse"></div>
            <div className="w-10 h-10 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse"></div>
          </div>
        </div>
      </div>
      {/* JLPT, Grade, and Strokes Container */}
      <div className="flex gap-1 justify-evenly w-full h-1/2 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse">
        <div className="w-14 h-14 rounded-md my-auto bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="w-14 h-14 rounded-md my-auto bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="w-14 h-14 rounded-md my-auto bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
      </div>
      {/* On'yomi Kun'yomi Container */}
      <div className="grid grid-cols-2 px-10 gap-x-10 place-items-center w-full h-3/4 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse">
        <div className="w-full h-6 md:h-8 rounded-md bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="w-full h-6 md:h-8 rounded-md bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="w-full h-6 md:h-8 rounded-md bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="w-full h-6 md:h-8 rounded-md bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
      </div>
      {/* Main Kanji Information Container */}
      <div className="grid grid-cols-2 px-10 gap-x-10 place-items-center w-full h-3/4 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse">
        <div className="w-full h-6 md:h-8 rounded-md bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="w-full h-6 md:h-8 rounded-md bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="w-full h-6 md:h-8 rounded-md bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
        <div className="w-full h-6 md:h-8 rounded-md bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
      </div>
      {/* Example Container */}
      <div className="w-full h-1/2 mb-3 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse">
        <div className="flex gap-4 w-full m-5">
          <div className="w-32 h-6 md:h-8 rounded-md bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
          <div className="w-20 h-6 md:h-8 rounded-md bg-gray-200 dark:bg-zinc-700 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default KanjiPageSkeleton;
