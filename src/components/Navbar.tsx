import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Homepage", href: "/" },
  { label: "Exhibition", href: "/exhibitions" },
  { label: "Signed Artist", href: "/artists" },
  { label: "Open Call", href: "/open-call" },
  { label: "Awards", href: "/awards" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 md:py-8">
      <Link to="/" className="text-foreground text-lg tracking-[0.25em] uppercase font-extralight">
        Celeste
      </Link>

      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className={`text-[13px] tracking-[0.08em] uppercase font-normal hover:text-foreground transition-colors duration-500 ${
              location.pathname === link.href ? "text-foreground" : "text-foreground/50"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 hover:text-foreground transition-colors duration-500"
        >
          <Instagram size={18} />
        </a>
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-sm border-b border-border px-6 py-10 flex flex-col gap-6 lg:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-foreground/60 text-sm tracking-[0.08em] uppercase font-normal hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
