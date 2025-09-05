import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-6 py-3 rounded-2xl shadow-lg text-lg font-semibold
                   bg-gray-200 dark:bg-gray-700 
                   text-gray-800 dark:text-gray-200 
                   transition-colors duration-500"
      >
        {darkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
