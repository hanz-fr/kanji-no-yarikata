import React, { createContext, useContext } from "react";

interface IRomajiReadingContext {
  isRomajiReadingActive: boolean;
  setActiveValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RomajiReadingContext = createContext<IRomajiReadingContext>({
  isRomajiReadingActive: true,
  setActiveValue() {},
});

export const useRomajiReadingContext = () => useContext(RomajiReadingContext);
