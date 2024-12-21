"use client";

import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-10 px-6">
      <div className="flex space-x-4">
        <Link className="nav-btn font-bold text-sm md:text-base" href={"/"}>
          home
        </Link>
        <Link
          className="nav-btn font-bold text-sm md:text-base"
          href={"/projects"}
        >
          projects
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
