import React from "react";

import { FiArrowLeft, FiVolume2 } from "react-icons/fi";
import { MdOutlineDraw } from "react-icons/md";
import { Button } from "@/components/ui/button";
import PageSkeleton from "@/components/KanjiPage/PageSkeleton";

const KanjiPage = () => {
  return <PageSkeleton/>
    {/* <div className="flex flex-col">
      <FiArrowLeft className="m-2" size={25} color="#ADADAD"/>
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-3">
          <span className="flex justify-center text-[60px]">光</span>
          <span className="flex justify-center">(ray, light)</span>
          <div className="flex justify-center gap-2">
            <Button className="p-3 rounded-full bg-[#D9D9D9] ">
              <FiVolume2 className="text-lg" color="black"/>
            </Button>
            <Button className="p-3 rounded-full bg-[#D9D9D9] ">
              <MdOutlineDraw className="text-lg" color="black"/>
            </Button>
          </div>
        </div>
      </div>
    </div> */}

};

export default KanjiPage;
