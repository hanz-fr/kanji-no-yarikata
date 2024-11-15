import React, { createContext, useContext } from "react";

interface IKanaReadingContext {
  isKanaReadingActive: boolean;
  setActiveValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export const KanaReadingContext = createContext<IKanaReadingContext>({
  isKanaReadingActive: true,
  setActiveValue() {},
});

export const useKanaReadingContext = () => useContext(KanaReadingContext);
