"use client";
import { Award, ChartNoAxesColumn, File } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RightSidebar = () => {
  const path = usePathname();
  return (
    <div className="min-w-full flex">
      <div className="pr-3 flex flex-col md:pt-10 w-full">
        <Link
          href={"/dashboard"}
          className={
            path === "/dashboard"
              ? "flex font-bold my-1 bg-blue-800/5 w-full py-3 mr-2 text-blue-800 px-5 rounded-r-full gap-4"
              : "flex font-bold w-full my-1 hover:bg-blue-800/5 py-3 mr-2 hover:text-blue-800 px-5 rounded-r-full gap-4"
          }
        >
          <ChartNoAxesColumn /> Dashboard
        </Link>
        <Link
          href={"/"}
          className={
            path === "/"
              ? "flex font-bold my-1 bg-blue-800/5 w-full py-3 mr-2 text-blue-800 px-5 rounded-r-full gap-4"
              : "flex font-bold w-full my-1 hover:bg-blue-800/5 py-3 mr-2 hover:text-blue-800 px-5 rounded-r-full gap-4"
          }
        >
          <Award />
          Skill Test
        </Link>
        <Link
          href={"/internship"}
          className={
            path === "/internship"
              ? "flex font-bold my-1 bg-blue-800/5 w-full py-3 mr-2 text-blue-800 px-5 rounded-r-full gap-4"
              : "flex font-bold w-full my-1 hover:bg-blue-800/5 py-3 mr-2 hover:text-blue-800 px-5 rounded-r-full gap-4"
          }
        >
          <File />
          Internship
        </Link>
      </div>
    </div>
  );
};

export default RightSidebar;
