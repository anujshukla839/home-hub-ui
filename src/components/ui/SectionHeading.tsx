import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal variant="fade">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-crimson font-semibold mb-4">
            <span className="h-px w-8 bg-crimson" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal variant="up" delay={0.05}>
        <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal variant="up" delay={0.15}>
          <p className="mt-5 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
