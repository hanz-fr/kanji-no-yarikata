export interface IKanji {
  id: string;
  kanji: string;
  meaning: string;
  jlpt: string;
  grade: number;
  strokeCount: number;
  onyomi: string;
  onyomiRomaji: string;
  kunyomi: string;
  kunyomiRomaji: string;
  radical: string;
  radicalNumber: number;
  frequency: string;
  joyoListStatus: string;
  mnemonic: string;
  svg: string;
  kanjiExamples: Array<object>;
  kanjiComponents: Array<String>;
}

export interface IResultCard {
  id?: string;
  kanji?: string;
  meaning?: string;
  kunyomi?: string;
  kunyomiRomaji?: string;
  onyomi?: string;
  onyomiRomaji?: string;
}
