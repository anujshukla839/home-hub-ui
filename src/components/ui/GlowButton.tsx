import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Common = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

type AsLink = Common & { to: string; href?: never; onClick?: never; type?: never };
type AsAnchor = Common & { href: string; to?: never; onClick?: never; type?: never };
type AsButton = Common & {
  to?: never;
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function GlowButton(props: AsLink | AsAnchor | AsButton) {
  const { children, variant = "primary", className, icon } = props;
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 overflow-hidden";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:shadow-[0_0_40px_oklch(0.62_0.22_27/0.55)] hover:-translate-y-0.5"
      : "border border-border bg-white/[0.02] text-foreground hover:bg-white/[0.06] hover:border-crimson/50";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 transition-transform group-hover:translate-x-1">{icon}</span>}
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </>
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={cn(base, styles, className)}>
        {content}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={cn(base, styles, className)}>
        {content}
      </a>
    );
  }
  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={cn(base, styles, className)}>
      {content}
    </button>
  );
}
