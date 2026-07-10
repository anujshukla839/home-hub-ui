import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project, type ProjectCategory } from "@/lib/projects-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — NES Automation Portfolio" },
      {
        name: "description",
        content:
          "A luxury portfolio of NES Automation projects — villas, apartments, hotels, cinemas, and commercial spaces.",
      },
      { property: "og:title", content: "Projects — NES Automation" },
      { property: "og:description", content: "Selected work from villas, hotels, and premium residences." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const filters: Array<ProjectCategory | "All"> = ["All", "Homes", "Villas", "Apartments", "Hotels", "Commercial", "Office"];

function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const [active, setActive] = useState<Project | null>(null);
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work."
          description="A window into recent projects across residential and commercial automation."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium border transition-all",
                filter === f
                  ? "bg-crimson text-primary-foreground border-crimson"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-crimson/40",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-14">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.button
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                onClick={() => setActive(p)}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-border text-left"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-crimson font-semibold">
                    {p.category}
                  </div>
                  <h3 className="mt-2 font-display text-xl">{p.title}</h3>
                  <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="size-3" /> {p.location}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-xl grid place-items-center p-4 md:p-10"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-border bg-card max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 size-10 rounded-full glass grid place-items-center"
              >
                <X className="size-4" />
              </button>
              <img
                src={active.image}
                alt={active.title}
                width={1280}
                height={960}
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="p-8 md:p-12">
                <div className="text-xs uppercase tracking-[0.3em] text-crimson font-semibold">
                  {active.category} · {active.location}
                </div>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-light">{active.title}</h2>
                <p className="mt-4 text-muted-foreground font-light leading-relaxed max-w-2xl">
                  {active.description}
                </p>
                <div className="mt-8">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Services delivered
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.services.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-full text-xs border border-border bg-white/[0.02]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
