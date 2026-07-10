import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Aditya Kapoor",
    role: "Homeowner, Skyline Penthouse",
    location: "Mumbai",
    quote:
      "NES understood exactly what I wanted — invisible technology that behaves intelligently. Every scene, every touch is exactly right.",
    initials: "AK",
  },
  {
    name: "Reema & Vikram Shah",
    role: "Villa Owners",
    location: "Alibaug",
    quote:
      "From landscape lighting to the private cinema, the entire villa feels alive without a single visible switch. Extraordinary work.",
    initials: "RS",
  },
  {
    name: "Ar. Nisha Menon",
    role: "Principal Architect",
    location: "Bangalore",
    quote:
      "The most professional AV integrator I've worked with. Clean cabling, clean handover, clean commissioning. Every time.",
    initials: "NM",
  },
  {
    name: "The Monarch Hotel",
    role: "General Manager",
    location: "New Delhi",
    quote:
      "220 keys, on time, on budget. NES delivered a guest experience our brand had been chasing for years.",
    initials: "MH",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <SectionHeading
          eyebrow="Client voices"
          title="Trusted by homeowners, architects, and hospitality leaders."
          align="center"
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-3xl glass p-10 md:p-14">
            <Quote className="absolute top-8 left-8 size-10 text-crimson/30" />
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-crimson text-crimson" />
                  ))}
                </div>
                <blockquote className="font-display text-2xl md:text-3xl font-light leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <div className="mt-10 flex items-center justify-center gap-4">
                  <div className="size-14 rounded-full bg-gradient-to-br from-crimson to-crimson-deep grid place-items-center font-display text-lg">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role} · {t.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="size-11 rounded-full glass grid place-items-center hover:border-crimson/50 transition"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-10 bg-crimson" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="size-11 rounded-full glass grid place-items-center hover:border-crimson/50 transition"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
