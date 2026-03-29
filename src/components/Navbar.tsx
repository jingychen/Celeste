import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = ["Get Started", "Developers", "Features", "Resources"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-[120px] py-5">
      {/* Logo */}
      <div className="text-foreground font-semibold text-xl tracking-tight" style={{ width: 187 }}>
        LOGOIPSUM
      </div>

      {/* Nav Links — hidden on mobile */}
      <div className="hidden md:flex items-center gap-[30px]">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="flex items-center gap-[14px] text-foreground text-sm font-medium hover:text-gold transition-colors"
          >
            {link}
            <ChevronDown size={14} />
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <Button variant="heroDark" className="text-sm px-[29px] py-[11px] h-auto">
          Join Waitlist
        </Button>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border p-6 flex flex-col gap-4 md:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="flex items-center gap-[14px] text-foreground text-sm font-medium"
            >
              {link}
              <ChevronDown size={14} />
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
