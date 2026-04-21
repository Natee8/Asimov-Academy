import type { ReactNode } from "react";

type ButtonVariant = "solid-dark" | "outline-dark" | "solid-lime";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant: ButtonVariant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-[14px] text-center font-normal leading-none transition";

const variants: Record<ButtonVariant, string> = {
  "solid-dark": `${base} bg-secondary px-8 py-5 text-xl text-white hover:bg-secondary/90`,
  "outline-dark": `${base} border border-secondary px-5 py-3 text-base text-secondary hover:bg-secondary hover:text-white md:px-[35px] md:py-5`,
  "solid-lime": `${base} bg-primary px-8 py-5 text-xl text-secondary hover:brightness-95`,
};

export const ButtonLink = ({
  href,
  children,
  variant,
  className = "",
}: ButtonLinkProps) => (
  <a href={href} className={`${variants[variant]} ${className}`.trim()}>
    {children}
  </a>
);
