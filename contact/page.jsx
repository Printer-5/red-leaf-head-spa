import PageHero from "../../components/PageHero";

export const metadata = { title: "Contact" };

export default function Contact() {
  const bookingUrl = process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL || "#";
  return (
    <>
      <PageHero
        eyebrow="Visit Red Leaf"
        title="Your quiet place to renew."
        copy="Contact us, view general hours or reserve online through Square Appointments."
        image="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=85"
        alt="Calm spa environment"
      />
      <section className="section contact-grid" data-reveal>
        <div>
          <p className="eyebrow">Location</p>
          <h2>Red Leaf Head Spa & Massage</h2>
          <p>Your spa address<br />City, State ZIP</p>
          <p><strong>Phone:</strong> (000) 000-0000<br /><strong>Email:</strong> hello@redleafheadspa.com</p>
          <div className="actions">
            <a className="button clay-button" href={bookingUrl}>Book Appointment</a>
            <a className="button outline-dark" href="mailto:hello@redleafheadspa.com">Email Us</a>
          </div>
        </div>
        <div className="hours-card">
          <h3>General Hours</h3>
          <div><span>Monday–Friday</span><b>9:00 AM–8:00 PM</b></div>
          <div><span>Saturday</span><b>9:00 AM–7:00 PM</b></div>
          <div><span>Sunday</span><b>10:00 AM–6:00 PM</b></div>
          <p>Provider availability and service times appear in Square Appointments.</p>
        </div>
      </section>
    </>
  );
}
