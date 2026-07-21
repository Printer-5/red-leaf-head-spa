import Link from "next/link";
import BookingBand from "../components/BookingBand";

const services = [
  {
    number: "01",
    title: "Japanese-Inspired Head Spa",
    copy: "Deep cleansing, steam, aromatherapy, scalp massage and premium conditioning care.",
    price: "From $89",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Massage Therapy",
    copy: "Personalized therapeutic and relaxation sessions from licensed professionals.",
    price: "From $59",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Facial Treatments",
    copy: "Results-focused skin care paired with the quiet rituals of a modern spa.",
    price: "From $69",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Home() {
  const bookingUrl =
    process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL || "/contact";

  return (
    <>
      <section className="home-hero">
        <div className="home-photo" />
        <div className="home-overlay" />
        <div className="home-content">
          <p className="eyebrow light">A modern ritual for complete renewal</p>
          <h1>Luxury wellness, rooted in restoration.</h1>
          <p>
            Japanese-inspired head spa treatments, therapeutic massage,
            advanced facials and personalized self-care in a serene boutique
            setting.
          </p>
          <div className="actions">
            <a className="button clay-button" href={bookingUrl}>Book with Square</a>
            <Link className="button outline-light" href="/services">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="section split" data-reveal>
        <div>
          <p className="eyebrow">Welcome to Red Leaf</p>
          <h2>Wellness that helps you look better, feel better and live with less stress.</h2>
        </div>
        <div className="body-copy">
          <p>
            Wellness is more than relaxation. It is an investment in physical
            health, mental clarity and overall well-being.
          </p>
          <p>
            Every visit is adapted to your goals, whether you are seeking
            muscle relief, improved scalp care, healthier-looking skin or a
            quiet place to recharge.
          </p>
          <Link className="text-link" href="/about">Discover our philosophy →</Link>
        </div>
      </section>

      <section className="section soft">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Signature Experiences</p>
          <h2>Care from head to toe.</h2>
        </div>
        <div className="service-showcase">
          {services.map((service) => (
            <article className="service-tile" key={service.title} data-reveal>
              <img src={service.image} alt={service.title} />
              <div>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <Link href="/pricing">{service.price} →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band" data-reveal>
        <p>“Every visit is designed to leave you refreshed, renewed and restored.”</p>
      </section>

      <section className="section editorial" data-reveal>
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85"
          alt="Peaceful spa interior"
        />
        <div>
          <p className="eyebrow">Monthly Wellness</p>
          <h2>Make restoration part of your routine.</h2>
          <p>
            Choose a monthly membership built around massage, head spa or
            flexible premium services. Members enjoy preferred pricing,
            priority booking and exclusive benefits.
          </p>
          <Link className="button dark-button" href="/memberships">View Memberships</Link>
        </div>
      </section>

      <BookingBand />
    </>
  );
}
