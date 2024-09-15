"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import Loading from "./loading";
import { FiArrowLeft } from "react-icons/fi";
import { IKanji } from "@/interfaces";

const AllKanjiPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [N5Kanji, setN5Kanji] = useState<IKanji[]>();
  const [N4Kanji, setN4Kanji] = useState<IKanji[]>();
  const [N3Kanji, setN3Kanji] = useState<IKanji[]>();

  useEffect(() => {
    const fetchData = () => {
      const fetchN5 = fetch(`/api/kanji/jlpt?query=N5`);
      const fetchN4 = fetch(`/api/kanji/jlpt?query=N4`);
      const fetchN3 = fetch(`/api/kanji/jlpt?query=N3`);

      Promise.all([fetchN5, fetchN4, fetchN3]).then(async (values) => {
        const N5res = await values[0].json();
        const N4res = await values[1].json();
        const N3res = await values[2].json();

        setN5Kanji(await N5res.data);
        setN4Kanji(await N4res.data);
        setN3Kanji(await N3res.data);

        setIsLoading(false);
      });
    };

    fetchData();
  }, []);

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
        {N5Kanji?.map((e) => (
          <div className="w-14 h-14 border-[1px] rounded-sm border-[#E4E4E4]">
            <span className="h-full items-center flex justify-center">
              {e.kanji}
            </span>
          </div>
        ))}
      </div>
      {/* N4 Kanji */}
      <div className="flex flex-col">
        <span>N4 Kanji</span>
        <hr className="border-black dark:border-white mt-3" />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 py-5 gap-y-4 place-items-center">
        {N4Kanji?.map((e) => (
          <div className="w-14 h-14 border-[1px] rounded-sm border-[#E4E4E4]">
            <span className="h-full items-center flex justify-center">
              {e.kanji}
            </span>
          </div>
        ))}
      </div>
      {/* N3 Kanji */}
      <div className="flex flex-col">
        <span>N3 Kanji</span>
        <hr className="border-black dark:border-white mt-3" />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 py-5 gap-y-4 place-items-center">
        {N3Kanji?.map((e) => (
          <div className="w-14 h-14 border-[1px] rounded-sm border-[#E4E4E4]">
            <span className="h-full items-center flex justify-center">
              {e.kanji}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllKanjiPage;
