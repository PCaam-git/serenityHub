import { useEffect, useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

interface ResourceItem {
  id: number;
  title: string;
  description: string;
}

function Resources() {
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      try {
      const mockData = [
        { id: 1, title: "Guía de Respiración", description: "Técnica 4-7-8 para calmar la ansiedad." },
        { id: 2, title: "Diario de Emociones", description: "Plantilla para registrar tu día a día." },
        { id: 3, title: "Música Binaural", description: "Sonidos para mejorar la concentración." }
      ];
      setResources(mockData);
      setLoading(false);
    } catch (err) {
      setError("No se pudieron cargar los recursos. Por favor, inténtalo de nuevo más tarde.");
      setLoading(false);
    }
    }, 1500);
  }, []);

 if (loading) {
  return <LoadingSpinner />;
 }

 if (error) {
  return <ErrorMessage message={error} />;
 }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recursos Disponibles</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {resources.map((item) => (
            <ResourceCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            />
        ))}
      </ul>
    </div>
  );
}

export default Resources;
