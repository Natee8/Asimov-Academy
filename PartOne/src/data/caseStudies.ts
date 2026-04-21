import amazon from "../assets/logos/amazon.svg";
import netflix from "../assets/logos/netflix.svg";
import notion from "../assets/logos/notion.svg";

export type CaseStudy = {
  body: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    body: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    logo: amazon,
    logoAlt: "Amazon",
    logoWidth: 110,
    logoHeight: 34,
  },
  {
    body: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    logo: netflix,
    logoAlt: "Netflix",
    logoWidth: 110,
    logoHeight: 30,
  },
  {
    body: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    logo: notion,
    logoAlt: "Notion",
    logoWidth: 110,
    logoHeight: 34,
  },
];
