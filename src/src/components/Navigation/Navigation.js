import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import './Navigation.scss';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className="link" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="link" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
