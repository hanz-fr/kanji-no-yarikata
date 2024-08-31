import React, { createContext, useContext, useState } from "react";

interface ISearchKanjiContext {
    searchInputValue: string;
    setSearchInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const SearchKanjiContext = createContext<ISearchKanjiContext>({
    searchInputValue: "",
    setSearchInputValue() {}
});

export const useSearchKanjiContext = () => useContext(SearchKanjiContext);
