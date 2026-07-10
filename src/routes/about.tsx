import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, HeartHandshake, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NES Automation — Our Story & Mission" },
      {
        name: "description",
        content:
          "A decade of engineering luxury smart homes. Meet the team, mission, and values behind NES Automation.",
      },
      { property: "og:title", content: "About NES Automation" },
      { property: "og:description", content: "The story, mission, and craft behind NES Automation." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Mission", body: "To make intelligent living effortless, beautiful, and quietly reliable in every home we touch." },
  { icon: Eye, title: "Vision", body: "To be the most trusted name in luxury home automation across South Asia and the Middle East." },
  { icon: HeartHandshake, title: "Values", body: "Craft, discretion, and long-term partnership. We build systems we would live with ourselves." },
];

const timeline = [
  { year: "2014", title: "Founded", body: "NES Automation begins as a boutique lighting integrator in Mumbai." },
  { year: "2017", title: "KNX Certified", body: "Becomes an accredited KNX partner with a dedicated engineering wing." },
  { year: "2019", title: "First Hotel", body: "Delivers first full-scale hotel automation across 180 keys." },
  { year: "2022", title: "500th Home", body: "Crosses 500 delivered residential and commercial projects." },
  { year: "2026", title: "Today", body: "A cross-disciplinary team of 60+ designers, engineers and technicians." },
];

const certs = ["KNX Certified", "Lutron Elite Dealer", "Crestron Authorized", "ISO 9001:2015", "Best Integrator 2024"];

function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="About NES"
          title="A decade of engineering intelligent luxury."
          description="Founded in 2014, NES Automation was born from a simple belief — that great technology should feel invisible, effortless, and beautiful. Today we're a cross-disciplinary team of designers, engineers, and installers building the country's most refined smart homes."
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-24 grid md:grid-cols-3 gap-5">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <Reveal key={v.title} variant="up" delay={i * 0.08}>
              <div className="rounded-3xl border border-border bg-card p-10 h-full">
                <div className="size-12 rounded-2xl bg-crimson/10 border border-crimson/20 grid place-items-center text-crimson">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-light">{v.title}</h3>
                <p className="mt-3 text-muted-foreground font-light leading-relaxed">{v.body}</p>
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-10 mt-32">
        <SectionHeading eyebrow="Our journey" title="Ten years, quietly building." align="center" />
        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-crimson/40 to-transparent" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <Reveal key={t.year} variant="up" delay={i * 0.05}>
                <div className={`relative flex md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 size-3 rounded-full bg-crimson ring-4 ring-background" />
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-10">
                    <div className="rounded-3xl border border-border bg-card p-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-crimson font-semibold">{t.year}</div>
                      <h3 className="mt-2 font-display text-xl font-medium">{t.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground font-light">{t.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-32">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border p-12 md:p-20">
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-graphite to-obsidian" />
            <div className="absolute -top-32 -right-32 size-[500px] bg-crimson/15 blur-[120px] rounded-full" />
            <div className="relative grid md:grid-cols-3 gap-10 items-center">
              <div className="size-40 md:size-52 rounded-full bg-gradient-to-br from-crimson to-crimson-deep grid place-items-center font-display text-5xl font-light mx-auto md:mx-0">
                NR
              </div>
              <div className="md:col-span-2">
                <div className="text-xs uppercase tracking-[0.3em] text-crimson font-semibold">
                  Founder's message
                </div>
                <blockquote className="mt-4 font-display text-2xl md:text-3xl font-light leading-relaxed">
                  "We didn't set out to sell technology. We set out to give people time — time back in
                  their day, and time to enjoy the homes they've built."
                </blockquote>
                <div className="mt-6 text-sm text-muted-foreground">
                  <div className="font-medium text-foreground">Neil Rao</div>
                  Founder & Principal Engineer, NES Automation
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-32">
        <SectionHeading eyebrow="Recognition" title="Awards & certifications." align="center" />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4">
          {certs.map((c, i) => (
            <Reveal key={c} variant="scale" delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-card/60 p-6 text-center h-full flex flex-col items-center justify-center gap-3">
                <Award className="size-6 text-crimson" />
                <div className="text-sm font-medium">{c}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
