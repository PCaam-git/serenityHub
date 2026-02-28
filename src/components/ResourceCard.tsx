import { Link } from 'react-router-dom';

interface ResourceCardProps {
  id: string | number;
  title: string;
  description: string;
}

function ResourceCard({ id, title, description }: ResourceCardProps) {
  return (
    <li className="resource-card">
      <h3 className="resource-card__title">{title}</h3>
      <p className="resource-card__description">{description}</p>
      <Link to={`/resources/${id}`} className="resource-card__link">
        View detail
      </Link>
    </li>
  );
}

export default ResourceCard;
