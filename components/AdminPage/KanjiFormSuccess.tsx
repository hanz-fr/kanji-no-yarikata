import React from "react";

import { FiCheckCircle } from "react-icons/fi";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

export default function KanjiFormSuccess() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 mx-auto">
      <FiCheckCircle color="#54cc7e" size={50} className="mx-auto" />
      <span className="text-xl font-bold">Kanji successfully added.</span>
      <DialogClose asChild>
        <Button variant="outline" onClick={() => router.refresh()}>
          OK
        </Button>
      </DialogClose>
    </div>
  );
}
