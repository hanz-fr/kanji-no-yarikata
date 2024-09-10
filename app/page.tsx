import Link from "next/link";

import Container from "@/components/Homepage/Container";
import SearchAndResultContainer from "@/components/Homepage/SearchAndResultContainer";
import SearchBar from "@/components/Homepage/SearchBar";
import ResultCardContainer from "@/components/Homepage/ResultCardContainer";
import EmptyDiv from "@/components/Homepage/EmptyDiv";
import { DarkModeButton } from "@/components/DarkModeButton";
import { SearchKanjiProvider } from "@/context/SearchKanjiContextProvider";

export default function Home() {
  return (
    <>
      <SearchKanjiProvider>
        <DarkModeButton />
        <Container>
          <EmptyDiv />
          <SearchAndResultContainer>
            <SearchBar />
            <ResultCardContainer />
          </SearchAndResultContainer>
          <Link
            className="mb-3 md:mb-5 font-thin underline text-xs md:text-lg hover:text-zinc-700 dark:hover:text-gray-300"
            href={"/all-kanji"}
          >
            All Kanji Lists
          </Link>
        </Container>
      </SearchKanjiProvider>
    </>
  );
}
