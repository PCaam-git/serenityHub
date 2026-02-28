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
    <div className="detail-page">
      <Link to="/resources" className="back-link">
        Back to resources
      </Link>

      <div className="detail-card">
        <h1 className="detail-card__title">{resource.title}</h1>

        {resource.covers && resource.covers.length > 0 && (
          <img
            src={`https://covers.openlibrary.org/b/id/${resource.covers[0]}-M.jpg`}
            alt="Book cover"
            className="detail-card__cover"
          />
        )}

        <h2 className="detail-card__subtitle">Synopsis</h2>
        <p className="detail-card__text">{resource.description}</p>
      </div>
    </div>
  );
}

export default ResourceDetail;
