"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./theme-provider";
import { useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    toggleTheme();
    setTimeout(() => setIsSpinning(false), 250);
  };

  return (
    <button onClick={handleClick} className="relative">
      {theme === "light" ? (
        <FiMoon
          className={`text-secondary_dark size-5 md:size-6 transition-transform ${
            isSpinning ? "rotate-animation" : ""
          }`}
        />
      ) : (
        <FiSun
          className={`text-zinc-200 size-5 md:size-6 transition-transform ${
            isSpinning ? "rotate-animation" : ""
          }`}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
