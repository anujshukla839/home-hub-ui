import { createFileRoute } from "@tanstack/react-router";
import sceneMovie from "@/assets/scene-movie.jpg";
import sceneMorning from "@/assets/scene-morning.jpg";
import sceneWork from "@/assets/scene-work.jpg";
import sceneNight from "@/assets/scene-night.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura — Home Automation Dashboard" },
      {
        name: "description",
        content:
          "Control lights, climate, security, and media across every room from a single calm, tactile home dashboard.",
      },
      { property: "og:title", content: "Aura — Home Automation Dashboard" },
      {
        property: "og:description",
        content:
          "A calm, tactile control surface for your smart home. Scenes, climate, lighting, security in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const scenes = [
  { title: "Movie Night", meta: "6 Devices controlled", img: sceneMovie },
  { title: "Good Morning", meta: "Scheduled 7:00 AM", img: sceneMorning },
  { title: "Work Focus", meta: "Cool lighting active", img: sceneWork },
  { title: "Night Mode", meta: "Motion sensors active", img: sceneNight },
];

function Home() {
  return (
    <div className="min-h-screen bg-obsidian text-foreground font-sans p-6 md:p-12 pb-32">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@300;500;600&display=swap"
        rel="stylesheet"
      />

      <header className="max-w-6xl mx-auto flex justify-between items-end mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-light text-foreground tracking-tight">
            Good Evening, <span className="font-medium">Alex</span>
          </h1>
          <p className="text-muted-foreground mt-2 font-light">
            Everything is secure. 4 devices active.
          </p>
        </div>
        <div className="text-right hidden md:block">
          <div className="text-2xl font-display text-foreground">72°F</div>
          <div className="text-xs uppercase tracking-widest text-lume font-medium">
            Indoor Climate
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Climate */}
        <section className="md:col-span-8 bg-graphite rounded-3xl p-8 border border-border relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  Climate Control
                </span>
                <h2 className="text-2xl font-display mt-1 text-foreground">
                  Living Room
                </h2>
              </div>
              <div className="size-12 rounded-full bg-lume/10 border border-lume/20 flex items-center justify-center">
                <div className="size-2 rounded-full bg-lume" />
              </div>
            </div>

            <div className="flex items-center gap-12 flex-wrap">
              <div className="relative">
                <div className="size-48 rounded-full border-[12px] border-obsidian flex items-center justify-center shadow-2xl">
                  <span className="text-6xl font-display font-light text-foreground">
                    22
                  </span>
                  <span className="text-2xl font-display font-light text-muted-foreground self-start mt-4">
                    °
                  </span>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-border rotate-45 pointer-events-none" />
              </div>

              <div className="flex-1 min-w-[200px] space-y-6">
                <Stat label="Humidity" value="42%" pct={42} tone="lume" />
                <Stat
                  label="Air Quality"
                  value="Excellent"
                  pct={95}
                  tone="emerald"
                />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-24 -right-24 size-64 bg-lume/5 blur-[100px] rounded-full pointer-events-none" />
        </section>

        {/* Quick actions */}
        <div className="md:col-span-4 space-y-4">
          <QuickTile
            title="Smart Lighting"
            meta="8 Lamps • 60% Brightness"
            on
          />
          <QuickTile title="Sonos Arc" meta="Playing • Night Trax" on={false} />

          <div className="bg-lume rounded-3xl p-6 flex flex-col justify-between h-[160px] text-obsidian">
            <div className="text-xs uppercase tracking-widest font-bold opacity-60">
              Security System
            </div>
            <div>
              <div className="text-2xl font-display font-semibold">
                Fully Armed
              </div>
              <div className="text-sm font-medium opacity-80">
                Last check: 2 mins ago
              </div>
            </div>
          </div>
        </div>

        {/* Scenes */}
        <section className="md:col-span-12 mt-4">
          <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-6">
            Active Scenes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scenes.map((s) => (
              <article
                key={s.title}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border group cursor-pointer"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  width={800}
                  height={608}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div className="text-sm font-medium text-white">
                    {s.title}
                  </div>
                  <div className="text-[10px] text-white/60">{s.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-graphite/80 backdrop-blur-xl border border-border rounded-full px-8 py-4 flex items-center gap-10 z-50 shadow-2xl">
        <button className="text-lume text-xs font-bold uppercase tracking-widest">
          Home
        </button>
        <button className="text-muted-foreground text-xs font-bold uppercase tracking-widest hover:text-foreground transition-colors">
          Rooms
        </button>
        <button className="text-muted-foreground text-xs font-bold uppercase tracking-widest hover:text-foreground transition-colors">
          Scenes
        </button>
        <button className="text-muted-foreground text-xs font-bold uppercase tracking-widest hover:text-foreground transition-colors">
          Stats
        </button>
      </nav>
    </div>
  );
}

function Stat({
  label,
  value,
  pct,
  tone,
}: {
  label: string;
  value: string;
  pct: number;
  tone: "lume" | "emerald";
}) {
  const bar =
    tone === "lume" ? "bg-lume" : "bg-emerald-500";
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs uppercase tracking-tighter text-muted-foreground font-medium">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-1 bg-obsidian rounded-full overflow-hidden">
        <div
          className={`h-full ${bar} rounded-full`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function QuickTile({
  title,
  meta,
  on,
}: {
  title: string;
  meta: string;
  on: boolean;
}) {
  return (
    <button className="w-full bg-graphite rounded-3xl p-6 border border-border flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors text-left">
      <div className="flex items-center gap-4">
        <div className="size-10 bg-obsidian rounded-xl flex items-center justify-center border border-border">
          <div
            className={`size-3 rounded-sm border ${
              on ? "border-lume/60" : "border-muted-foreground/50"
            }`}
          />
        </div>
        <div>
          <div className="text-sm font-medium text-foreground">{title}</div>
          <div className="text-xs text-muted-foreground">{meta}</div>
        </div>
      </div>
      <span
        className={`w-10 h-6 rounded-full p-1 flex ${
          on ? "bg-lume justify-end" : "bg-secondary justify-start"
        }`}
      >
        <span
          className={`size-4 rounded-full ${
            on ? "bg-white" : "bg-muted-foreground"
          }`}
        />
      </span>
    </button>
  );
}
