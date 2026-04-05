import { Mail, MapPin } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", "c88ae580-ac61-450f-8272-1132a76e371c");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
                <p className="text-foreground/60 text-sm font-light">195-197 WOOD STR, LONDON</p>
                <p className="text-foreground/60 text-sm font-light">United Kingdom, E17 3NU</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={16} className="text-foreground/20 mt-1 shrink-0" />
              <p className="text-foreground/60 text-sm font-light">hello@celestegallery.uk</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-0">
          <div className="border-t border-border">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full bg-transparent py-5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none font-light tracking-wide"
            />
          </div>
          <div className="border-t border-border">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full bg-transparent py-5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none font-light tracking-wide"
            />
          </div>
          <div className="border-t border-border">
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="w-full bg-transparent py-5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none font-light tracking-wide"
            />
          </div>
          <div className="border-t border-border">
            <textarea
              rows={4}
              name="message"
              required
              placeholder="Message"
              className="w-full bg-transparent py-5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none font-light tracking-wide resize-none"
            />
          </div>
          <div className="border-t border-border pt-8">
            <button
              type="submit"
              disabled={status === "sending"}
              className="text-foreground/50 text-[13px] tracking-[0.1em] uppercase font-normal border-b border-foreground/20 pb-2 hover:text-gold hover:border-gold transition-colors duration-500 disabled:opacity-30"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-gold text-sm mt-4">Message sent successfully.</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-4">Failed to send. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
