import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, ROLES } from '../context/AuthContext.jsx';
import Button from '../components/Button.jsx';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('volunteer');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return setError('Въведи валиден имейл адрес.');
    login(email.split('@')[0], email, role);
    navigate('/profil');
  };

  return (
    <div className="container form-page">
      <form className="form" onSubmit={submit} noValidate>
        <h1>Вход</h1>
        <label>Имейл<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
        <label>Парола<input type="password" required /></label>
        <label>Влез като (демо)
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            {Object.entries(ROLES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        {error && <p className="form__error" role="alert">{error}</p>}
        <Button type="submit">Влез</Button>
        <p className="form__hint">Нямаш профил? <Link to="/registraciya">Регистрирай се</Link></p>
      </form>
    </div>
  );
}
