import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Red Leaf</div>
          <p>Head Spa & Massage</p>
          <p className="gold">Relax. Renew. Restore.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/memberships">Memberships</Link>
          <Link href="/gift-cards">Gift Cards</Link>
        </div>
        <div>
          <h3>Visit</h3>
          <p>Your spa address<br />City, State ZIP</p>
          <p>Open daily by appointment</p>
        </div>
        <div>
          <h3>Connect</h3>
          <a href="tel:+10000000000">(000) 000-0000</a>
          <a href="mailto:hello@redleafheadspa.com">hello@redleafheadspa.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Red Leaf Head Spa & Massage</span>
        <span>Prices and availability are subject to change.</span>
      </div>
    </footer>
  );
}
