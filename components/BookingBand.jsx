export default function BookingBand({
  title = "Ready to feel renewed?",
  copy = "View live availability and reserve through Square Appointments.",
}) {
  const bookingUrl =
    process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL || "/contact";
  return (
    <section className="booking-band" data-reveal>
      <div>
        <p className="eyebrow light">Your appointment awaits</p>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <a className="button light-button" href={bookingUrl}>
        Book with Square
      </a>
    </section>
  );
}
