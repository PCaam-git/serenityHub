import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

interface ResourceDetailData {
title: string;
description: string;
covers?: number[];
}

function ResourceDetail() {
  const { id } = useParams<{ id: string }>();
  const [resource, setResource] = useState<ResourceDetailData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {


    fetch(`https://openlibrary.org/works/${id}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo encontrar el libro");
        }
        return response.json();
      })
      .then((data) => {
        // TRUCO: A veces la descripción viene como texto y otras como objeto
        let desc = "Sin descripción disponible.";
        if (data.description) {
          if (typeof data.description === 'string') {
            desc = data.description;
          } else if (data.description.value) {
            desc = data.description.value;
          }
        }

        setResource({
          title: data.title,
          description: desc,
          covers: data.covers
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Error al cargar el detalle del libro.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!resource) return <ErrorMessage message="Libro no encontrado" />;


  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/resources" style={{ textDecoration: 'none', color: '#2c7a7b' }}>
        ← Volver a la lista
      </Link>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '30px', 
        backgroundColor: 'white', 
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#2d3748', marginBottom: '10px' }}>{resource.title}</h1>
      
        {resource.covers && resource.covers.length > 0 && (
          <img 
            src={`https://covers.openlibrary.org/b/id/${resource.covers[0]}-M.jpg`} 
            alt="Portada del libro"
            style={{ borderRadius: '8px', marginBottom: '20px', maxWidth: '200px' }}
          />
        )}

        <h3 style={{ color: '#4a5568', fontSize: '1.1rem' }}>Sinopsis:</h3>
        <p style={{ lineHeight: '1.6', color: '#718096', whiteSpace: 'pre-line' }}>
          {resource.description}
        </p>
      </div>
    </div>
  );
}

export default ResourceDetail;