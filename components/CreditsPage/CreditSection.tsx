import { ICreditSection } from "@/interfaces";
import React from "react";
import CreditDetails from "./CreditDetails";

export default function CreditSection({ credits }: ICreditSection) {
  if (!credits || credits.length === 0) {
    return (
      <div className="text-center mt-10 mx-5 md:mx-0 text-sm text-muted-foreground">
        Credit has not been added yet.
      </div>
    );
  }
  return (
    <>
      {credits.map((e, index) => (
        <CreditDetails
          author={e.author}
          description={e.description}
          link={e.link}
          key={index}
        />
      ))}
    </>
  );
}
