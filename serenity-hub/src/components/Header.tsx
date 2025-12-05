import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', marginBottom: '2rem' }}>
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.2rem', color: '#2c7a7b' }}>🌿 Serenity Hub</h1>
        <Link to="/" style={{ textDecoration: 'none', color: '#4a5568' }}>Inicio</Link>
        <Link to="/resources" style={{ textDecoration: 'none', color: '#4a5568' }}>Recursos</Link>
      </nav>
    </header>
  );
}

export default Header;
