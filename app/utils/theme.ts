import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const isDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(isDark() ? "dark" : "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => setTheme(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return { theme, toggleTheme };
};
