import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FiHome } from "react-icons/fi";

export default function AdminPage() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col gap-5 items-center">
        <span className="text-2xl font-bold">漢字のやり方 Admin</span>
        <div className="flex gap-3">
          <Link href={"/"}>
            <Button variant={"outline"}>
              <FiHome size={20} />
            </Button>
          </Link>
          <Link href={"/admin/kanji-index"}>
            <Button>Kanji Index</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
