import { useEffect } from "react";
import Avatar from "react-avatar";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";

import Logo from "./Logo";
import { APP_SIDEBAR } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";
import UserMenu from "./UserMenu";
export default function AppSidebar() {
  const { isMobile, toggleSidebar } = useSidebar();

  useEffect(() => {
    toggleSidebar();
  }, [toggleSidebar]);

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="px-0.5 max-lg:p-2">
            <Logo variant={isMobile ? "default" : "icon"} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* sidebar content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {APP_SIDEBAR.primaryNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title} asChild>
                    <a href={item.url}>
                      <item.Icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* secondary nav */}
        {isMobile && (
          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarMenu>
                {APP_SIDEBAR.secondaryNav.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton tooltip={item.title} asChild>
                      <a href={item.url}>
                        <item.Icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter className={cn(isMobile && "border-t")}>
        <SidebarMenu>
          <SidebarMenuItem className={cn(isMobile && "p-2")}>
            {isMobile ? (
              <div className="flex justify-between items-start gap-2">
                <div className="grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-2">
                  <div className="relative">
                    <Avatar
                      size="36px"
                      round="8px"
                      src={APP_SIDEBAR.curProfile.src}
                    />
                    <div className="absolute bottom-0 right-0 size-2 bg-green-600 dark:bg-green-400 rounded-full ring-sidebar ring-1"></div>
                  </div>
                  <div>
                    <h3 className="text-sm fonte-semibold">
                      {APP_SIDEBAR.curProfile.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {APP_SIDEBAR.curProfile.email}
                    </p>
                  </div>
                </div>
                <Button variant={"ghost"} size={"icon-sm"} aria-label="Logout">
                  <LogOutIcon/>
                </Button>
              </div>
            ) : (
            <UserMenu/>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
