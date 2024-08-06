import React from "react";
import { FiArrowLeft, FiVolume2 } from "react-icons/fi";
import { MdOutlineDraw } from "react-icons/md";
import { Button } from "@/components/ui/button";

export default function loading() {
  return (
    <div className="flex flex-col">
      <FiArrowLeft className="m-2" size={25} color="#ADADAD" />
      {/* Kanji Heading Container */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-3">
          <span className="flex justify-center w-32 h-32 bg-gray-100"></span>
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
    </div>
  );
};
