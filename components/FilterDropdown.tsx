import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FiSliders } from "react-icons/fi";
import { useFilterContext } from "@/context/FilterContext";

const FilterDropdown = () => {
  const {
    jlptFilter,
    setJlptFilter,
    gradeFilter,
    setGradeFilter,
    searchByFilter,
    setSearchByFilter,
  } = useFilterContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border rounded-md rounded-tl-none border-[#D0D0D0] dark:border-zinc-800 border-l-0 rounded-bl-none px-3 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors">
        <FiSliders />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuLabel>Filters</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="w-full flex gap-2 justify-between">
            <span className="my-auto font-light">JLPT</span>
            <Select value={jlptFilter} onValueChange={(val) => setJlptFilter(val)}>
              <SelectTrigger className="w-20">
                <SelectValue placeholder="..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="N5">N5</SelectItem>
                <SelectItem value="N4">N4</SelectItem>
                <SelectItem value="N3">N3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="w-full flex gap-2 justify-between">
            <span className="my-auto font-light">Grade</span>
            <Select value={gradeFilter} onValueChange={(val) => setGradeFilter(val)}>
              <SelectTrigger className="w-20">
                <SelectValue placeholder="..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>
                <SelectItem value="7">7</SelectItem>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="9">9</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="w-full flex gap-2 justify-between">
            <span className="my-auto font-light">Search by</span>
            <Select value={searchByFilter} onValueChange={(val) => setSearchByFilter(val)}>
              <SelectTrigger className="w-20">
                <SelectValue placeholder="..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="kanji">Kanji</SelectItem>
                <SelectItem value="meaning">Meaning</SelectItem>
                <SelectItem value="onyomi">On'yomi</SelectItem>
                <SelectItem value="kunyomi">Kun'yomi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
