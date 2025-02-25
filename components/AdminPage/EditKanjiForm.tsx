"use client";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CgSpinner } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import KanjiFormSuccess from "./KanjiFormSuccess";
import KanjiFormFailed from "./KanjiFormFailed";
import { IKanji } from "@/interfaces";

const formSchema = z.object({
  id: z
    .string()
    .min(8, {
      message: "Kanji ID must be at least 8 characters.",
    })
    .max(8, {
      message: "Kanji ID must be maximum of 8 characters.",
    }),
  kanji: z.string().nonempty({
    message: "Kanji can't be empty.",
  }),
  meaning: z.string().nonempty({
    message: "Meaning can't be empty.",
  }),
  jlpt: z.string().nonempty({
    message: "JLPT can't be empty.",
  }),
  grade: z.coerce
    .number()
    .gte(1, {
      message: "Lowest grade is 1.",
    })
    .lte(9, {
      message: "Maximum grade is 9.",
    }),
  strokeCount: z.coerce.number().gte(1, {
    message: "Stroke can't be 0.",
  }),
  onyomi: z.string(),
  onyomiRomaji: z.string(),
  kunyomi: z.string(),
  kunyomiRomaji: z.string(),
  radical: z.string().min(1, {
    message: "Must be at least 1 character.",
  }),
  radicalNumber: z.coerce.number(),
  frequency: z.string(),
  joyoListStatus: z.string(),
  mnemonic: z.string(),
  svg: z.string(),
});

export function EditKanjiForm(props: { selectedKanji: IKanji }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>();
  const [errorCode, setErrorCode] = useState<number>();
  const [errorMsg, setErrorMsg] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: props.selectedKanji.id,
      kanji: props.selectedKanji.kanji,
      meaning: props.selectedKanji.meaning,
      jlpt: props.selectedKanji.jlpt,
      grade: props.selectedKanji.grade,
      strokeCount: props.selectedKanji.strokeCount,
      onyomi: props.selectedKanji.onyomi,
      onyomiRomaji: props.selectedKanji.onyomiRomaji,
      kunyomi: props.selectedKanji.kunyomi,
      kunyomiRomaji: props.selectedKanji.kunyomiRomaji,
      radical: props.selectedKanji.radical,
      radicalNumber: props.selectedKanji.radicalNumber,
      frequency: props.selectedKanji.frequency,
      joyoListStatus: props.selectedKanji.joyoListStatus,
      mnemonic: props.selectedKanji.mnemonic,
      svg: props.selectedKanji.svg,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const req = await fetch("/api/edit-kanji", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const res = await req.json();

    console.log("RES: ", res);

    if (res?.status != 200) {
      setIsLoading(false);
      setIsSuccess(false);

      setErrorCode(res?.status);
      setErrorMsg(res?.message);
      return;
    }

    setIsLoading(false);
    setIsSuccess(true);
    return;
  }

  if (isSuccess) return <KanjiFormSuccess message={"Kanji successfully updated."} />;

  if (isSuccess == false && isSuccess != undefined) return <KanjiFormFailed errorCode={errorCode!} errorMessage={errorMsg!} />;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="kanji"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kanji</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="meaning"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meaning</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jlpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>JLPT</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grade</FormLabel>
              <FormControl>
                <Input type="number" min={1} max={9} {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="strokeCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stroke Count</FormLabel>
              <FormControl>
                <Input type="number" min={1} {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="onyomi"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Onyomi</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="onyomiRomaji"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Onyomi Romaji</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="kunyomi"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kunyomi</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="kunyomiRomaji"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kunyomi Romaji</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="radical"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Radical</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="radicalNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Radical Number</FormLabel>
              <FormControl>
                <Input type="number" min={1} {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="frequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frequency</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="joyoListStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Joyo List Status</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mnemonic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mnemonic</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="svg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SVG</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage className="font-normal text-orange-400" />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <CgSpinner size={20} className="animate-spin duration-300" />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
