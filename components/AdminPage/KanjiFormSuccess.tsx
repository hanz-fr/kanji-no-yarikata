import React from "react";

import { FiCheckCircle } from "react-icons/fi";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

export default function KanjiFormSuccess() {
  return (
    <div className="flex flex-col gap-5 mx-auto">
      <FiCheckCircle color="#54cc7e" size={50} className="mx-auto" />
      <span className="text-xl font-bold">Kanji successfully added.</span>
      <DialogClose asChild>
        <Button variant="outline" onClick={() => location.reload()}>
          OK
        </Button>
      </DialogClose>
    </div>
  );
}
