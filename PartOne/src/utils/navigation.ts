export type NavLink = {
  readonly label: string;
  readonly href: string;
};

export const PRIMARY_NAV_LINKS: readonly NavLink[] = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];
