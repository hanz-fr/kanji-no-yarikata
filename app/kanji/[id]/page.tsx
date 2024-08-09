"use client";
import React from "react";

import { FiArrowLeft, FiVolume2 } from "react-icons/fi";
import { MdOutlineDraw } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const KanjiPage = () => {
  const router = useRouter();

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
      {/* Kanji Heading Container */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-3">
          <span className="flex justify-center text-[60px]">光</span>
          <span className="flex justify-center">(ray, light)</span>
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
      {/* JLPT, Grade, and Strokes Container */}
      <div className="flex gap-1 justify-evenly w-full md:w-1/2 md:mx-auto h-1/2 rounded-sm border py-4">
        <div className="w-14 h-full flex flex-col text-center rounded-md my-auto">
          <span className="font-normal text-[15px]">N3</span>
          <span className="font-thin text-[12px]">JLPT</span>
        </div>
        <div className="vertical-separator"></div>
        <div className="w-14 h-full flex flex-col text-center rounded-md my-auto">
          <span className="font-normal text-[15px]">2</span>
          <span className="font-thin text-[12px]">Grade</span>
        </div>
        <div className="vertical-separator"></div>
        <div className="w-14 h-full flex flex-col text-center rounded-md my-auto">
          <span className="font-normal text-[15px]">6</span>
          <span className="font-thin text-[12px]">Stroke(s)</span>
        </div>
      </div>
      {/* On'yomi Kun'yomi Container */}
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
            <span className="text-sm">コウ</span>
            <span className="text-sm text-[#9E9E9E] font-thin">kou</span>
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
            <span className="text-sm">ひか(る)、ひかり</span>
            <span className="text-sm text-[#9E9E9E] font-thin">
              hikaru, hikari
            </span>
          </div>
        </div>
      </div>
      {/* Main Kanji Information Container */}
      <div className="flex flex-col w-full px-5 gap-4 md:w-1/2 md:mx-auto h-1/2 rounded-sm border py-4 text-sm">
        <div className="flex w-full justify-between">
          <span className="font-normal text-nowrap">Radical :</span>
          <span className="font-thin text-end">儿 (legs)</span>
        </div>
        <div className="flex w-full justify-between">
          <span className="font-normal text-nowrap">Frequency :</span>
          <span className="font-thin text-end">Common</span>
        </div>
        <div className="flex w-full justify-between">
          <span className="font-normal text-nowrap">Components :</span>
          <span className="font-thin text-end">
            ⺌ (小) small
            <br />兀 one pair of legs
          </span>
        </div>
        <div className="flex w-full justify-between">
          <span className="font-normal text-nowrap">Joyo Status :</span>
          <span className="font-thin text-end">常用 jōyō (regular use)</span>
        </div>
        <hr />
        <div className="flex flex-col w-full justify-between">
          <span>Mnemonic :</span>
          <span className="font-thin">
            A person carries fire that shines light
          </span>
        </div>
      </div>
      {/* Example Container */}
      <div className="flex flex-col w-full px-5 gap-4 md:w-1/2 md:mx-auto h-1/2 rounded-sm border py-4 text-sm">
        <span>Examples</span>
        <table className="table-fixed w-full">
          <tr className="text-start md:text-center">
            <td className="p-2 font-semibold">日光</td>
            <td className="p-2">にっこう</td>
            <td className="p-2">sunshine, sunlight</td>
          </tr>
          <tr className="text-start md:text-center">
            <td className="p-2 font-semibold">月光</td>
            <td className="p-2">げっこう</td>
            <td className="p-2">moonlight</td>
          </tr>
          <tr className="text-start md:text-center">
            <td className="p-2 font-semibold">光年</td>
            <td className="p-2">こうねん</td>
            <td className="p-2">light year</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default KanjiPage;
