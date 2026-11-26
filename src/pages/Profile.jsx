import { useAuth, ROLES } from '../context/AuthContext.jsx';
import Card from '../components/Card.jsx';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <h1>Моят профил</h1>
      <Card title={user.name} meta={ROLES[user.role]}>
        <p>Имейл: {user.email}</p>
        <p>Тук ще се показват твоите данни и активност.</p>
      </Card>
    </>
  );
}
