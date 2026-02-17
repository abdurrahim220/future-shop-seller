
import { useSidebar } from "../ui/sidebar";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import ThemeToggle from "../ThemeToggle";


export default function Header() {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="flex justify-between items-center gap-1 py-3 ps-4 border-b lg:hidden">
      <Logo />
      <div className="ml-auto">
        <ThemeToggle/>
      </div>
      <Button
        variant={"ghost"}
        size={"icon"}
        aria-label="Toggle mobile menu"
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </Button>
    </div>
  );
}
