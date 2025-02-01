import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FiTrash } from "react-icons/fi";

export default function DeleteKanjiIndexDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <FiTrash size={20} />
      </AlertDialogTrigger>
      <AlertDialogContent className="dialog-content">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this kanji?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the kanji you've chosen.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
