import PageHero from "../../components/PageHero";

export const metadata = { title: "Gift Cards" };

export default function GiftCards() {
  const giftUrl = process.env.NEXT_PUBLIC_SQUARE_GIFT_CARD_URL || "/contact";
  return (
    <>
      <PageHero
        eyebrow="Give Restoration"
        title="A gift that always feels personal."
        copy="Perfect for birthdays, celebrations, thank-you gifts and meaningful moments of self-care."
        image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=85"
        alt="Spa gift and wellness products"
      />
      <section className="section gift-layout" data-reveal>
        <div>
          <p className="eyebrow">Digital Gift Cards</p>
          <h2>Send wellness in minutes.</h2>
          <p>
            Offer digital gift cards through Square in custom amounts or
            suggested values such as $50, $100, $150, $250 and $350.
          </p>
          <ul>
            <li>Delivered electronically</li>
            <li>Usable toward eligible services</li>
            <li>Easy to purchase from any device</li>
            <li>Ideal for last-minute gifting</li>
          </ul>
          <a className="button clay-button" href={giftUrl}>Purchase a Gift Card</a>
        </div>
        <div className="gift-card">
          <span>RED LEAF</span>
          <strong>Gift of Renewal</strong>
          <small>Head Spa & Massage</small>
        </div>
      </section>
    </>
  );
}
