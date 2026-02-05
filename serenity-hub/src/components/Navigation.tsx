import { NavLink } from "react-router-dom";

export default function Navigation() {
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
        </nav>
    );
}