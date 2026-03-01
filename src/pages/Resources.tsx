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
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedAuthor, setSelectedAuthor] = useState("all");

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "mindfulness";

  const categoryTitles: Record<string, string> = {
    mindfulness: "Mindfulness & Meditation",
    exercise: "Physical Exercise",
    nutrition: "Healthy Nutrition",
    mental_health: "Mental Health"
  };

  useEffect(() => {
    fetch(`https://openlibrary.org/subjects/${category}.json?limit=20`)
      .then((response) => {
        if (!response.ok) throw new Error("Connection failed");
        return response.json();
      })
      .then((data) => {
        const cleanBooks = data.works.map((work: ApiWork) => ({
          id: work.key.split('/').pop() || work.key,
          title: work.title,
          description: work.authors ? `Author: ${work.authors[0].name}` : "Unknown Author"
        }));
        setResources(cleanBooks);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load resources.");
        setLoading(false);
      });
  }, [category]);

  const authors = Array.from(
    new Set(resources.map((item) => item.description.replace("Author: ", "")))
  ).sort();

  const filteredResources = resources.filter((item) => {
    if (selectedAuthor !== "all" && !item.description.includes(selectedAuthor)) {
      return false;
    }

    const searchText = query.toLowerCase();
    const itemText = `${item.title} ${item.description}`.toLowerCase();
    return itemText.includes(searchText);
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    const comparison = a.title.localeCompare(b.title);
    return sortOrder === "asc" ? comparison : -comparison;
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="resources-page">
      <Title text={categoryTitles[category] || category} />

      <div className="filters-panel">
        <div className="filters-panel__group">
          <input
            type="text"
            placeholder="Search title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control form-control--search"
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="form-control"
          >
            <option value="asc">Title (A-Z)</option>
            <option value="desc">Title (Z-A)</option>
          </select>

          <select
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="form-control"
          >
            <option value="all">All Authors</option>
            {authors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-summary">
        Found <strong>{sortedResources.length}</strong> results
      </div>

      {sortedResources.length === 0 ? (
        <p className="empty-state">No resources found matching your criteria.</p>
      ) : (
        <ul className="resource-list">
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
