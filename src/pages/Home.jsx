import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';

const INITIATIVES = [
  { id: 1, title: 'Пазар с компания за възрастни хора', meta: 'Всеки четвъртък · кв. Тракия', text: 'Помагаме на съседи над 65 години с пазаруването и носенето на торбите.' },
  { id: 2, title: 'Почистване на двора на блок 14', meta: 'Събота, 10:00 · кв. Кършияка', text: 'Носим ръкавици и торби. Донеси добро настроение и метла, ако имаш.' },
  { id: 3, title: 'Уроци по български за ученици', meta: 'Вторник и петък · Читалище „Заря“', text: 'Помагаме на деца с домашните и с четенето.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <h1>Половин час за съседа ти е достатъчен, за да се промени един квартал.</h1>
          <p>Съседско събира доброволци и организатори на едно място. Избери инициатива наблизо, запиши се и се включи.</p>
          <div className="hero__cta">
            <Button to="/registraciya">Стани доброволец</Button>
            <Button to="/vhod" variant="outline">Организирай инициатива</Button>
          </div>
        </div>
      </section>
      <section className="container section">
        <h2>Предстоящи инициативи</h2>
        <div className="grid">
          {INITIATIVES.map((i) => (
            <Card key={i.id} title={i.title} meta={i.meta} footer={<Button to="/vhod" variant="ghost">Влез, за да се запишеш</Button>}>
              {i.text}
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
