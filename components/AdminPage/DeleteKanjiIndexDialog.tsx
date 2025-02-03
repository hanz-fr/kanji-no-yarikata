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
import { useRouter } from "next/navigation";

export default function DeleteKanjiIndexDialog(props: { id: any }) {

  const router = useRouter();
  
  const deleteKanji = async () => {
    try {
      const req = await fetch(`/api/delete-kanji?id=${props.id}`, {
        method: "DELETE",
      });
      const res = await req.json();

      if (res?.status != 200) {
        console.error("Error, something bad happened.");
        return
      }

      router.refresh();
    } catch (e: any) {
      console.error(e);
      return
    }
  };

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
          <AlertDialogAction className="bg-red-500" onClick={deleteKanji}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
