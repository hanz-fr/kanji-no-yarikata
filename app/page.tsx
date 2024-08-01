import Image from "next/image";

import { Input } from "@/components/ui/input";

import { DarkModeButton } from "@/components/dark-mode-button";
import FilterDropdown from "@/components/filter-dropdown";

export default function Home() {
  return (
    <main>
      <DarkModeButton/>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col gap-[43px] md:gap-[61px]">
          <h1 className="text-center">漢字のやり方</h1>
          <div className="flex">
            <Input
              type="search"
              placeholder="Search kanji..."
              className="focus:ring-0 focus-visible:ring-1 focus-visible:ring-offset-0 border-[#D0D0D0] placeholder:text-[#8D8D8D] transition-all rounded-tr-none rounded-br-none z-10"
            />
            <FilterDropdown/>
            {/* <Button variant="outline" className="rounded-tl-none border-[#D0D0D0] border-l-0 rounded-bl-none">
              <FiSliders />
            </Button> */}
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
}
