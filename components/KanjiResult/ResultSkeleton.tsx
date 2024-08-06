import React from "react";

const KanjiResultSkeleton = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-t-gray-200 dark:border-t-zinc-800 border-b-gray-200 w-full h-14 md:h-16">
      <div className="flex justify-between mx-2 md:mx-5 h-full gap-4 md:gap-8">
        <div className="flex gap-4">
          {/* Kanji Leading */}
          <span className="w-10 md:w-12 h-10 md:h-12 rounded-sm bg-gray-100 dark:bg-zinc-800 my-auto animate-pulse"></span>
          {/* On'yomi Kun'yomi Column */}
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 my-2">
              <div className="w-12 h-8 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse"></div>
              <div className="w-12 h-8 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-2 my-2">
              <div className="w-5 h-8 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse"></div>
              <div className="w-10 h-8 rounded-sm bg-gray-100 dark:bg-zinc-800 animate-pulse"></div>
            </div>
          </div>
        </div>
        {/* Meaning */}
        <div className="w-12 md:w-16 h-4 rounded-sm bg-gray-100 dark:bg-zinc-800 my-auto animate-pulse"></div>
      </div>
    </div>
  );
};

export default KanjiResultSkeleton;
