import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NES Automation" },
      {
        name: "description",
        content:
          "Complete smart home automation services: lighting, KNX, security, CCTV, home cinema, multi-room audio, and villa & hotel automation.",
      },
      { property: "og:title", content: "Services — NES Automation" },
      { property: "og:description", content: "Every smart home service NES delivers, in one place." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="What we deliver"
          title="A complete suite of smart home services."
          description="Twenty specialised services across automation, security, AV, and vertical solutions — designed and installed by certified engineers."
        />
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-16">
        <ServicesGrid />
      </section>
      <CtaBand />
    </div>
  );
}
