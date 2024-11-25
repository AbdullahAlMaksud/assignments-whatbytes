import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <div className="z-50 px-4 lg:px-8 flex gap-4 items-center justify-between min-h-16 border-b">
      <Link
        href={"/"}
        className="flex gap-4 items-center hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md"
      >
        <div className="flex gap-0.5 lg:gap-1">
          <div className="lg:h-8 h-6 w-2 lg:w-3 transform skew-y-12 bg-primary"></div>
          <div className="lg:h-8 h-6 w-2 lg:w-3 transform -skew-y-12 bg-primary"></div>
          <div className="lg:h-8 h-6 w-2 lg:w-3 transform -skew-y-12 bg-primary"></div>
        </div>
        <h2 className="text-xl lg:text-2xl font-black">WhatBytes</h2>
      </Link>
      <div className="flex flex-col">
        <Button variant="outline" className="flex gap-2 px-2">
          <Avatar className="size-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-bold hidden md:flex">Rahil Siddique</span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
