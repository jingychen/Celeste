import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-secondary py-24 md:py-32 px-6 md:px-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-10">Get in Touch</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-gold mt-1 shrink-0" />
              <div>
                <p className="text-foreground font-medium">Visit Us</p>
                <p className="text-sm text-muted-foreground">123 Gallery Lane, Chelsea<br />New York, NY 10011</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-gold mt-1 shrink-0" />
              <div>
                <p className="text-foreground font-medium">Email</p>
                <p className="text-sm text-muted-foreground">hello@gallery.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-gold mt-1 shrink-0" />
              <div>
                <p className="text-foreground font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (212) 555-0199</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold resize-none"
          />
          <Button variant="hero" className="text-sm px-8 py-3 h-auto">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
