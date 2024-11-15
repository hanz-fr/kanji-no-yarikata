"use client";

import { useEffect, useState } from "react";
import { RomajiReadingContext } from "./RomajiReadingContext";

export const RomajiReadingProvider = ({ children }: any) => {
  const [isRomajiReadingActive, setActiveValue] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedState = localStorage.getItem("romajiReadingState");
      return storedState !== null ? JSON.parse(storedState) : true; // Default to true
    }
  });

  useEffect(() => {
    localStorage.setItem("romajiReadingState", JSON.stringify(isRomajiReadingActive));
  }, [isRomajiReadingActive]);

  return (
    <RomajiReadingContext.Provider value={{ isRomajiReadingActive, setActiveValue }}>
      {children}
    </RomajiReadingContext.Provider>
  );
};
