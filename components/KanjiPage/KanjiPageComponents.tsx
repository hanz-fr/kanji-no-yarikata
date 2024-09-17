import React from "react";

import { Button } from "../ui/button";
import { FiVolume2 } from "react-icons/fi";
import { MdOutlineDraw } from "react-icons/md";
import KanjiReferenceHover from "../KanjiReferenceHover/KanjiReferenceHover";

export function KanjiHeadingContainer(kanjiData: {
  kanji: string | undefined;
  meaning: string | undefined;
}) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-3">
        <span className="flex justify-center text-[60px]">
          {kanjiData?.kanji}
        </span>
        <span className="flex justify-center">({kanjiData?.meaning})</span>
        <div className="flex justify-center gap-2">
          <Button className="p-3 rounded-full bg-[#D9D9D9] ">
            <FiVolume2 className="text-lg" color="black" />
          </Button>
          <Button className="p-3 rounded-full bg-[#D9D9D9] ">
            <MdOutlineDraw className="text-lg" color="black" />
          </Button>
        </div>
      </div>
    </div>
  );
}


export function JlptGradeStrokesContainer(kanjiData: {
  jlpt: string | undefined;
  grade: number | undefined;
  strokeCount: number | undefined;
}) {
  return (
    <div className="flex gap-1 justify-evenly w-full md:w-1/2 md:mx-auto h-1/2 rounded-sm border py-4">
      <div className="w-14 h-full flex flex-col text-center rounded-md my-auto">
        <span className="font-normal text-[15px]">{kanjiData?.jlpt}</span>
        <span className="font-thin text-[12px]">JLPT</span>
      </div>
      <div className="vertical-separator"></div>
      <div className="w-14 h-full flex flex-col text-center rounded-md my-auto">
        <span className="font-normal text-[15px]">{kanjiData?.grade}</span>
        <span className="font-thin text-[12px]">Grade</span>
      </div>
      <div className="vertical-separator"></div>
      <div className="w-14 h-full flex flex-col text-center rounded-md my-auto">
        <span className="font-normal text-[15px]">
          {kanjiData?.strokeCount}
        </span>
        <span className="font-thin text-[12px]">Stroke(s)</span>
      </div>
    </div>
  );
}


export function OnyomiKunyomiContainer(kanjiData: {
  onyomi: string | undefined;
  onyomiRomaji: string | undefined;
  kunyomi: string | undefined;
  kunyomiRomaji: string | undefined;
}) {
  return (
    <div className="flex flex-col w-full px-5 gap-4 justify-evenly md:w-1/2 md:mx-auto h-1/2 rounded-sm border py-4">
      <div className="flex justify-start gap-7">
        <div className="flex flex-col h-fit">
          <div className="px-1 h-fit my-auto text-nowrap text-normal text-center border border-black dark:border-white">
            音読み
          </div>
          <span className="font-thin text-xs text-center text-[#767676] dark:text-[#8d8d8d]">
            on'yomi
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm">{kanjiData?.onyomi}</span>
          <span className="text-sm text-[#9E9E9E] font-thin">
            {kanjiData?.onyomiRomaji}
          </span>
        </div>
      </div>
      <div className="flex justify-start gap-7">
        <div className="flex flex-col h-fit">
          <div className="px-1 h-fit my-auto text-nowrap text-normal text-center border border-black dark:border-white">
            訓読み
          </div>
          <span className="font-thin text-xs text-center text-[#767676] dark:text-[#8d8d8d]">
            kun'yomi
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm">{kanjiData?.kunyomi}</span>
          <span className="text-sm text-[#9E9E9E] font-thin">
            {kanjiData?.kunyomiRomaji}
          </span>
        </div>
      </div>
    </div>
  );
}


export function MainInformationContainer(kanjiData: {
  radical: string | undefined;
  radicalNumber: number | undefined;
  frequency: string | undefined;
  kanjiComponents: String[] | undefined;
  joyoListStatus: string | undefined;
  mnemonic: string | undefined;
}) {
  return (
    <div className="flex flex-col w-full px-5 gap-4 md:w-1/2 md:mx-auto h-1/2 rounded-sm border py-4 text-sm">
      <div className="flex w-full justify-between">
        <span className="font-normal text-nowrap">Radical :</span>
        <span className="font-thin text-end">
          {kanjiData?.radical} ({kanjiData?.radicalNumber})
        </span>
      </div>
      <div className="flex w-full justify-between">
        <span className="font-normal text-nowrap">Frequency :</span>
        <span className="font-thin text-end">{kanjiData?.frequency}</span>
      </div>
      <div className="flex w-full justify-between">
        <span className="font-normal text-nowrap">Components :</span>
        <span className="font-thin text-end">
          {kanjiData?.kanjiComponents?.map((e: any) => e.component)}
        </span>
      </div>
      <div className="flex w-full justify-between">
        <span className="font-normal text-nowrap">Joyo Status :</span>
        <span className="font-thin text-end">{kanjiData?.joyoListStatus}</span>
      </div>
      <hr />
      <div className="flex flex-col w-full justify-between">
        <span>Mnemonic :</span>
        <span className="font-thin">{kanjiData?.mnemonic}</span>
      </div>
    </div>
  );
}


export function KanjiExamplesContainer(kanjiData: {
  kanjiExamples: Object[] | undefined;
}) {
  return (
    <div className="flex flex-col w-full px-5 gap-4 md:w-1/2 md:mx-auto h-1/2 rounded-sm border py-4 text-sm">
      <span>Examples</span>
      <table className="table-fixed w-full">
        <tbody>
          {kanjiData?.kanjiExamples?.map((e: any) => (
            <tr className="text-start md:text-center" key={e.id}>
              {e.kanjiReferences.length > 0 ? (
                <td className="text-center">
                  <KanjiReferenceHover
                    text={e.word}
                    kanjiReferences={e.kanjiReferences}
                  ></KanjiReferenceHover>
                </td>
              ) : (
                <td className="text-center font-semibold">{e.word}</td>
              )}
              <td className="p-2">{e.kanaReading}</td>
              <td className="p-2">{e.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
