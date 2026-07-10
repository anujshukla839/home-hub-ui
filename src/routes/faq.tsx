import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { faqs } from "@/lib/faq-data";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — NES Automation" },
      {
        name: "description",
        content:
          "Common questions about smart home automation, timelines, warranty, brands, and pricing at NES Automation.",
      },
      { property: "og:title", content: "FAQ — NES Automation" },
      { property: "og:description", content: "Everything you'd want to know before your consultation." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="pt-32 pb-10">
      <section className="max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Answered"
          title="Frequently asked questions."
          description="Answers to the questions we hear most often. Anything else? Reach out — we're always happy to talk."
        />
        <div className="mt-14">
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
