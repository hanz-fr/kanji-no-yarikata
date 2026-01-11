"use client";

import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Loading() {
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
      <div className="mx-auto w-24 h-8 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
      <div className="mt-10 mx-5 md:mx-0 flex flex-col gap-8">
        <div className="text-sm flex flex-col gap-3">
          <div className="w-full h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
          <div className="w-full h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
          <div className="w-full h-14 rounded-sm bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
