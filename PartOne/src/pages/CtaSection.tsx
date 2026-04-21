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
        <div className="relative overflow-visible rounded-[30px] border border-secondary bg-default px-6 py-10 shadow-[0px_5px_0px_0px_#191A23] md:rounded-[45px] md:px-[60px] md:py-[60px] xl:px-[100px] xl:py-[70px]">
          <div className="relative z-10 flex max-w-[540px] flex-col gap-6 md:gap-8">
            <h2
              id="cta-heading"
              className="text-[26px] font-medium leading-[1.2] tracking-[-0.02em] text-secondary md:text-[36px] xl:text-[40px]"
            >
              Let&apos;s make things happen
            </h2>
            <p className="text-base leading-[1.55] text-secondary md:text-lg xl:text-xl">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <ButtonLink href="#top" variant="solid-dark" className="w-fit">
              Get your free proposal
            </ButtonLink>
          </div>
          <div
            className="pointer-events-none absolute right-0 top-1/2 z-0 hidden -translate-y-1/2 translate-x-[6%] md:block"
            aria-hidden
          >
            <CtaStarIllustration className="h-[394px] w-[494px] max-w-none shrink-0 text-primary" />
          </div>
          <div className="mt-8 flex justify-center md:hidden" aria-hidden>
            <CtaStarIllustration className="mx-auto h-[220px] w-[280px] max-w-full text-primary" />
          </div>
        </div>
      </PageShell>
    </section>
  );
};
