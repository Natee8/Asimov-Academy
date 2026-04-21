import heroIllustration from "../../assets/home/Home.svg";
import { ButtonLink } from "../landing/ButtonLink";

export const HeroBlock = () => (
  <div
    id="top"
    className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,601px)] lg:gap-[100px]"
  >
    <div className="flex max-w-[531px] flex-col gap-8 md:gap-[35px]">
      <h1 className="text-[43px] font-medium leading-[1.15] tracking-[-0.02em] text-secondary md:text-[50px] xl:text-[60px]">
        Navigating the digital landscape{" "}
        <span className="inline-block rounded-[7px] bg-primary px-2.5 align-middle xl:px-3">
          for success
        </span>
      </h1>
      <p className="max-w-[498px] text-lg font-normal leading-[1.55] text-secondary md:text-xl">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <ButtonLink href="#cta" variant="solid-dark" className="w-fit">
        Book a consultation
      </ButtonLink>
    </div>

    <div className="relative flex justify-center lg:justify-end">
      <img
        src={heroIllustration}
        alt=""
        width={601}
        height={515}
        className="h-auto w-full max-w-[520px] object-contain md:max-w-[601px]"
        loading="eager"
      />
    </div>
  </div>
);
