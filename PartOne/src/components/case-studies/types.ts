import type { CaseStudy } from "../../data/caseStudies";

export type CaseStudyEntryProps = {
  study: CaseStudy;
  layout: "desktop" | "mobile";
  showLeadingDivider?: boolean;
};
