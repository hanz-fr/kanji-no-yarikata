import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FiEdit } from "react-icons/fi";
import { EditKanjiForm } from "./EditKanjiForm";
import { IKanji } from "@/interfaces";

export default function EditKanjiIndexDialog(props: { kanji: object }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FiEdit size={20} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dialog-content h-2/3 overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Edit Kanji</DialogTitle>
        </DialogHeader>
        <EditKanjiForm selectedKanji={props.kanji as IKanji}/>
      </DialogContent>
    </Dialog>
  );
}
