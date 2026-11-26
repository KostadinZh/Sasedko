import { useState } from 'react';
import Button from '../components/Button.jsx';

const START = [
  { id: 1, name: 'Мария Иванова', role: 'Организатор' },
  { id: 2, name: 'Георги Петров', role: 'Доброволец' },
  { id: 3, name: 'Десислава Колева', role: 'Доброволец' },
];

export default function Admin() {
  const [users, setUsers] = useState(START);
  const remove = (id) => setUsers(users.filter((u) => u.id !== id));
  return (
    <>
      <h1>Администраторски панел</h1>
      <h2>Потребители</h2>
      {users.length === 0 ? <p>Няма потребители.</p> : (
        <table className="table">
          <thead><tr><th>Име</th><th>Роля</th><th>Действие</th></tr></thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td><td>{u.role}</td>
                <td><Button variant="danger" onClick={() => remove(u.id)}>Премахни</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
