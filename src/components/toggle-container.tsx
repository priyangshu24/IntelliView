import React, { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { NavigationRoutes } from "./navigation-routes";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const ToggleContainer = () => {
  const { userId } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to handle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center">
      <Sheet>
        <div className="flex items-center gap-2">
          <SheetTrigger className="block md:hidden">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          
          <button
            onClick={toggleDarkMode}
            className="block md:hidden p-2 rounded-full"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <SheetContent side="right">
          <SheetHeader className="mb-6">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <nav className="space-y-4">
            <NavigationRoutes 
              isMobile 
              navLinkClassName={({ isActive }) => cn(
                "block w-full px-4 py-2 rounded-md",
                "text-base transition-colors duration-200",
                isActive
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
              )}
            />

            {userId && (
              <NavLink
                to="/generate"
                className={({ isActive }) => cn(
                  "block w-full px-4 py-2 rounded-md",
                  "text-base transition-colors duration-200",
                  isActive
                    ? "bg-neutral-300 text-white dark:bg-white dark:text-neutral-400"
                    : "text-neutral-300 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-600"
                )}
              >
                Take An Interview
              </NavLink>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};