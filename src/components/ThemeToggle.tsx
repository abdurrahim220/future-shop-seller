import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./ThemeProvider";
import { CheckIcon, Monitor, MoonIcon, SunIcon } from "lucide-react";
import React from "react";

type ThemeValue = "light" | "dark" | "system";

interface ItemProps {
  value: ThemeValue;
  label: string;
  Icon: React.ElementType;
  currentTheme: ThemeValue;
  onSelect: (value: ThemeValue) => void;
}


function ThemeItem({
  value,
  label,
  Icon,
  currentTheme,
  onSelect,
}: ItemProps) {
  return (
    <DropdownMenuItem
      onClick={() => onSelect(value)}
      className="flex items-center gap-3 rounded-sm px-2 py-1.5 cursor-pointer"
    >
      <Icon className="h-4 w-4 text-muted-foreground" />
      <span className="flex-1">{label}</span>
      {currentTheme === value && (
        <CheckIcon className="h-4 w-4 text-primary" />
      )}
    </DropdownMenuItem>
  );
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          className="relative"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40 p-1">
        <DropdownMenuGroup>
          <ThemeItem
            value="light"
            label="Light"
            Icon={SunIcon}
            currentTheme={theme}
            onSelect={setTheme}
          />
          <ThemeItem
            value="dark"
            label="Dark"
            Icon={MoonIcon}
            currentTheme={theme}
            onSelect={setTheme}
          />
          <ThemeItem
            value="system"
            label="System"
            Icon={Monitor}
            currentTheme={theme}
            onSelect={setTheme}
          />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
