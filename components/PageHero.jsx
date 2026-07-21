export default function PageHero({ eyebrow, title, copy, image, alt }) {
  return (
    <section className="page-hero">
      <div className="page-hero-image">
        <img src={image} alt={alt || ""} />
      </div>
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}
