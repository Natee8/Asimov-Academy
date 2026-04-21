import { CaseStudyEntry } from "../components/case-studies/CaseStudyEntry";
import { PageShell } from "../components/layout/PageShell";
import { SectionIntro } from "../components/landing/SectionIntro";
import { SectionTitleBadge } from "../components/landing/SectionTitleBadge";
import { CASE_STUDIES } from "../data/caseStudies";

export const CaseStudiesSection = () => {
  return (
    <section
      id="case-studies"
      className="bg-background pb-24 md:pb-[120px] xl:pb-[160px]"
      aria-labelledby="case-studies-heading"
    >
      <PageShell className="flex flex-col gap-10 md:gap-[70px] xl:gap-[80px]">
        <SectionIntro
          title={
            <SectionTitleBadge id="case-studies-heading">
              Case Studies
            </SectionTitleBadge>
          }
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />

        <div className="hidden overflow-hidden rounded-[45px] border border-secondary bg-secondary md:block">
          <div className="grid lg:grid-cols-3">
            {CASE_STUDIES.map((study, index) => (
              <CaseStudyEntry
                key={index}
                study={study}
                layout="desktop"
                showLeadingDivider={index > 0}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 md:hidden">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyEntry key={index} study={study} layout="mobile" />
          ))}
        </div>
      </PageShell>
    </section>
  );
};
