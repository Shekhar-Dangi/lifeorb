"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex flex-row justify-around items-center py-5 px-10">
      <div className="flex items-center space-x-2">
        <Image
          src={theme === "dark" ? "/logo_dark.png" : "/logo_light.png"}
          width={28}
          height={28}
          alt="LifeOrb Logo"
          className="rounded-lg"
        />
        <span className="text-lg font-bold">LifeOrb</span>
      </div>
      <div
        className={`nav-background px-1  py-3  rounded-sm space-x-4 text-sm`}
      >
        <span className="nav-item">INSPIRATION</span>
        <span className="nav-item">FRIENDS</span>
        <span className="nav-item">PRICING</span>
      </div>
      <div className="flex items-center space-x-8">
        <Button className="cursor-pointer" variant={"ghost"}>
          Sign Up
        </Button>
        <Button className="cursor-pointer">Sign In</Button>
        <div className="cursor-pointer">
          {theme === "light" ? (
            <Moon onClick={() => setTheme("dark")} />
          ) : (
            <Sun onClick={() => setTheme("light")} />
          )}
        </div>
      </div>
    </nav>
  );
}
