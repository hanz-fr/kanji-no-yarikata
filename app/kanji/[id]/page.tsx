"use client";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

import Loading from "./loading";
import Error from "./error";
import { FiArrowLeft } from "react-icons/fi";
import { IKanji } from "@/interfaces";
import {
  JlptGradeStrokesContainer,
  KanjiExamplesContainer,
  KanjiHeadingContainer,
  MainInformationContainer,
  OnyomiKunyomiContainer,
} from "@/components/KanjiPage/KanjiPageComponents";

const KanjiPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [kanjiData, setKanjiData] = useState<IKanji>();
  const [errorStatus, setErrorStatus] = useState("");
  const [errorCode, setErrorCode] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/get-kanji?id=${id}`);

      if (res.ok) {
        const json = await res.json();
        const data = await json.data;
        setKanjiData(data);
        setTimeout(() => setIsLoading(false), 100);
      } else {
        setErrorCode(res.status);
        setErrorStatus(res.statusText.toString());
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Loading/>

  if (errorStatus != "") return <Error code={errorCode} status={errorStatus} />;

  return (
    <div className="flex flex-col gap-[10px] px-5 py-3">
      <div className="w-full md:w-1/2 md:mx-auto">
        <FiArrowLeft
          className="cursor-pointer"
          size={25}
          color="#ADADAD"
          onClick={() => {
            router.back();
          }}
        />
      </div>
      <KanjiHeadingContainer
        kanji={kanjiData?.kanji}
        meaning={kanjiData?.meaning}
      />
      <JlptGradeStrokesContainer
        jlpt={kanjiData?.jlpt}
        grade={kanjiData?.grade}
        strokeCount={kanjiData?.strokeCount}
      />
      <OnyomiKunyomiContainer
        onyomi={kanjiData?.onyomi}
        onyomiRomaji={kanjiData?.onyomiRomaji}
        kunyomi={kanjiData?.kunyomi}
        kunyomiRomaji={kanjiData?.kunyomiRomaji}
      />
      <MainInformationContainer
        radical={kanjiData?.radical}
        radicalNumber={kanjiData?.radicalNumber}
        frequency={kanjiData?.frequency}
        kanjiComponents={kanjiData?.kanjiComponents}
        joyoListStatus={kanjiData?.joyoListStatus}
        mnemonic={kanjiData?.mnemonic}
      />
      {/* Example Container */}
      <KanjiExamplesContainer kanjiExamples={kanjiData?.kanjiExamples} />
    </div>
  );
};

export default KanjiPage;
