"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { IKanji } from "@/interfaces";
import Loading from "./loading";
import { Button } from "@/components/ui/button";

export default function AdminKanjiIndexPage() {
  const [data, setData] = useState<IKanji[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAllKanji() {
      const res = await fetch("/api/all-kanji");

      if (!res.ok) {
        setIsLoading(false);
        throw new Error("Error, something bad happened.");
      }

      const result = await res.json();
      setData(result.data);
      setIsLoading(false);
      console.log(result.data);
    }

    fetchAllKanji();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="flex w-full justify-end my-2">
        <Button className="mr-3">Add</Button>
      </div>
      <DataTable columns={columns} data={data!} />
    </>
  );
}
