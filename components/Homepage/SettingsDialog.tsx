"use client";

import React from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Switch } from "../ui/switch";
import { FiSettings } from "react-icons/fi";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";
import { useRomajiReadingContext } from "@/context/RomajiReadingContext";
import { useRouter } from "next/navigation";

export default function SettingsDialog() {
  const { isRomajiReadingActive, setActiveValue } = useRomajiReadingContext();
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="my-auto" size="icon" variant="outline">
          <FiSettings className="h-[1.2rem] w-[1.2rem] " />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-zinc-900 dark:border-zinc-800">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="flex justify-between my-5">
          <DialogDescription>Show rōmaji reading</DialogDescription>
          <Switch
            checked={isRomajiReadingActive}
            onCheckedChange={() => {
              setActiveValue(!isRomajiReadingActive)
              router.refresh()
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
