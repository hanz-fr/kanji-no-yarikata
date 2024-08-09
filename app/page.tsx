import { Input } from "@/components/ui/input";

import { DarkModeButton } from "@/components/DarkModeButton";
import FilterDropdown from "@/components/FilterDropdown";
import Link from "next/link";
import ResultCard from "@/components/ResultCard/Card";
import data from "../counterfeit_data.json";

export default function Home() {
  return (
    <main>
      <DarkModeButton />
      <div className="flex flex-col h-screen items-center justify-between">
        <div></div>
        <div className="w-full md:w-1/2 flex flex-col px-10">
          {/* Search */}
          <div className="w-full md:w-1/2 mx-auto flex flex-col gap-[30px] md:gap-[61px] mb-[20px]">
            <h1 className="text-center">漢字のやり方</h1>
            <div className="flex">
              <Input
                type="search"
                placeholder="Search kanji..."
                className="focus:ring-0 focus-visible:ring-1 focus-visible:ring-offset-0 border-[#D0D0D0] placeholder:text-[#8D8D8D] transition-all rounded-tr-none rounded-br-none z-10"
              />
              <FilterDropdown />
            </div>
          </div>
          {/* Result */}
          <div className="bg-white dark:bg-transparent">
            {data.data.map((e) => (
              <ResultCard
                id={e.id}
                key={e.id}
                kanji={e.kanji}
                meaning={e.meaning}
                kunyomi={e.kunyomi}
                kunyomiRomaji={e.kunyomiRomaji}
                onyomi={e.onyomi}
                onyomiRomaji={e.onyomiRomaji}
              />
            ))}
          </div>
        </div>
        {/* All Kanji List Link */}
        <Link
          className="mb-3 md:mb-5 font-thin underline text-xs md:text-lg hover:text-zinc-700 dark:hover:text-gray-300"
          href={"/all-kanji"}
        >
          All Kanji Lists
        </Link>
      </div>
    </main>
  );
}
