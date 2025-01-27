"use client";

import { ColumnDef } from "@tanstack/react-table";
import { IKanji } from "@/interfaces";

const handleView = (row: any) => {
  console.log("View: ", row);
};

const handleDelete = (row: any) => {
  console.log("Delete: ", row);
};

const handleEdit = (row: any) => {
  console.log("Edit: ", row);
};

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
      <div className="flex space-x-2">
        <button
          onClick={() => handleView(row.original)}
          className="text-blue-500"
        >
          View
        </button>
        <button
          onClick={() => handleEdit(row.original)}
          className="text-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(row.original)}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    ),
  },
];
