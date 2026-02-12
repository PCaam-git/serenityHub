import { Link } from 'react-router-dom';

interface ResourceCardProps {
    id: string | number;
    title: string;
    description: string;
}

function ResourceCard({ id, title, description}: ResourceCardProps) {
    return  (
        <li style={{
            marginBottom: '15px',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
        <h3 style={{ margin: '0 0 8px 0', color: 'var(--text-primary)' }}>{title}</h3>
        <p style={{ margin: '0 0 12px 0', color: '#718096', fontSize: '0.95rem' }}> {description}</p>
        <Link 
        to={`/resources/${id}`}
        style={{
            color: '#319795',
           fontWeight: 600,
            textDecoration: 'none',
            fontSize: '0.9rem'
        }}
    >
        View Detail →
    </Link>
    </li>
    );
}

export default ResourceCard;