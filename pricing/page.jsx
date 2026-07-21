import PageHero from "../../components/PageHero";
import BookingBand from "../../components/BookingBand";

export const metadata = { title: "Pricing" };

const sections = [
  ["Japanese-Inspired Head Spa", [
    ["Mini Head Spa", "45 minutes", "$89"],
    ["Signature Japanese Head Spa", "60 minutes", "$129"],
    ["Luxury Head Spa Deluxe", "75 minutes", "$159"],
    ["Platinum Head Spa Experience", "90 minutes", "$189"],
    ["Ultimate Head Spa Experience", "120 minutes", "$249"],
  ]],
  ["Massage Therapy", [
    ["Swedish or Relaxation Massage", "30 / 60 / 90 / 120 minutes", "$59 / $109 / $149 / $199"],
    ["Deep Tissue or Therapeutic Massage", "30 / 60 / 90 / 120 minutes", "$69 / $119 / $159 / $209"],
    ["Sports Massage", "30 / 60 / 90 / 120 minutes", "$69 / $125 / $169 / $219"],
    ["Prenatal Massage", "60 / 90 minutes", "$119 / $159"],
    ["Couples Massage", "60 / 90 / 120 minutes, total for two", "$229 / $299 / $399"],
  ]],
  ["Facial Treatments", [
    ["Express Facial", "30 minutes", "$69"],
    ["Signature Facial", "50 minutes", "$99"],
    ["European or Hydrating Facial", "60 minutes", "$119"],
    ["Brightening, Acne or Sensitive Skin Facial", "60 minutes", "$129"],
    ["Anti-Aging Facial", "70 minutes", "$139"],
    ["Luxury Spa Facial", "90 minutes", "$169"],
  ]],
];

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Transparent Pricing"
        title="Premium care at an approachable value."
        copy="Explore treatments, durations and package options with clear pricing."
        image="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1600&q=85"
        alt="Spa towels and wellness products"
      />
      <section className="section pricing-page">
        {sections.map(([title, items]) => (
          <article className="price-section" key={title} data-reveal>
            <h2>{title}</h2>
            <div className="price-list">
              {items.map(([name, duration, price]) => (
                <div className="price-row" key={name}>
                  <span><strong>{name}</strong><small>{duration}</small></span>
                  <b>{price}</b>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
      <BookingBand title="Reserve at today’s listed rate." />
    </>
  );
}
