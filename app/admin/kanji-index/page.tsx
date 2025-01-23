"use client";

import React, { useEffect, useState } from "react";

import Error from "./error";
import Loading from "./loading";
import AddKanjiIndexDialog from "@/components/AdminPage/AddKanjiIndexDialog";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { IKanji } from "@/interfaces";

export default function AdminKanjiIndexPage() {
  const [data, setData] = useState<IKanji[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState("");
  const [errorCode, setErrorCode] = useState("");

  useEffect(() => {
    async function fetchAllKanji() {
      try {
        const res = await fetch("/api/all-kanji");

        if (!res.ok) {
          setErrorStatus(res.statusText);
          setErrorCode(res.status.toString());
        }

        const result = await res.json();
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setData(undefined);
        console.error("Error fetching kanji data:", error);
      } finally {
        setTimeout(() => setIsLoading(false));
      }
    }

    fetchAllKanji();
  }, []);

  if (isLoading) return <Loading />;

  if (errorStatus != "") return <Error code={errorCode} status={errorStatus} />;

  return (
    <>
      <div className="flex w-full justify-end my-2">
        <AddKanjiIndexDialog/>
      </div>
      <DataTable columns={columns} data={data!} />
    </>
  );
}
