import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
    // Estado: ¿está en modo oscuro?
    const [isDarkMode, setIsDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        return true;  // ← Valor inicial
      }
    return false;
});


    // Función para cambiar el tema
    const toggleTheme = () => {
      if (isDarkMode) {
        // Cambiar a claro
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        setIsDarkMode(false);
      } else {
        // Cambiar a oscuro
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        setIsDarkMode(true);
      } 
    };


    return (
     <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        padding: "16px 0",
        backgroundColor: "var(--color-primary)",
        fontSize: "18px",
        fontWeight: 500,
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: "var(--color-neutral-white)",
          textDecoration: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
          transition: "background-color 0.2s"
        })}
      >
        Home
        </NavLink>

        <NavLink
        to="/resources"
        style={({ isActive}) => ({
            color: "var(--color-neutral-white)",
            textDecoration: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
            transition: "background-color 0.2s"
        })}
        >
            Resources
            </NavLink>

        {/* Botón de tema */}
        <button
        onClick={toggleTheme}
        style={{
          marginLeft: "auto",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "rgba(255,255,255,0.2)",
          color: "white",
          cursor: "pointer",
          fontSize: "1.2rem"
        }}
        >
          {isDarkMode ?  "☀️" : "🌙"}
        </button>
      </nav>
    );
}