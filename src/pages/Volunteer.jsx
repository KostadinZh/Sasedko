import { useState } from 'react';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

const LIST = [
  { id: 1, title: 'Пазар с компания за възрастни хора', meta: 'Тракия · четвъртък' },
  { id: 2, title: 'Почистване на двора на блок 14', meta: 'Кършияка · събота' },
  { id: 3, title: 'Уроци по български за ученици', meta: 'Читалище „Заря“ · вторник' },
];

export default function Volunteer() {
  const [joined, setJoined] = useState([]);
  const toggle = (id) => setJoined(joined.includes(id) ? joined.filter((x) => x !== id) : [...joined, id]);
  return (
    <>
      <h1>Намери инициатива</h1>
      <p>Записан си в {joined.length} {joined.length === 1 ? 'инициатива' : 'инициативи'}.</p>
      <div className="grid">
        {LIST.map((i) => (
          <Card key={i.id} title={i.title} meta={i.meta}
            footer={<Button variant={joined.includes(i.id) ? 'outline' : 'primary'} onClick={() => toggle(i.id)}>
              {joined.includes(i.id) ? 'Отпиши се' : 'Запиши се'}</Button>}>
            Нужни са доброволци.
          </Card>
        ))}
      </div>
    </>
  );
}
