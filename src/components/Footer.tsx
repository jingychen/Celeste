import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6 md:px-[120px]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-foreground font-semibold text-xl tracking-tight">
          LOGOIPSUM
        </div>

        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#exhibition" className="hover:text-gold transition-colors">Exhibition</a>
          <a href="#artists" className="hover:text-gold transition-colors">Artists</a>
          <a href="#open-call" className="hover:text-gold transition-colors">Open Call</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-gold transition-colors"
        >
          <Instagram size={22} />
        </a>
      </div>

      <div className="mt-8 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2026 Gallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
