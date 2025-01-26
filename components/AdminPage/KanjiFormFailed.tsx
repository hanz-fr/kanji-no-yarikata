import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";

import { FiXCircle } from "react-icons/fi";
import { Button } from "../ui/button";

export default function KanjiFormFailed(props: {
  errorCode: number;
  errorMessage: string;
}) {
  return (
    <div className="flex flex-col mx-auto text-center gap-5">
      <FiXCircle color="#fa3943" size={50} className="mx-auto" />
      <div className="flex flex-col">
        <span className="text-xl font-bold">Failed to add Kanji.</span>
        <span className="text-lg font-normal">
          "{props.errorCode} {props.errorMessage}"
        </span>
        <DialogClose asChild>
          <Button variant="outline">OK</Button>
        </DialogClose>
      </div>
    </div>
  );
}
