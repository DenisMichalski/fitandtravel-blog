import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(
    () =>
      localStorage.getItem("theme") === "dark" ||
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((v) => !v)}
      className="ml-4 px-4 py-2 rounded-lg font-semibold 
  bg-gray-200 dark:bg-slate-800 text-slate-900 dark:text-white 
  shadow transition border border-gray-300 dark:border-slate-700"
      aria-label="Dark Mode umschalten"
      title="Dark Mode umschalten"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default DarkModeToggle;


