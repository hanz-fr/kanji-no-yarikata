"use client";

import { useEffect, useState } from "react";
import { KanaReadingContext } from "./KanaReadingContext";

export const KanaReadingProvider = ({ children }: any) => {
  const [isKanaReadingActive, setActiveValue] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedState = localStorage.getItem("kanaReadingState");
      return storedState !== null ? JSON.parse(storedState) : true; // Default to true
    }
  });

  useEffect(() => {
    localStorage.setItem("kanaReadingState", JSON.stringify(isKanaReadingActive));
  }, [isKanaReadingActive]);

  return (
    <KanaReadingContext.Provider value={{ isKanaReadingActive, setActiveValue }}>
      {children}
    </KanaReadingContext.Provider>
  );
};
