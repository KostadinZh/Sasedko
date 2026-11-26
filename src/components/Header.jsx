import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth, ROLES } from '../context/AuthContext.jsx';
import Button from './Button.jsx';

const HOME_BY_ROLE = { admin: '/admin', organizer: '/organizator', volunteer: '/dobrovolec' };

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="brand">
          <img src="/logo.svg" alt="" width="36" height="36" />
          <span>Съседско</span>
        </Link>
        <nav className="header__nav" aria-label="Основна навигация">
          <NavLink to="/" end>Начало</NavLink>
          {user && <NavLink to={HOME_BY_ROLE[user.role]}>Моето табло</NavLink>}
        </nav>
        <div className="header__actions">
          {user ? (
            <>
              <span className="header__user">{user.name} · {ROLES[user.role]}</span>
              <Button variant="ghost" onClick={() => { logout(); navigate('/'); }}>Изход</Button>
            </>
          ) : (
            <>
              <Button to="/vhod" variant="ghost">Вход</Button>
              <Button to="/registraciya">Регистрация</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
