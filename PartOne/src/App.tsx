import { CaseStudiesSection } from "./pages/CaseStudiesSection";
import { CtaSection } from "./pages/CtaSection";
import { HomeSection } from "./pages/HomeSection";
import { ServicesSection } from "./pages/ServicesSection";

export const App = () => {
  return (
    <div className="min-h-svh bg-default font-sans text-secondary antialiased">
      <HomeSection />
      <ServicesSection />
      <CtaSection />
      <CaseStudiesSection />
    </div>
  );
};
