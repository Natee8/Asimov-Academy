import type { CaseStudy } from "../../config/caseStudies";

export type CaseStudyEntryProps = {
	study: CaseStudy;
	layout: "desktop" | "mobile";
	showLeadingDivider?: boolean;
};
