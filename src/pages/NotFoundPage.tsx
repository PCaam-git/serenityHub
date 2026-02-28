import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__code">404</h1>
      <h2 className="not-found-page__title">Page Not Found</h2>
      <p className="not-found-page__text">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="button-link">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
