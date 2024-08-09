'use client';
import React from "react";

import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function AllKanjiPageSkeleton() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center w-full p-5 md:w-1/2 md:mx-auto">
      <FiArrowLeft
        className="mb-5 cursor-pointer"
        size={25}
        color="#ADADAD"
        onClick={() => {
          router.back();
        }}
      />
      <div className="flex flex-col">
        <span className="w-20 h-5 bg-gray-200 dark:bg-zinc-800 animate-pulse rounded-sm"></span>
        <hr className="border-black dark:border-white mt-3" />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 py-5 gap-y-4 place-items-center">
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
      </div>
      <div className="flex flex-col mt-5">
        <span className="w-20 h-5 bg-gray-200 dark:bg-zinc-800 animate-pulse rounded-sm"></span>
        <hr className="border-black dark:border-white mt-3" />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 py-5 gap-y-4 place-items-center">
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        <div className="w-14 h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
      </div>
    </div>
  );
}
