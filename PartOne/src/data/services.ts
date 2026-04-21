export type ServiceCardVariant = "grey" | "lime" | "dark";

export type ServiceItem = {
  line1: string;
  line2: string;
  description: string;
  variant: ServiceCardVariant;
  showIllustration?: boolean;
};

export const SERVICES: readonly ServiceItem[] = [
  {
    line1: "Search engine",
    line2: "optimization",
    description:
      "Improve visibility and organic traffic with technical and content SEO tailored to your goals.",
    variant: "grey",
    showIllustration: true,
  },
  {
    line1: "Pay-per-click",
    line2: "advertising",
    description:
      "Reach high-intent audiences with structured campaigns, testing, and continuous optimization.",
    variant: "dark",
  },
  {
    line1: "Social Media",
    line2: "Marketing",
    description:
      "Grow communities and engagement with creative calendars, paid boosts, and reporting.",
    variant: "grey",
  },
  {
    line1: "Email",
    line2: "Marketing",
    description:
      "Nurture leads and customers with segmentation, automation, and measurable lifecycle flows.",
    variant: "lime",
  },
  {
    line1: "Content",
    line2: "Creation",
    description:
      "Ship landing pages, articles, and creative assets that match your brand voice and funnel.",
    variant: "grey",
  },
  {
    line1: "Analytics and",
    line2: "Tracking",
    description:
      "Instrument your stack, define KPIs, and build dashboards your team can trust week over week.",
    variant: "lime",
  },
];
