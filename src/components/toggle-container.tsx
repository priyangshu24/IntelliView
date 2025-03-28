import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavigationRoutes } from "./navigation-routes";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const ToggleContainer = () => {
  const { userId } = useAuth();

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100" />
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-neutral-900">
        <SheetHeader>
          <SheetTitle className="text-neutral-900 dark:text-neutral-100" />
        </SheetHeader>
        
        <nav className="flex flex-col items-start gap-6">
          <NavigationRoutes isMobile />
          
          {userId && (
            <NavLink
              to={"/generate"}
              className={({ isActive }) =>
                cn(
                  "text-base text-neutral-600 dark:text-neutral-400 transition-colors duration-200",
                  isActive 
                    ? "text-neutral-900 font-semibold dark:text-neutral-100" 
                    : "hover:text-neutral-800 dark:hover:text-neutral-200"
                )
              }
            >
              Take An Interview
            </NavLink>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};