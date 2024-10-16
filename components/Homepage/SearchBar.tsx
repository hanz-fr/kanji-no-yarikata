"use client";

import { useEffect, useState } from "react";

import FilterDropdown from "./FilterDropdown";
import { Input } from "../ui/input";
import { useSearchKanjiContext } from "@/context/SearchKanjiContext";

export default function SearchBar() {
  const { setSearchInputValue } = useSearchKanjiContext();
  const [inputListener, setInputListener] = useState();

  /* set search value only after user finishes typing */
  useEffect(() => {
    const delaySearchFn = setTimeout(() => {
      setSearchInputValue(inputListener!);
    }, 700);

    return () => clearTimeout(delaySearchFn);
  }, [inputListener]);

  return (
    <div className="w-full md:w-1/2 mx-auto flex flex-col gap-[30px] md:gap-[61px] mb-[20px]">
      <h1 className="text-center  text-nowrap">漢字のやり方</h1>
      <div className="flex">
        <Input
          type="search"
          placeholder="Search kanji..."
          onChange={(e: any) => setInputListener(e.target.value)}
          value={inputListener}
          className="focus:ring-0 focus-visible:ring-1 focus-visible:ring-offset-0 border-[#D0D0D0] placeholder:text-[#8D8D8D] transition-all rounded-tr-none rounded-br-none z-10"
        />
        <FilterDropdown />
      </div>
    </div>
  );
}
