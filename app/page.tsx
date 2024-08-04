import { Input } from "@/components/ui/input";

import { DarkModeButton } from "@/components/DarkModeButton";
import FilterDropdown from "@/components/FilterDropdown";
import Link from "next/link";
import KanjiResultSkeleton from "@/components/KanjiResult/ResultSkeleton";
import Card from "@/components/KanjiResult/ResultCard";

export default function Home() {
  return (
    <main>
      <DarkModeButton />
      <div className="flex flex-col h-screen items-center justify-center">
        {/* Search */}
        <div className="flex flex-col gap-[30px] md:gap-[61px] mb-[100px]">
          <h1 className="text-center">漢字のやり方</h1>
          <div className="flex">
            <Input
              type="search"
              placeholder="Search kanji..."
              className="focus:ring-0 focus-visible:ring-1 focus-visible:ring-offset-0 border-[#D0D0D0] placeholder:text-[#8D8D8D] transition-all rounded-tr-none rounded-br-none z-10"
            />
            <FilterDropdown />
            <div></div>
          </div>
        </div>
        {/* Result */}
        <div className="w-full absolute md:w-1/2 flex flex-col px-10 top-[55%] md:top-[55%] bg-white dark:bg-transparent z-10">
          {/* <KanjiResultSkeleton /> */}
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="absolute bottom-5 w-full">
        <div className="flex justify-center">
          <Link
            className="font-thin underline text-xs md:text-lg hover:text-zinc-700 dark:hover:text-gray-300"
            href={"/all-kanji"}
          >
            All Kanji Lists
          </Link>
        </div>
      </div>
    </main>
  );
}
