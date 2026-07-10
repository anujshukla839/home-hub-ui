import { Award, Sparkles, Headphones, Wrench, ShieldCheck, Leaf } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  { icon: Award, title: "Certified Engineers", desc: "KNX and manufacturer-certified engineering teams." },
  { icon: Sparkles, title: "Premium Brands", desc: "Only globally recognised, tier-one components." },
  { icon: Headphones, title: "After-Sales Support", desc: "Priority support with dedicated relationship managers." },
  { icon: Wrench, title: "Professional Installation", desc: "Discreet, precise installation with civil coordination." },
  { icon: ShieldCheck, title: "Warranty & Assurance", desc: "Comprehensive warranty and multi-year AMC options." },
  { icon: Leaf, title: "Energy Efficient", desc: "Automation that quietly cuts energy consumption." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Why NES"
          title="Six reasons the country's finest homes choose us."
          description="Beyond installation. NES delivers engineering excellence, discreet service, and long-term partnership."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} variant="up" delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-3xl border border-border bg-gradient-to-b from-card to-background p-8 hover:border-crimson/40 transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="size-12 shrink-0 rounded-2xl bg-crimson/10 border border-crimson/20 grid place-items-center text-crimson group-hover:bg-crimson group-hover:text-primary-foreground transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium">{f.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground font-light leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
