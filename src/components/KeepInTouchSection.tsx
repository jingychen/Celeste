import { Button } from "@/components/ui/button";

const KeepInTouchSection = () => {
  return (
    <section id="keep-in-touch" className="bg-background py-24 md:py-32 px-6 md:px-[120px] text-center">
      <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">Stay Connected</p>
      <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-6">Keep in Touch</h2>
      <p className="text-foreground/60 text-[15px] max-w-lg mx-auto mb-10 leading-relaxed">
        Subscribe to our newsletter for exhibition previews, artist spotlights, and exclusive invitations.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold"
        />
        <Button variant="hero" className="text-sm px-8 py-3 h-auto whitespace-nowrap">
          Subscribe
        </Button>
      </div>
    </section>
  );
};

export default KeepInTouchSection;
