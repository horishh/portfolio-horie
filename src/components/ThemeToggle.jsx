import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-8 flex flex-col items-center justify-end cursor-pointer select-none"
    >
      <div className="w-[2px] h-4 bg-gray-500 dark:bg-gray-300 rounded-full" />

      <motion.div
        className={`absolute top-0 w-5 h-3 rounded-t-[8px] rounded-b-none ${
          theme === "dark" ? "bg-yellow-300" : "bg-gray-400"
        } shadow-md`}
        animate={{
          backgroundColor: theme === "dark" ? "#fde047" : "#9ca3af",
          boxShadow:
            theme === "dark" ? "0 0 12px 4px rgba(250, 204, 21, 0.4)" : "none",
          y: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="w-5 h-[3px] bg-gray-400 dark:bg-gray-300 rounded-full mt-[2px]" />

      <AnimatePresence>
        {theme === "dark" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-[10px] w-12 h-12 bg-yellow-200/40 blur-2xl rounded-full pointer-events-none"
          />
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
