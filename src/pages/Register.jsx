import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Button from '../components/Button.jsx';

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'volunteer' });
  const [error, setError] = useState('');
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return setError('Въведи името си.');
    if (!form.email.includes('@')) return setError('Въведи валиден имейл адрес.');
    if (form.password.length < 6) return setError('Паролата трябва да е поне 6 символа.');
    login(form.name, form.email, form.role);
    navigate('/profil');
  };

  return (
    <div className="container form-page">
      <form className="form" onSubmit={submit} noValidate>
        <h1>Регистрация</h1>
        <label>Име<input value={form.name} onChange={set('name')} /></label>
        <label>Имейл<input type="email" value={form.email} onChange={set('email')} /></label>
        <label>Парола<input type="password" value={form.password} onChange={set('password')} /></label>
        <label>Искам да бъда
          <select value={form.role} onChange={set('role')}>
            <option value="volunteer">Доброволец</option>
            <option value="organizer">Организатор</option>
          </select>
        </label>
        {error && <p className="form__error" role="alert">{error}</p>}
        <Button type="submit">Създай профил</Button>
        <p className="form__hint">Вече имаш профил? <Link to="/vhod">Влез</Link></p>
      </form>
    </div>
  );
}
