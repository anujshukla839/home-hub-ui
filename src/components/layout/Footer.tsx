import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { navLinks, site } from "@/lib/site";

const services = [
  "Smart Home Automation",
  "Smart Lighting",
  "Home Security & CCTV",
  "Home Cinema",
  "Multi-Room Audio",
  "Villa & Hotel Automation",
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-obsidian">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img src={site.logo} alt="NES Automation" width={64} height={48} className="h-10 w-auto object-contain" />
            <div className="leading-tight">
              <div className="font-display text-xl">NES Automation</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-crimson font-semibold mt-0.5">
                Innovation · Redefined
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
            Luxury smart home automation, lighting, security, and AV integration — crafted for
            discerning homes, hotels, and enterprises.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, href: site.socials.instagram },
              { icon: Linkedin, href: site.socials.linkedin },
              { icon: Youtube, href: site.socials.youtube },
              { icon: Facebook, href: site.socials.facebook },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-full border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-crimson/60 hover:bg-crimson/10 transition-all"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-foreground/80 hover:text-crimson transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-5">Services</div>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s} className="text-foreground/80 hover:text-crimson transition-colors cursor-pointer">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-5">Newsletter</div>
          <p className="text-sm text-muted-foreground font-light mb-4">
            Get quiet updates on new projects and product releases.
          </p>
          <form
            className="flex glass rounded-full p-1"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground"
              maxLength={120}
            />
            <button className="rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-widest px-5 py-2.5 hover:opacity-90 transition">
              Join
            </button>
          </form>

          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            <a href={site.phoneHref} className="flex items-center gap-3 hover:text-foreground transition">
              <Phone className="size-4 text-crimson" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-foreground transition">
              <Mail className="size-4 text-crimson" />
              {site.email}
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="size-4 text-crimson mt-0.5" />
              <span>{site.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} NES Automation. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
