import React from "react";

export default function SearchAndResultContainer(props: {
  children: React.ReactNode;
}) {
  return <div className="w-full md:w-1/2 flex flex-col px-10">
    {props.children}
  </div>;
}
