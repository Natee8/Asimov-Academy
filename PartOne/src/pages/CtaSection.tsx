import { CtaStarIllustration } from "../components/cta/CtaStarIllustration";
import { PageShell } from "../components/layout/PageShell";
import { ButtonLink } from "../components/landing/ButtonLink";

export const CtaSection = () => {
  return (
    <section
      id="cta"
      className="bg-default pb-20 md:pb-[100px] xl:pb-[140px]"
      aria-labelledby="cta-heading"
    >
      <PageShell>
        <div className="flex flex-col gap-8 overflow-hidden rounded-[30px] bg-secondary px-6 py-10 text-white shadow-[0px_5px_0px_0px_#191A23] md:flex-row md:items-center md:justify-between md:gap-8 md:rounded-[45px] md:px-[60px] md:py-[60px] xl:px-[100px] xl:py-[70px]">
          <div className="flex max-w-[500px] flex-col gap-6 md:gap-8 xl:max-w-[540px]">
            <h2
              id="cta-heading"
              className="text-[26px] font-medium leading-[1.2] tracking-[-0.02em] md:text-[36px] xl:text-[40px]"
            >
              Let&apos;s make things happen
            </h2>
            <p className="text-base leading-[1.55] text-white md:text-lg xl:text-xl">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <ButtonLink href="#top" variant="solid-lime" className="w-fit">
              Request a quote
            </ButtonLink>
          </div>
          <div className="flex justify-center md:justify-end md:pr-2">
            <CtaStarIllustration />
          </div>
        </div>
      </PageShell>
    </section>
  );
};
