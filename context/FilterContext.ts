import React, { createContext, useContext } from "react";

interface IFilterContext {
    jlptFilter: string;
    gradeFilter: string;
    searchByFilter: string;
    setJlptFilter: React.Dispatch<React.SetStateAction<string>>;
    setGradeFilter: React.Dispatch<React.SetStateAction<string>>;
    setSearchByFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterContext = createContext<IFilterContext>({
    jlptFilter: "",
    gradeFilter: "",
    searchByFilter: "",
    setJlptFilter() {},
    setGradeFilter() {},
    setSearchByFilter() {}
});

export const useFilterContext = () => useContext(FilterContext);