"use client";

import { DarkModeButton } from "@/components/DarkModeButton";
import Link from "next/link";
import data from "../counterfeit_data.json";
import Container from "@/components/Homepage/Container";
import SearchAndResultContainer from "@/components/Homepage/SearchAndResultContainer";
import SearchBar from "@/components/Homepage/SearchBar";
import ResultCardContainer from "@/components/Homepage/ResultCardContainer";
import EmptyDiv from "@/components/Homepage/EmptyDiv";

import { SearchKanjiProvider } from "@/context/SearchKanjiContextProvider";
import { useSearchKanjiContext } from "@/context/SearchKanjiContext";

export default function Home() {
  let { searchInputValue } = useSearchKanjiContext();

  console.log(searchInputValue);

  return (
    <>
      <DarkModeButton />
      <Container>
        <EmptyDiv />
        <SearchAndResultContainer>
          <SearchKanjiProvider>
            <SearchBar />
          </SearchKanjiProvider>
          {/* <ResultCardContainer data={data} /> */}
        </SearchAndResultContainer>
        <Link
          className="mb-3 md:mb-5 font-thin underline text-xs md:text-lg hover:text-zinc-700 dark:hover:text-gray-300"
          href={"/all-kanji"}
        >
          All Kanji Lists
        </Link>
      </Container>
    </>
  );
}
