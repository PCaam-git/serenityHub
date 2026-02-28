import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <nav className="site-nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "site-nav__link active" : "site-nav__link"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/resources"
        className={({ isActive }) =>
          isActive ? "site-nav__link active" : "site-nav__link"
        }
      >
        Resources
      </NavLink>

      <button
        type="button"
        className="theme-toggle"
        onClick={() => setIsDarkMode((current) => !current)}
        aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>
    </nav>
  );
}
