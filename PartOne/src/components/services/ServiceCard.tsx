import { LearnMoreLink } from "../landing/LearnMoreLink";
import { ServiceTwoLineTitle } from "./ServiceTwoLineTitle";
import type { ServiceItem } from "../../data/services";

const cardShell =
  "relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[30px] border border-secondary p-8 shadow-[0px_5px_0px_0px_#191A23] md:min-h-[310px] md:rounded-[45px] md:p-[50px]";

const variantShell: Record<ServiceItem["variant"], string> = {
  grey: `${cardShell} bg-[#F3F3F3] text-secondary`,
  lime: `${cardShell} bg-primary text-secondary`,
  dark: `${cardShell} bg-secondary text-white`,
};

const titlePill: Record<ServiceItem["variant"], string> = {
  grey: "bg-primary text-secondary",
  lime: "bg-white text-secondary",
  dark: "bg-primary text-secondary",
};

export const ServiceCard = ({ line1, line2, variant, image }: ServiceItem) => {
  const learnVariant = variant === "dark" ? "on-dark" : "on-light";

  return (
    <article className={variantShell[variant]}>
      <div className="relative z-1 max-w-[300px]">
        <ServiceTwoLineTitle
          line1={line1}
          line2={line2}
          pillClassName={titlePill[variant]}
        />
      </div>

      <div className="relative z-1 mt-10 md:mt-0">
        <LearnMoreLink href="#cta" variant={learnVariant} />
      </div>

      <img
        src={image}
        alt=""
        className="pointer-events-none absolute bottom-2 right-2 w-[45%] max-w-[200px] select-none object-contain md:bottom-4 md:right-4 md:max-w-[240px] xl:max-w-[280px]"
      />
    </article>
  );
};
