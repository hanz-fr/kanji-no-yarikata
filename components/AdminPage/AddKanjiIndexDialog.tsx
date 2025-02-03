import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { KanjiForm } from "./KanjiForm";

export default function AddKanjiIndexDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dialog-content h-2/3 overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Add New Kanji</DialogTitle>
        </DialogHeader>
        <KanjiForm />
      </DialogContent>
    </Dialog>
  );
}
