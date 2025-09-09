"use client";
import { useTheme } from "../context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border shadow text-sm font-medium 
                 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    >
      Toggle Theme
    </button>
  );
}
