import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: {
    default: "Red Leaf Head Spa & Massage",
    template: "%s | Red Leaf Head Spa & Massage",
  },
  description:
    "Japanese-inspired head spa treatments, massage therapy, facials, wellness memberships and gift cards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
