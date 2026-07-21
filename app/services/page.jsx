import PageHero from "../../components/PageHero";
import BookingBand from "../../components/BookingBand";

export const metadata = { title: "Services" };

const groups = [
  {
    title: "Japanese-Inspired Head Spa",
    copy: "Scalp analysis, cleansing, exfoliation, steam, massage, aromatherapy and conditioning care.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1400&q=85",
    items: ["Signature Head Spa Experience", "Luxury Head Spa Deluxe", "Platinum Head Spa Experience", "Scalp Detox Treatment", "Hydrating Scalp Therapy", "Hair Growth Stimulation"],
  },
  {
    title: "Massage Therapy",
    copy: "Licensed massage therapists customize pressure, techniques and focus areas around your goals.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85",
    items: ["Swedish Massage", "Deep Tissue Massage", "Therapeutic Massage", "Sports Massage", "Prenatal Massage", "Couples Massage"],
  },
  {
    title: "Facial Treatments",
    copy: "Skin-focused services designed to improve hydration, clarity, brightness and overall skin health.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    items: ["Signature Facial", "European Facial", "Hydrating Facial", "Brightening Facial", "Anti-Aging Facial", "Luxury Spa Facial"],
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Service Menu"
        title="Personalized care, beautifully delivered."
        copy="Explore our complete collection of head spa, massage, facial and wellness treatments."
        image="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=85"
        alt="Head spa treatment room"
      />

      <section className="section service-groups">
        {groups.map((group, index) => (
          <article className={index % 2 ? "service-row reverse" : "service-row"} key={group.title} data-reveal>
            <img src={group.image} alt={group.title} />
            <div>
              <p className="eyebrow">0{index + 1}</p>
              <h2>{group.title}</h2>
              <p>{group.copy}</p>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <BookingBand title="Choose your service and book online." />
    </>
  );
}
