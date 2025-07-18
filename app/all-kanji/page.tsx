"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import Loading from "./loading";
import Error from "./error";
import N5KanjiSection from "@/components/AllKanjiPage/N5KanjiSection";
import N4KanjiSection from "@/components/AllKanjiPage/N4KanjiSection";
import N3KanjiSection from "@/components/AllKanjiPage/N3KanjiSection";
import { FiArrowLeft } from "react-icons/fi";
import { IKanji } from "@/interfaces";

const AllKanjiPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [N5Kanji, setN5Kanji] = useState<IKanji[]>();
  const [N4Kanji, setN4Kanji] = useState<IKanji[]>();
  const [N3Kanji, setN3Kanji] = useState<IKanji[]>();
  const [errorStatus, setErrorStatus] = useState("");
  const [errorCode, setErrorCode] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [N5res, N4res, N3res] = await Promise.all([
          fetch('/api/firebase/kanji/jlpt?query=N5'),
          fetch('/api/firebase/kanji/jlpt?query=N4'),
          fetch('/api/firebase/kanji/jlpt?query=N3')
        ]);
    
        if (!N5res.ok) {
          setErrorStatus(N5res.statusText);
          setErrorCode(N5res.status.toString());
          return;
        }

        const [N5Data, N4Data, N3Data] = await Promise.all([
          N5res.json(),
          N4res.json(),
          N3res.json(),
        ]);
    
        setN5Kanji(N5Data);
        setN4Kanji(N4Data);
        setN3Kanji(N3Data);
        console.log(N5Data);
      } catch (error) {
        console.error('Error fetching kanji data:', error);
      } finally {
        setTimeout(() => setIsLoading(false), 100);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Loading/>

  if (errorStatus != "") return <Error code={errorCode} status={errorStatus} />;

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
      <N5KanjiSection N5Kanji={N5Kanji}  />
      <N4KanjiSection N4Kanji={N4Kanji} />
      <N3KanjiSection N3Kanji={N3Kanji} />
    </div>
  );
};

export default AllKanjiPage;
