"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Loading from "./loading";
import { FiArrowLeft } from "react-icons/fi";

const AllKanjiPage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col justify-center w-full p-5 md:w-1/2 md:mx-auto">
      <FiArrowLeft
        className="mb-5 cursor-pointer"
        size={25}
        color="#ADADAD"
        onClick={() => {
          router.back();
        }}
      />
      {/* N5 Kanji */}
      <div className="flex flex-col">
        <span>N5 Kanji</span>
        <hr className="border-black dark:border-white mt-3" />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 py-5 gap-y-4 place-items-center">
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
      </div>
      {/* N4 Kanji */}
      <div className="flex flex-col">
        <span>N4 Kanji</span>
        <hr className="border-black dark:border-white mt-3" />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 py-5 gap-y-4 place-items-center">
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
      </div>
      {/* N3 Kanji */}
      <div className="flex flex-col">
        <span>N3 Kanji</span>
        <hr className="border-black dark:border-white mt-3" />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 py-5 gap-y-4 place-items-center">
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
        <div className="w-14 h-14  border-[1px] rounded-sm border-[#E4E4E4]"></div>
      </div>
    </div>
  );
};

export default AllKanjiPage;
