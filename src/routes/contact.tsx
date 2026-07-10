import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/services-data";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NES Automation — Free Consultation" },
      {
        name: "description",
        content:
          "Book a free consultation with NES Automation. Reach us by phone, WhatsApp, or the contact form for smart home projects.",
      },
      { property: "og:title", content: "Contact NES Automation" },
      { property: "og:description", content: "Book your complimentary smart home consultation with our design team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(6, "Please enter a valid phone").max(20),
  email: z.string().trim().email("Please enter a valid email").max(160),
  city: z.string().trim().min(2, "City is required").max(80),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().min(10, "Please share a few details (min 10 chars)").max(1000),
});
type FormData = z.infer<typeof schema>;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's start a conversation."
          description="Tell us about your project. We'll respond within one business day with a proposed consultation time."
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-16 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Full Name" error={errors.name?.message}>
              <input {...register("name")} className={inputCls} placeholder="Aditya Kapoor" maxLength={80} />
            </Field>
            <Field label="Phone" error={errors.phone?.message}>
              <input {...register("phone")} className={inputCls} placeholder="+91 98765 43210" maxLength={20} />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input type="email" {...register("email")} className={inputCls} placeholder="you@example.com" maxLength={160} />
            </Field>
            <Field label="City" error={errors.city?.message}>
              <input {...register("city")} className={inputCls} placeholder="Mumbai" maxLength={80} />
            </Field>
            <Field label="Interested In" error={errors.service?.message} className="md:col-span-2">
              <select {...register("service")} className={cn(inputCls, "appearance-none")} defaultValue="">
                <option value="" disabled>Choose a service…</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
              </select>
            </Field>
            <Field label="Message" error={errors.message?.message} className="md:col-span-2">
              <textarea
                {...register("message")}
                rows={5}
                className={cn(inputCls, "resize-none")}
                placeholder="Tell us about your space, goals, and timeline…"
                maxLength={1000}
              />
            </Field>
            <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted-foreground max-w-sm">
                By submitting, you agree to be contacted by NES Automation regarding your enquiry.
              </p>
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:shadow-[0_0_40px_oklch(0.62_0.22_27/0.55)] disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="size-4" /> Message sent
                  </>
                ) : (
                  <>
                    {isSubmitting ? "Sending…" : "Send Message"} <Send className="size-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <aside className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-crimson font-semibold mb-6">Reach us</div>
            <ul className="space-y-5 text-sm">
              <InfoRow icon={Phone} label="Phone" value={site.phone} href={site.phoneHref} />
              <InfoRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <InfoRow icon={MapPin} label="Studio" value={site.address} />
              <InfoRow icon={Clock} label="Hours" value={site.hours} />
            </ul>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border h-72">
            <iframe
              title="NES Automation Location"
              src="https://www.google.com/maps?q=Bandra+West+Mumbai&output=embed"
              className="w-full h-full grayscale-[0.6] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-crimson focus:ring-2 focus:ring-crimson/20 transition";

function Field({
  label,
  children,
  error,
  className,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="size-10 rounded-xl bg-crimson/10 border border-crimson/20 grid place-items-center text-crimson shrink-0">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-foreground">{value}</div>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-start gap-4 hover:opacity-80 transition">
          {content}
        </a>
      ) : (
        <div className="flex items-start gap-4">{content}</div>
      )}
    </li>
  );
}
