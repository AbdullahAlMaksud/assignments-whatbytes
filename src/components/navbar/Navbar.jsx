import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <div className="z-50 px-8 flex gap-4 items-center justify-between min-h-16 border-b">
      <div className="flex gap-4 items-center">
        <div className="flex gap-1">
          <div className="h-8 w-3 transform skew-y-12 bg-primary"></div>
          <div className="h-8 w-3 transform -skew-y-12 bg-primary"></div>
          <div className="h-8 w-3 transform -skew-y-12 bg-primary"></div>
        </div>
        <h2 className="text-2xl font-bold">WhatBytes</h2>
      </div>
      <div className="flex flex-col bg-secondary">
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
