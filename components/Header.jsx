"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Memberships", "/memberships"],
  ["Gift Cards", "/gift-cards"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const bookingUrl =
    process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL || "/contact";

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <span className="brand-leaf">R</span>
        <span>
          <strong>Red Leaf</strong>
          <small>Head Spa & Massage</small>
        </span>
      </Link>

      <button
        className="menu-button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={open ? "nav open" : "nav"}>
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <a className="book-nav" href={bookingUrl}>
          Book Now
        </a>
      </nav>
    </header>
  );
}
