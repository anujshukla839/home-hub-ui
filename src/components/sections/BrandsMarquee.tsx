const brands = [
  "Schneider Electric", "ABB", "Legrand", "Lutron", "Crestron",
  "Hikvision", "CP Plus", "Honeywell", "Bosch", "Philips Hue",
  "Yale", "Samsung",
];

export function BrandsMarquee() {
  const loop = [...brands, ...brands];
  return (
    <section className="py-16 border-y border-border bg-obsidian/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8 flex items-baseline justify-between">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Trusted technology partners</div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-16 animate-marquee w-max">
          {loop.map((b, i) => (
            <div
              key={i}
              className="font-display text-2xl md:text-3xl font-light tracking-tight text-foreground/50 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
