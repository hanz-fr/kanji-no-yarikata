import Link from "next/link";

import Container from "@/components/Homepage/Container";
import SearchAndResultContainer from "@/components/Homepage/SearchAndResultContainer";
import SearchBar from "@/components/Homepage/SearchBar";
import ResultCardContainer from "@/components/Homepage/ResultCardContainer";
import EmptyDiv from "@/components/Homepage/EmptyDiv";
import { Header } from "@/components/Homepage/Header";
import { SearchKanjiProvider } from "@/context/SearchKanjiContextProvider";
import { FilterProvider } from "@/context/FilterContextProvider";
import { RomajiReadingProvider } from "@/context/RomajiReadingContextProvider";

export default function Home() {
  return (
    <>
      <SearchKanjiProvider>
        <FilterProvider>
          <RomajiReadingProvider>
            <Header />
          </RomajiReadingProvider>
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
        </FilterProvider>
      </SearchKanjiProvider>
    </>
  );
}
