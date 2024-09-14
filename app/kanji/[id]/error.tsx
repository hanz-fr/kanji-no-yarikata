"use client";

export default function Error(props: { code: number, status: string }) {
  return (
    <div className="flex flex-col justify-between gap-[10px] h-screen px-5 py-3">
      <span></span>
      <div className="text-center block">
        <h2 className="text-center text-3xl">{props.code}</h2>
        <h2 className="text-center font-thin text-gray-500 dark:text-white">{props.status}</h2>
      </div>
      <span></span>
    </div>
  );
}
