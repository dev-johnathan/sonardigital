export default function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="section-heading">
      <div className="section-heading__text">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {action ? <div className="section-heading__action">{action}</div> : null}
    </div>
  );
}
