import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon } from "lucide-react";
import { DASHBOARD_CARD_MENU } from "@/constants";

interface DashboardCardProps {
  title: string;
  description: string;
  buttonText?: string;
  children?: React.ReactNode;
}

export default function DashboardCard({
  title,
  description,
  buttonText,
  children,
}: DashboardCardProps) {
  return (
    <Card className="bg-background">
      <CardHeader className="border-b flex justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVerticalIcon size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {DASHBOARD_CARD_MENU.map((item, index) => (
              <DropdownMenuItem key={index}>
                <item.Icon size={16} />
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="grid grid-cols-1 grow">{children}</CardContent>
      <CardFooter className="border-t">
        <Button variant="outline" className="ml-auto">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
