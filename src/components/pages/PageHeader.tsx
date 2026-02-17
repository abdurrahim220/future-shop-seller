import React from "react";
import ThemeToggle from "../ThemeToggle";
import { Button } from "../ui/button";
import { DownloadIcon, SearchIcon, Settings2Icon } from "lucide-react";

export default function PageHeader() {
  return (
    <div className="flex flex-col lg:flex-row  lg:justify-between">
      <h1 className="text-xl font-semibold lg:text-2xl">Welcome back Admin</h1>
      <div className="flex items-center gap-3">
        <div className="flex max-lg:hidden items-center gap-2">
          <ThemeToggle />
          <Button variant={"ghost"} size={"icon"} aria-label={"Search"}>
            <SearchIcon />
          </Button>
        </div>
        <div className=" flex items-center gap-3">
          <Button variant={"outline"} aria-label={"customize"}>
            <Settings2Icon />
            <span>Customize</span>
          </Button>
          <Button variant={"outline"} aria-label={"export"}>
            <DownloadIcon />
            <span>Export</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
