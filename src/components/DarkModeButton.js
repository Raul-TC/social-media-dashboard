import React, { useEffect, useState } from "react";

export const DarkModeButton = () => {
  const [darkModeToggle, setDarkModeToggle] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkModeToggle(true);
      document.body.classList.add("classDark");
    } else {
      setDarkModeToggle(false);
      document.body.classList.remove("classDark");
    }
  }, [darkModeToggle]);

  const handleChangeTheme = () => {
    if (darkModeToggle) {
      localStorage.setItem("theme", "light");
      setDarkModeToggle(false);
    } else {
      localStorage.setItem("theme", "dark");
      setDarkModeToggle(true);
    }
  };
  return (
    <div className="darkContainer">
      <p className="darkModeText"> Dark Mode</p>
      <button
        onClick={handleChangeTheme}
        className={darkModeToggle ? "btnDark" : "light"}
      >
        <span onClick={handleChangeTheme} className="toogleButton"></span>
      </button>
    </div>
  );
};
