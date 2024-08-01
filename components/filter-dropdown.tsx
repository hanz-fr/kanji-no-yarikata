import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FiSliders } from "react-icons/fi"

const FilterDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border rounded-md rounded-tl-none border-[#D0D0D0] dark:border-zinc-800 border-l-0 rounded-bl-none px-3">
        <FiSliders />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Something</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
        <DropdownMenuItem>Item 4</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
