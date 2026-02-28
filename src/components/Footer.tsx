export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} Serenity Hub. Interface Design Project.</p>
    </footer>
  );
}
