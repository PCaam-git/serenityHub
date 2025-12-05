import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

interface ResourceDetailData {
  id: number;
  title: string;
  fullContent: string;
  author: string;
}

function ResourceDetail() {
  const { id } = useParams<{ id: string }>();

  const [resource, setResource] = useState<ResourceDetailData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      try {
        if (!id) throw new Error("ID no válido");

      const tituloGenerado = "Título del Recurso " + id;

      const mockDetail = {
        id: Number(id),
        title: tituloGenerado,
        fullContent: "Próximamente: contenido extenso, ejercicios prácticos y guía paso a paso del recurso seleccionado.",
        author: "Experto en Salud Mental"
      };

      setResource(mockDetail);
      setLoading(false);
    } catch (err) {
      setError("Error al cargar el detalle del recurso. Por favor, inténtalo de nuevo más tarde.");
      setLoading(false);
    }
    }, 1000); 
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!resource) {
    return <ErrorMessage message="Recurso no encontrado" />;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Link to="/resources" style={{ textDecoration: 'none' }}>← Volver a la lista</Link>
      
      <h1 style={{ color: '#2c7a7b' }}>{resource.title}</h1>
      <p style={{ fontStyle: 'italic', color: '#666' }}>Autor: {resource.author}</p>
      
      <div style={{ marginTop: '20px', lineHeight: '1.6' }}>
        <p>{resource.fullContent}</p>
      </div>
    </div>
  );
}

export default ResourceDetail;