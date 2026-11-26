import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import Admin from './pages/Admin.jsx';
import Organizer from './pages/Organizer.jsx';
import Volunteer from './pages/Volunteer.jsx';

function Protected({ roles, children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/vhod" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/profil" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/vhod" element={<Login />} />
        <Route path="/registraciya" element={<Register />} />
      </Route>
      <Route element={<Protected><DashboardLayout /></Protected>}>
        <Route path="/profil" element={<Profile />} />
        <Route path="/admin" element={<Protected roles={['admin']}><Admin /></Protected>} />
        <Route path="/organizator" element={<Protected roles={['organizer']}><Organizer /></Protected>} />
        <Route path="/dobrovolec" element={<Protected roles={['volunteer']}><Volunteer /></Protected>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
