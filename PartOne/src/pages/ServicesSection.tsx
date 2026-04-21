import { PageShell } from "../components/layout/PageShell";
import { SectionIntro } from "../components/landing/SectionIntro";
import { SectionTitleBadge } from "../components/landing/SectionTitleBadge";
import { ServiceCard } from "../components/services/ServiceCard";
import { SERVICES } from "../data/services";

const servicesIntroDescription = (
  <p className="w-full max-w-[580px] text-xl font-normal leading-[1.45] text-secondary">
    At our digital marketing agency, we offer a range of services to help businesses grow their
    <br />
    online presence and reach their goals.
  </p>
);

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-default pb-20 pt-4 md:pb-[110px] md:pt-0 xl:pb-[140px]"
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
