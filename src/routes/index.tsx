import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/projects-data";
import { faqs } from "@/lib/faq-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NES Automation — Luxury Smart Home Automation" },
      {
        name: "description",
        content:
          "Transform your home into an intelligent living experience. Smart home automation, lighting, security, home cinema and AV for luxury villas, apartments, hotels and offices.",
      },
      { property: "og:title", content: "NES Automation — Luxury Smart Home Automation" },
      {
        property: "og:description",
        content:
          "Luxury smart home automation, lighting, security and AV integration — quietly, beautifully in your control.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 3);
  return (
    <>
      <Hero />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <SectionHeading
              eyebrow="What we do"
              title="A complete language of smart living."
              description="From lighting scenes to full-property automation, every service is engineered for reliability and designed to disappear into the architecture."
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-crimson hover:gap-3 transition-all"
            >
              All 20 services <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <ServicesGrid limit={6} />
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <SectionHeading
              eyebrow="Featured work"
              title="Recent projects that redefine home."
            />
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-crimson hover:gap-3 transition-all">
              View portfolio <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((p, i) => (
              <Reveal key={p.slug} variant="up" delay={i * 0.08}>
                <Link
                  to="/projects"
                  className="group block relative aspect-[4/5] rounded-3xl overflow-hidden border border-border"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-crimson font-semibold">
                      {p.category} · {p.location}
                    </div>
                    <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BrandsMarquee />

      <Testimonials />

      <CtaBand />

      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <SectionHeading eyebrow="Answered" title="Common questions." align="center" />
          <div className="mt-14">
            <FAQAccordion items={faqs.slice(0, 5)} />
          </div>
        </div>
      </section>
    </>
  );
}
