export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
      style={{
        backgroundColor: "var(--color-neutral-light)",
        color: "var(--color-neutral-dark)",
        padding: "20px 0",
        textAlign: "center",
        fontSize: "13px",
        borderTop: "1px solid var(--border-color)",
        width: "100%",
        marginTop: "auto"
      }}
    >
      <p style={{ margin: "5px 0" }}>
        &copy; {currentYear} Serenity Hub. Interface Design Project.
      </p>
    </footer>
    );
}