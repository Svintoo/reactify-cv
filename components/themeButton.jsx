import { useState, useEffect } from "react";

export default function ThemeBtn() {
  const [theme, setTheme] = useState("dark");
  const Elementh1 = document.getElementsByTagName("h1");
  const Elementul = document.getElementsByTagName("ul");
  const themeButton = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#3A3B3C" : "#fff";
    document.body.style.Color = theme === "dark" ? "#3A3B3C" : "#fff";
    for (const element of Elementh1) {
      element.style.color = theme === "light" ? "#3A3B3C" : "#fff";
    }
    for (const element of Elementul) {
      element.style.color = theme === "light" ? "#3A3B3C" : "#fff";
    }
  }, [theme]);
  return <button onClick={themeButton}>{theme}</button>;
}
