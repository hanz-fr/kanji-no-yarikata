"use client";

import { useState } from "react";

import { FilterContext } from "./FilterContext";

export const FilterProvider = ({ children }: any) => {
  const [jlptFilter, setJlptFilter] = useState("");
  const [gradeFilter, setGradeFilter] = useState("");
  const [searchByFilter, setSearchByFilter] = useState("");

  return (
    <FilterContext.Provider
      value={{
        jlptFilter,
        setJlptFilter,
        gradeFilter,
        setGradeFilter,
        searchByFilter,
        setSearchByFilter,
      }}
    >
        {children}
    </FilterContext.Provider>
  );
};
