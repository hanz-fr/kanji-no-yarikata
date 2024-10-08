"use client";

import React, { useEffect, useState } from "react";

import ResultCard from "../ResultCard/Card";
import KanjiResultSkeleton from "../ResultCard/CardSkeleton";
import { IResultCard } from "@/interfaces";
import { useSearchKanjiContext } from "@/context/SearchKanjiContext";
import { useFilterContext } from "@/context/FilterContext";

export default function ResultCardContainer() {
  const { searchInputValue } = useSearchKanjiContext();
  const [data, setData] = useState<IResultCard[]>();
  const [errorStatus, setErrorStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { jlptFilter, gradeFilter, searchByFilter } = useFilterContext();

  /* Fetch to search-kanji API */
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const res = await fetch(`/api/search-kanji?q=${searchInputValue}-${jlptFilter}-${gradeFilter}-${searchByFilter}`);

        if (!res.ok) {
          setIsLoading(false);
          throw new Error("Error, something bad happened.");
        }

        const result = await res.json();

        setData(result.data);
        setIsLoading(false);

      } catch (e: any) {
        setIsLoading(false);
        setErrorStatus(e.message);
      }
    }

    /* Only fetch when there is an input from user. */
    if (searchInputValue != "") {
      fetchData();
    } else {
      setData([]);
    }
  }, [searchInputValue, jlptFilter, gradeFilter, searchByFilter]);

  if (isLoading && searchInputValue != undefined) return <KanjiResultSkeleton />

  if (data) return (
    <div className="bg-white dark:bg-transparent">
      <div className="text-center">
        {errorStatus != null ? errorStatus : ""}
      </div>
      {data
        ?.map((e: any) => (
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
        ))
        .slice(0, 3)}
    </div>
  );
}
