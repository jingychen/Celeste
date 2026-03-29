import { Instagram } from "lucide-react";

const navLinks = [
  { label: "Homepage", href: "#" },
  { label: "Exhibition", href: "#exhibition" },
  { label: "Signed Artist", href: "#artists" },
  { label: "Open Call", href: "#open-call" },
  { label: "Awards", href: "#awards" },
  { label: "About", href: "#about" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-12 md:gap-16">
        {/* Logo */}
        <div>
          <span className="text-foreground text-sm tracking-[0.3em] uppercase font-light">Gallery</span>
        </div>

        {/* Nav */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] text-foreground/30 tracking-[0.1em] uppercase hover:text-foreground transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/30 hover:text-gold transition-colors duration-500"
        >
          <Instagram size={18} />
        </a>
      </div>

      <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[11px] text-foreground/15 tracking-[0.1em] uppercase">© 2026 Gallery. All rights reserved.</p>
        <p className="text-[11px] text-foreground/15 tracking-[0.1em] uppercase">New York — London — Berlin</p>
      </div>
    </footer>
  );
};

export default Footer;
