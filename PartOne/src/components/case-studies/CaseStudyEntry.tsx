import { LearnMoreLink } from "../landing/LearnMoreLink";
import type { CaseStudyEntryProps } from "./types";

export const CaseStudyEntry = ({
  study,
  layout,
  showLeadingDivider = false,
}: CaseStudyEntryProps) => {
  const isMobile = layout === "mobile";

  if (isMobile) {
    return (
      <article className="flex flex-col gap-8 rounded-[30px] border border-secondary bg-secondary p-8 shadow-[0px_5px_0px_0px_#191A23]">
        <p className="text-base font-medium leading-[1.45] text-white">{study.body}</p>
        <LearnMoreLink
          href="#cta"
          arrowTone="dark"
          textClassName="text-white"
          className="font-medium"
        />
      </article>
    );
  }

  return (
    <article
      className={`relative flex min-h-[240px] flex-col justify-between gap-10 p-10 text-white xl:min-h-[260px] xl:p-[50px] ${
        showLeadingDivider
          ? "lg:before:pointer-events-none lg:before:absolute lg:before:left-0 lg:before:top-10 lg:before:bottom-10 lg:before:w-px lg:before:bg-background"
          : ""
      }`}
    >
      <p className="text-base font-medium leading-[1.45] md:text-lg">{study.body}</p>
      <LearnMoreLink
        href="#cta"
        arrowTone="dark"
        textClassName="text-white"
        className="font-medium"
      />
    </article>
  );
};
