import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  // true if prefer-color-scheme is dark
  const preferDarkMode = "(prefer-color-scheme: dark)";

  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkMode);

    const userPreference = window.localStorage.getItem("theme");

    const handleChange = () => {
      // check if local storage has theme preference, if true check if dark. if dark, set to dark otherwise be light
      if (userPreference) {
        let check = userPreference === "dark" ? "dark" : "light";

        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        // check user preference
        let check = mediaQuery.matches ? "dark" : "light";

        setMode(check);

        // for first time openers
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    // First load, check condition. Check all conditions and keep upon refresh
    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // update local storage values -> mode is dark, set dark
  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
