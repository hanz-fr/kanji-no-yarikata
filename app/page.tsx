import Image from "next/image";

import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col gap-[43px] md:gap-[61px]">
          <h1 className="text-center">漢字のやり方</h1>
          <Input
            type="search"
            placeholder="Search Kanji..."
            className="focus:ring-0 focus-visible:ring-1 focus-visible:ring-offset-0 border-[#D0D0D0] placeholder:text-[#8D8D8D] transition-all"
          />
        </div>
      </div>
    </main>
  );
}
