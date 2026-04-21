import { PageShell } from "../components/layout/PageShell";
import { SectionIntro } from "../components/landing/SectionIntro";
import { SectionTitleBadge } from "../components/landing/SectionTitleBadge";
import { ServiceCard } from "../components/services/ServiceCard";
import { SERVICES } from "../data/services";
import { SECTION_LEAD_PARAGRAPH_CLASS } from "../utils/sectionIntroContent";

const servicesIntroDescription = (
  <p className={SECTION_LEAD_PARAGRAPH_CLASS}>
    At our digital marketing agency, we offer a range of services to help businesses grow and
    succeed online.
    <br />
    These services include:
  </p>
);

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-background pb-20 pt-4 md:pb-[110px] md:pt-0 xl:pb-[140px]"
      aria-labelledby="services-heading"
    >
      <PageShell className="flex flex-col gap-10 md:gap-[40px] xl:gap-[80px]">
        <SectionIntro
          title={
            <SectionTitleBadge id="services-heading">Services</SectionTitleBadge>
          }
          description={servicesIntroDescription}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 xl:gap-10">
          {SERVICES.map((service) => (
            <ServiceCard key={service.line1 + service.line2} {...service} />
          ))}
        </div>
      </PageShell>
    </section>
  );
};
