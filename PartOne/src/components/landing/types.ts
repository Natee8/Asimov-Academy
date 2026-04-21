import type { ReactNode } from "react";

export type ButtonVariant = "solid-dark" | "outline-dark" | "solid-lime";

export type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant: ButtonVariant;
  className?: string;
};

export type LearnMoreArrowTone = "dark" | "white";

export type LearnMoreLinkProps = {
  href: string;
  arrowTone: LearnMoreArrowTone;
  label?: string;
  className?: string;
  textClassName?: string;
};

export type SectionIntroProps = {
  title: ReactNode;
  description: ReactNode;
};

export type SectionTitleBadgeProps = {
  id?: string;
  children: ReactNode;
  as?: "h2" | "h3";
};
