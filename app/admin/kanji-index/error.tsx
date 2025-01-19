'use client';

import { MdOutlineError } from 'react-icons/md'

export default function Error(props: { code: string, status: string }) {
  return (
    <div className="flex flex-col justify-between gap-[10px] h-screen px-5 py-3">
      <span></span>
      <div className="text-center block">
        <h2 className="text-center text-3xl"><MdOutlineError className='mx-auto mb-3'/></h2>
        <h2 className="text-center text-xl">{props.code}</h2>
        <h2 className="text-center font-thin text-gray-500 dark:text-white">{props.status}</h2>
      </div>
      <span></span>
    </div>
  );
}