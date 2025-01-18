"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { IKanji } from "@/interfaces";

export default function AdminKanjiIndexPage() {
  const [data, setData] = useState<IKanji[]>();

  useEffect(() => {
    async function fetchAllKanji() {
      const res = await fetch("/api/all-kanji");

      if (!res.ok) {
        throw new Error("Error, something bad happened.");
      }

      const result = await res.json();
      setData(result);
    }

    fetchAllKanji();
  }, []);

  return (
    <>
      <span>{JSON.stringify(data)}</span>
      {/* <DataTable columns={columns} data={data!} /> */}
    </>
  );
}
