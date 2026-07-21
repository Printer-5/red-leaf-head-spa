import PageHero from "../../components/PageHero";
import BookingBand from "../../components/BookingBand";

export const metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Philosophy"
        title="Wellness with purpose."
        copy="Personalized spa care designed to restore confidence, comfort and calm."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
        alt="Serene spa interior"
      />

      <section className="section split" data-reveal>
        <div>
          <p className="eyebrow">About Red Leaf</p>
          <h2>A peaceful space created around your well-being.</h2>
        </div>
        <div className="body-copy">
          <p>
            Our mission is simple: help every guest look better, feel better
            and live with less stress.
          </p>
          <p>
            Our approach combines Japanese-inspired scalp rituals with
            professional massage therapy, advanced facial treatments and
            premium wellness enhancements. Every appointment begins with your
            goals and is adapted to your comfort, preferences and needs.
          </p>
        </div>
      </section>

      <section className="section soft">
        <div className="value-grid">
          {[
            ["Personalized", "Pressure, focus areas and treatment details are tailored to you."],
            ["Professional", "Licensed providers deliver attentive care in a clean, modern environment."],
            ["Restorative", "Services support relaxation, mobility, scalp wellness and skin health."],
            ["Elevated", "Premium products and thoughtful rituals turn self-care into an experience."],
          ].map(([title, copy]) => (
            <article key={title} data-reveal>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section editorial reverse" data-reveal>
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=85"
          alt="Relaxing wellness treatment"
        />
        <div>
          <p className="eyebrow">The Red Leaf Experience</p>
          <h2>Quiet, intentional and entirely yours.</h2>
          <p>
            From arrival through your final moment of rest, each detail is
            designed to reduce noise, encourage calm and create space for
            renewal.
          </p>
        </div>
      </section>

      <BookingBand title="Your time to recharge begins here." />
    </>
  );
}
