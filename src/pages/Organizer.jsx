import { useState } from 'react';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

export default function Organizer() {
  const [items, setItems] = useState([{ id: 1, title: 'Почистване на парка', date: '2026-12-05' }]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const add = (e) => {
    e.preventDefault();
    if (!title.trim() || !date) return;
    setItems([...items, { id: Date.now(), title, date }]);
    setTitle(''); setDate('');
  };

  return (
    <>
      <h1>Моите инициативи</h1>
      <form className="form form--inline" onSubmit={add}>
        <label>Заглавие<input value={title} onChange={(e) => setTitle(e.target.value)} /></label>
        <label>Дата<input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></label>
        <Button type="submit">Добави инициатива</Button>
      </form>
      <div className="grid">
        {items.map((i) => <Card key={i.id} title={i.title} meta={`Дата: ${i.date}`}>Очакваме доброволци.</Card>)}
      </div>
    </>
  );
}
