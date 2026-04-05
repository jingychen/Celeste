import { useState, FormEvent } from "react";

const KeepInTouchSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", "c88ae580-ac61-450f-8272-1132a76e371c");
    data.append("subject", "New Newsletter Subscription — Celeste Gallery");

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
          <form onSubmit={handleSubmit} className="border-t border-border pt-6">
            <div className="flex items-center gap-4">
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/20 focus:outline-none font-light tracking-wide py-2"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="text-gold text-[13px] tracking-[0.1em] uppercase font-normal hover:text-foreground transition-colors duration-500 shrink-0 disabled:opacity-30"
              >
                {status === "sending" ? "Sending..." : "Subscribe →"}
              </button>
            </div>
            {status === "sent" && (
              <p className="text-gold text-sm mt-4">Subscribed successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-4">Failed. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default KeepInTouchSection;
