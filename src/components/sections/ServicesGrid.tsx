import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {list.map((s, i) => {
        const Icon = s.icon;
        return (
          <Reveal key={s.slug} variant="up" delay={(i % 6) * 0.06}>
            <motion.article
              whileHover={{ y: -6 }}
              className="group relative h-full rounded-3xl border border-border bg-card p-8 overflow-hidden transition-colors hover:border-crimson/40"
            >
              <div className="absolute -top-24 -right-24 size-64 rounded-full bg-crimson/0 blur-3xl transition-all duration-700 group-hover:bg-crimson/20" />
              <div className="relative">
                <div className="size-14 rounded-2xl glass grid place-items-center text-crimson">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-light leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="text-xs text-foreground/70 flex items-center gap-2">
                      <span className="size-1 rounded-full bg-crimson" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-widest text-crimson">
                  <span className="opacity-80">{s.category}</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.article>
          </Reveal>
        );
      })}
    </div>
  );
}
