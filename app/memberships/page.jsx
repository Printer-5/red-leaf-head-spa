import PageHero from "../../components/PageHero";
import BookingBand from "../../components/BookingBand";

export const metadata = { title: "Memberships" };

const plans = [
  ["Essential", "$89", ["One 60-minute relaxation massage or Signature Facial", "10% off additional services", "Priority booking"]],
  ["Signature", "$129", ["One Signature Head Spa monthly", "10% off services and retail", "Birthday enhancement", "Priority booking"]],
  ["Elite", "$179", ["One eligible premium service monthly", "15% off services and retail", "Complimentary aromatherapy", "Priority scheduling"]],
];

export default function Memberships() {
  return (
    <>
      <PageHero
        eyebrow="Monthly Wellness"
        title="Consistency feels better."
        copy="Membership options designed to make routine self-care easier and more rewarding."
        image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85"
        alt="Relaxing massage treatment"
      />
      <section className="section">
        <div className="membership-grid">
          {plans.map(([name, price, benefits], i) => (
            <article className={i === 1 ? "membership-card featured" : "membership-card"} key={name} data-reveal>
              <p className="eyebrow">{i === 1 ? "Most Popular" : name}</p>
              <h2>{price}<small>/month</small></h2>
              <h3>{name} Membership</h3>
              <ul>{benefits.map((b) => <li key={b}>{b}</li>)}</ul>
              <a className={i === 1 ? "button light-button" : "button dark-button"} href={process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL || "/contact"}>
                Join or Book
              </a>
            </article>
          ))}
        </div>
      </section>
      <BookingBand title="Build a wellness routine that lasts." />
    </>
  );
}
