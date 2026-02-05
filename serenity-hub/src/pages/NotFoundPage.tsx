import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '5rem', margin: '0', color: '#e53e3e' }}>404</h1>
      <h2 style={{ fontSize: '2rem', margin: '1rem 0', color: '#2d3748' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem', color: '#718096', fontSize: '1.2rem' }}>
        Sorry, the page you are looking for does not exist.
        </p>
        <Link
        to="/"
        style={{
          backgroundColor: '#2c7a7b',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem'            
        }}
        >
            Go Back Home
        </Link>
        </div>
    );
};

export default NotFoundPage;