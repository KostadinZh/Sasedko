export default function Card({ title, meta, children, footer }) {
  return (
    <article className="card">
      {title && <h3 className="card__title">{title}</h3>}
      {meta && <p className="card__meta">{meta}</p>}
      <div className="card__body">{children}</div>
      {footer && <div className="card__footer">{footer}</div>}
    </article>
  );
}
