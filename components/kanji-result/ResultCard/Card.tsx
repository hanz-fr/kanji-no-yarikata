import React from "react";
import { IResultCard } from "@/interfaces";
import {
  Container,
  Kanji,
  KanjiMeaningText,
  KanjiGroupingContainer,
  OnKun,
} from "./CardComponents";

const ResultCard: React.FC<IResultCard> = ({
  id,
  kanji,
  onyomi,
  onyomiRomaji,
  kunyomi,
  kunyomiRomaji,
  meaning,
}) => {
  return (
    <Container kanjiId={id}>
      <KanjiGroupingContainer>
        <Kanji kanji={kanji} />
        <OnKun
          onyomi={onyomi}
          onyomiRomaji={onyomiRomaji}
          kunyomi={kunyomi}
          kunyomiRomaji={kunyomiRomaji}
        />
      </KanjiGroupingContainer>
      <KanjiMeaningText meaning={meaning} />
    </Container>
  );
};

export default ResultCard;
