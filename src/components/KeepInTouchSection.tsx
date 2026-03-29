const KeepInTouchSection = () => {
  return (
    <section id="keep-in-touch" className="bg-secondary/30 border-t border-b border-border py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 items-end">
        <div>
          <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">Newsletter</span>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-foreground leading-[0.9] tracking-tight mt-4">
            Keep in<br /><span className="italic font-normal text-foreground/60">Touch</span>
          </h2>
        </div>

        <div>
          <p className="text-foreground/35 text-[15px] font-light leading-[1.8] mb-8">
            Exhibition previews, artist spotlights, and exclusive invitations — delivered to your inbox.
          </p>
          <div className="border-t border-border pt-6">
            <div className="flex items-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/20 focus:outline-none font-light tracking-wide py-2"
              />
              <button className="text-gold text-[13px] tracking-[0.1em] uppercase font-normal hover:text-foreground transition-colors duration-500 shrink-0">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepInTouchSection;
