export interface IKanji {
  id: string;
  kanji: string;
  meaning: string;
  jlpt: string;
  grade: number;
  strokeCount: number;
  kunyomi: string;
  kunyomiRomaji: string;
  onyomi: string;
  onyomiRomaji: string;
  radical: string;
  radicalNumber: number;
  frequency: string;
  components: Array<String>;
  joyoListStatus: string;
  mnemonic: string;
  examples: Array<object>;
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
