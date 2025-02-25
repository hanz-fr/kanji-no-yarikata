"use client";

import DeleteKanjiIndexDialog from "@/components/AdminPage/DeleteKanjiIndexDialog";
import EditKanjiIndexDialog from "@/components/AdminPage/EditKanjiIndexDialog";
import { ColumnDef } from "@tanstack/react-table";
import { IKanji } from "@/interfaces";

export const columns: ColumnDef<IKanji>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "kanji",
    header: "Kanji",
  },
  {
    accessorKey: "meaning",
    header: "Meaning",
  },
  {
    accessorKey: "jlpt",
    header: "JLPT",
  },
  {
    accessorKey: "grade",
    header: "Grade",
  },
  {
    accessorKey: "strokeCount",
    header: "Stroke Count",
  },
  {
    accessorKey: "onyomi",
    header: "Onyomi",
  },
  {
    accessorKey: "onyomiRomaji",
    header: "Onyomi Romaji",
  },
  {
    accessorKey: "kunyomi",
    header: "Kunyomi",
  },
  {
    accessorKey: "kunyomiRomaji",
    header: "Kunyomi Romaji",
  },
  {
    accessorKey: "radical",
    header: "Radical",
  },
  {
    accessorKey: "radicalNumber",
    header: "Radical No.",
  },
  {
    accessorKey: "frequency",
    header: "Frequency",
  },
  {
    accessorKey: "joyoListStatus",
    header: "Joyo Status",
  },
  {
    accessorKey: "mnemonic",
    header: "Mnemonic",
  },
  {
    accessorKey: "svg",
    header: "SVG",
  },
  {
    accessorKey: "kanjiExamples",
    header: "Kanji Examples",
  },
  {
    accessorKey: "kanjiComponents",
    header: "Kanji Components",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex space-x-4">
        <EditKanjiIndexDialog kanji={row.original} />
        <DeleteKanjiIndexDialog id={row.original.id} />
      </div>
    ),
  },
];
