import { LearnMoreLink } from "../landing/LearnMoreLink";
import type { CaseStudy } from "../../data/caseStudies";

type CaseStudyEntryProps = {
  study: CaseStudy;
  layout: "desktop" | "mobile";
};

export const CaseStudyEntry = ({ study, layout }: CaseStudyEntryProps) => {
  const isMobile = layout === "mobile";

  if (isMobile) {
    return (
      <article className="flex flex-col gap-8 rounded-[30px] border border-secondary bg-white p-8 shadow-[0px_5px_0px_0px_#191A23]">
        <p className="text-base font-medium leading-[1.45] text-secondary">{study.body}</p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <LearnMoreLink href="#cta" variant="on-light" className="font-medium" />
          <img
            src={study.logo}
            alt={study.logoAlt}
            width={study.logoWidth}
            height={study.logoHeight}
            className="h-8 w-auto object-contain"
          />
        </div>
      </article>
    );
  }

  return (
    <article className="flex min-h-[240px] flex-col justify-between gap-10 bg-white p-10 xl:min-h-[260px] xl:p-[50px]">
      <p className="text-base font-medium leading-[1.45] text-secondary md:text-lg">
        {study.body}
      </p>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <LearnMoreLink href="#cta" variant="on-light" className="font-medium" />
        <img
          src={study.logo}
          alt={study.logoAlt}
          width={study.logoWidth}
          height={study.logoHeight}
          className="h-8 w-auto max-w-[120px] object-contain md:h-9"
        />
      </div>
    </article>
  );
};
