import { useState } from "react";
import { SearchKanjiContext } from "./SearchKanjiContext";

export const SearchKanjiProvider = ({ children }: any) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <SearchKanjiContext.Provider value={{ searchInputValue, setSearchInputValue }}>
      {children}
    </SearchKanjiContext.Provider>
  );
};
