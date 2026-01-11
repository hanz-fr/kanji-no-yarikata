import Link from "next/link";
import React from "react";

export default function CreditDetails(props: {
  author: string;
  description: string;
  link: string;
}, key: number) {
  return (
    <div key={key} className="mt-10 mx-5 md:mx-0 flex flex-col gap-8">
      <div className="text-sm flex flex-col gap-2">
        <Link href={props.link} className="font-semibold underline">{props.author}</Link>
        <p className="">{props.description}</p>
      </div>
    </div>
  );
}
