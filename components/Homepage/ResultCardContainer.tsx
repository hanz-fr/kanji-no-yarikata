import React from "react";
import ResultCard from "../ResultCard/Card";

export default function ResultCardContainer(props: {
    data: any,
}) {
  return (
    <div className="bg-white dark:bg-transparent">
      {props.data.data.map((e:any) => (
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
      ))}
    </div>
  );
}
