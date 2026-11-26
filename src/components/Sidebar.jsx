import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const LINKS = {
  admin: [['/admin', 'Администраторски панел']],
  organizer: [['/organizator', 'Моите инициативи']],
  volunteer: [['/dobrovolec', 'Намери инициатива']],
};

export default function Sidebar() {
  const { user } = useAuth();
  const links = [...(LINKS[user.role] || []), ['/profil', 'Профил']];
  return (
    <aside className="sidebar" aria-label="Странична навигация">
      <ul>
        {links.map(([to, label]) => (
          <li key={to}><NavLink to={to}>{label}</NavLink></li>
        ))}
      </ul>
    </aside>
  );
}
