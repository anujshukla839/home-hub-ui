import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Shield, Music4, Home, Camera, Thermometer } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import { GlowButton } from "@/components/ui/GlowButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Corporate Clients" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 24, suffix: "×7", label: "Support" },
];

const floatIcons = [
  { icon: Lightbulb, top: "14%", left: "8%", delay: 0 },
  { icon: Shield, top: "22%", right: "10%", delay: 0.6 },
  { icon: Music4, bottom: "28%", left: "6%", delay: 1.2 },
  { icon: Camera, top: "44%", right: "6%", delay: 0.3 },
  { icon: Home, bottom: "22%", right: "14%", delay: 0.9 },
  { icon: Thermometer, top: "60%", left: "14%", delay: 1.5 },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury smart home living room"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* Floating device chips */}
      {floatIcons.map(({ icon: Icon, delay, ...pos }, i) => (
        <motion.div
          key={i}
          className="hidden md:grid absolute size-12 rounded-2xl glass place-items-center text-crimson animate-floaty"
          style={{ ...pos, animationDelay: `${delay}s` }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + delay * 0.2, duration: 0.8 }}
        >
          <Icon className="size-5" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-[calc(100svh-8rem)] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 self-start rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-crimson font-semibold"
        >
          <span className="size-1.5 rounded-full bg-crimson animate-pulse" />
          Luxury Smart Home Integrators
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-6 font-display font-extralight text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] max-w-5xl"
        >
          Transform your home into an{" "}
          <span className="italic font-light text-gradient-crimson">intelligent</span> living experience.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
        >
          Smart home automation designed for modern luxury living. Lighting, climate, security and
          entertainment — quietly, beautifully in your control.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <GlowButton to="/contact" icon={<ArrowRight className="size-4" />}>
            Book Free Consultation
          </GlowButton>
          <GlowButton to="/services" variant="ghost">
            Explore Services
          </GlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden glass"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-background/40 p-6 md:p-8">
              <div className="font-display text-4xl md:text-5xl font-light tracking-tight">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
