import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-background border-t border-border py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-32">
        <div>
          <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">Contact</span>
          <h2 className="text-5xl md:text-7xl font-light text-foreground leading-[0.9] tracking-tight mt-4 mb-12">
            Get in<br /><span className="italic font-normal text-foreground/60">Touch</span>
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin size={16} className="text-foreground/20 mt-1 shrink-0" />
              <div>
                <p className="text-foreground/60 text-sm font-light">123 Gallery Lane, Chelsea</p>
                <p className="text-foreground/60 text-sm font-light">New York, NY 10011</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={16} className="text-foreground/20 mt-1 shrink-0" />
              <p className="text-foreground/60 text-sm font-light">hello@celestegallery.com</p>
            </div>
          </div>
        </div>

        <form className="space-y-0">
          <div className="border-t border-border">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent py-5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none font-light tracking-wide"
            />
          </div>
          <div className="border-t border-border">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent py-5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none font-light tracking-wide"
            />
          </div>
          <div className="border-t border-border">
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent py-5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none font-light tracking-wide"
            />
          </div>
          <div className="border-t border-border">
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full bg-transparent py-5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none font-light tracking-wide resize-none"
            />
          </div>
          <div className="border-t border-border pt-8">
            <button className="text-foreground/50 text-[13px] tracking-[0.1em] uppercase font-normal border-b border-foreground/20 pb-2 hover:text-gold hover:border-gold transition-colors duration-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
