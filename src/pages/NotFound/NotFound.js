import './NotFound.scss';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 Not Found</h1>
      <p сlassName="not-found-message">
        Sorry, the page you are looking for might be in another castle.
      </p>
      <Link to="/" className="not-found-link">
        Go back to Home
      </Link>
    </div>
  );
}