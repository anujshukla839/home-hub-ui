import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands — NES Automation Partners" },
      {
        name: "description",
        content:
          "NES Automation is a certified partner for Schneider Electric, ABB, Legrand, Lutron, Crestron, Hikvision, Honeywell and more.",
      },
      { property: "og:title", content: "Brands — NES Automation" },
      { property: "og:description", content: "The premium brands we're proudly certified to install and support." },
      { property: "og:url", content: "/brands" },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: BrandsPage,
});

const brands = [
  "Schneider Electric", "ABB", "Legrand", "Lutron", "Crestron",
  "Hikvision", "CP Plus", "Honeywell", "Bosch", "Philips Hue",
  "Yale", "Samsung",
];

function BrandsPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Technology partners"
          title="Only the finest, most reliable brands."
          description="We install and support what we would live with. Every partnership is chosen for engineering quality, lifecycle support, and long-term reliability."
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {brands.map((b, i) => (
          <Reveal key={b} variant="scale" delay={(i % 4) * 0.05}>
            <div className="aspect-video rounded-3xl border border-border bg-card grid place-items-center hover:border-crimson/40 transition-colors group">
              <span className="font-display text-xl md:text-2xl font-light text-foreground/70 group-hover:text-foreground transition-colors text-center px-4">
                {b}
              </span>
            </div>
          </Reveal>
        ))}
      </section>

      <div className="mt-24">
        <BrandsMarquee />
      </div>
    </div>
  );
}
