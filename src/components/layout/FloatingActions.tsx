import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed z-40 bottom-6 right-6 flex flex-col gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="size-11 rounded-full glass grid place-items-center text-foreground hover:border-crimson/60 transition"
            aria-label="Scroll to top"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="#"
        className="size-11 rounded-full glass grid place-items-center text-foreground hover:border-crimson/60 transition"
        aria-label="Live chat"
      >
        <MessageCircle className="size-4" />
      </a>

      <a
        href={site.phoneHref}
        className="size-11 rounded-full bg-onyx border border-border grid place-items-center text-foreground hover:border-crimson/60 transition"
        aria-label="Call now"
      >
        <Phone className="size-4" />
      </a>

      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="size-14 rounded-full bg-[#25D366] text-black grid place-items-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="size-6" />
      </a>
    </div>
  );
}
