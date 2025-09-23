"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-around items-center py-5 px-10">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo_light.png"
          width={28}
          height={28}
          alt="LifeOrb Logo"
          className="rounded-lg dark:hidden"
        />
        <Image
          src="/logo_dark.png"
          width={28}
          height={28}
          alt="LifeOrb Logo Dark"
          className="rounded-lg hidden dark:block"
        />
        <span className="text-lg font-bold">LIFEORB</span>
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
        <ThemeToggle />
      </div>
    </nav>
  );
}
