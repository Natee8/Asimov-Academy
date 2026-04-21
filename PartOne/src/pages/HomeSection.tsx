import { PartnersLogoStrip } from "../components/home/PartnersLogoStrip";
import { HeroBlock } from "../components/home/HeroBlock";
import { SiteHeader } from "../components/home/SiteHeader";
import { PageShell } from "../components/layout/PageShell";

export const HomeSection = () => {
  return (
    <header className="bg-default pb-16 pt-5 md:pb-[70px] md:pt-[40px] xl:pb-[84px]">
      <PageShell className="flex flex-col gap-16 md:gap-[70px]">
        <SiteHeader />
        <HeroBlock />
        <PartnersLogoStrip />
      </PageShell>
    </header>
  );
};
