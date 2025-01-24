import React from "react";

export default function KanjiFormFailed(props: {
  errorCode: number;
  errorMessage: string;
}) {
  return (
    <div className="flex flex-col mx-auto text-center">
      <span className="text-xl font-bold">Failed to add Kanji.</span>
      <span className="text-lg font-normal">{props.errorCode} {props.errorMessage}</span>
    </div>
  );
}
