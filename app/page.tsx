import { Input } from "@/components/ui/input";

import { DarkModeButton } from "@/components/DarkModeButton";
import FilterDropdown from "@/components/FilterDropdown";
import Link from "next/link";
import KanjiResultSkeleton from "@/components/KanjiResult/KanjiResultSkeleton";

export default function Home() {
  return (
    <main>
      <DarkModeButton />
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex flex-col gap-[30px] md:gap-[61px]">
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
        <div className="w-full md:w-1/2 flex flex-col gap-2 px-10 absolute top-[60%] md:top-[62%] bg-white dark:bg-transparent z-10">
          <KanjiResultSkeleton />
          <KanjiResultSkeleton />
          <KanjiResultSkeleton />
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
