import { ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-crimson-deep/40 via-obsidian to-obsidian" />
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 size-[600px] bg-crimson/20 blur-[120px] rounded-full" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-crimson font-semibold mb-6">
                Let's build together
              </div>
              <h2 className="font-display font-extralight text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-3xl mx-auto">
                Ready to redefine what your home can do?
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-muted-foreground font-light">
                Book a complimentary consultation with our design team. No commitment — just a
                thoughtful conversation about your space.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <GlowButton to="/contact" icon={<ArrowRight className="size-4" />}>
                  Book Free Consultation
                </GlowButton>
                <GlowButton to="/projects" variant="ghost">
                  See Our Work
                </GlowButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
