import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ResourceCard from '../components/ResourceCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';

interface ResourceItem {
  id: string;
  title: string;
  description: string;
}

interface ApiWork {
  key: string;
  title: string;
  authors?: { name: string }[];
}

function Resources() {
  // Estado para los recursos, carga y error
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Estados de filtros y búsqueda
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedAuthor, setSelectedAuthor] = useState("all");

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "mindfulness";

  const categoryTitles: Record<string, string> = {
    mindfulness: "Mindfulness & Meditation",
    exercise: "Physical Exercise",
    nutrition: "Healthy Nutrition",
    "mental_health": "Mental Health"
  };

  useEffect(() => {
    fetch(`https://openlibrary.org/subjects/${category}.json?limit=20`)
      .then((response) => {
        if (!response.ok) throw new Error("Connection failed");
        return response.json();
      })
      .then((data) => {
        const librosLimpios = data.works.map((work: ApiWork) => ({
          id: work.key.split('/').pop() || work.key,
          title: work.title,
          description: work.authors ? `Author: ${work.authors[0].name}` : "Unknown Author"
        }));
        setResources(librosLimpios);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load resources.");
        setLoading(false);
      });
  }, [category]);

  // Filtro por autor
  const authors = Array.from(
    new Set(resources.map(item => item.description.replace("Author: ", "")))
  ).sort();

  // Filtrado por texto
  const filteredResources = resources.filter((item) => {
    if (selectedAuthor !== "all") {
      if (!item.description.includes(selectedAuthor)) {
        return false;
      }
    }

    const searchText = query.toLowerCase();
    const itemText = (item.title + " " + item.description).toLowerCase();
    return itemText.includes(searchText);
  });

  // Ordenación
  const sortedResources = [...filteredResources].sort((a, b) => {
    const comparison = a.title.localeCompare(b.title);
    return sortOrder === "asc" ? comparison : -comparison;
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  // Estilos reutilizables para inputs
  const inputStyle = {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    backgroundColor: "white",
    fontSize: "1rem",
    color: "#4a5568",
    outline: "none",
    transition: "border-color 0.2s",
    minWidth: "200px"
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Título y Subtítulo */}
      <div style={{ marginBottom: "40px"}}>
        <Title text={categoryTitles[category] || category} />
      </div>

      {/* Caja de Filtros*/}
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        marginBottom: '20px', 
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #edf2f7'
      }}>
        
        {/* Grupo de Inputs */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', flex: 1 }}>
          <input 
            type="text" 
            placeholder="Search title..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ ...inputStyle, flex: 2 }}
          />
          
          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            style={inputStyle}
          >
            <option value="asc">Title (A-Z)</option>
            <option value="desc">Title (Z-A)</option>
          </select>

          <select 
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            style={{ ...inputStyle, maxWidth: '200px' }}
          >
            <option value="all">All Authors</option>
            {authors.map(author => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Feedback de resultados*/}
      <div style={{ 
        textAlign: 'right',
        fontSize: '0.9rem', 
        color: '#718096', 
        marginBottom: '20px',
        borderBottom: '1px solid #eee',
        paddingBottom: '10px'
      }}>
        Found <strong>{sortedResources.length}</strong> results
      </div>

      {/* Lista de Resultados */}
      {sortedResources.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', marginTop: '40px' }}>
          No resources found matching your criteria.
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '15px' }}>
          {sortedResources.map((item) => (
            <ResourceCard 
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Resources;