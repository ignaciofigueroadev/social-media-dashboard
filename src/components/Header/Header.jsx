import React from "react";

// Hooks
import { useEffect, useState } from "react";

// Util imports
import Image from "../utils/Image";
import Separator from "../utils/Separator";

// Icon imports
import ToggleOff from "/icons/toggle-off.svg";
import ToggleOn from "/icons/toggle-on.svg";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = (e) => {
    e.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex flex-col py-7 px-14 gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="font-[700] text-4xl text-very-dark-blue dark:text-white">
          Social Media Dashboard
        </h1>
        <p className="text-dark-grayish-blue dark:text-desaturated-blue font-[700]">
          Total Followers: 6228
        </p>
      </div>
      <Separator />
      <div className="flex justify-between items-center lg:gap-4">
        <p className="text-dark-grayish-blue font-[700]">Dark Mode</p>
        <button onClick={handleTheme}>
          <Image
            src={theme === "light" ? ToggleOff : ToggleOn}
            alt="Theme switcher"
            className="w-10"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
