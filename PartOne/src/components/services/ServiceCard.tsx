import { LearnMoreLink } from "../landing/LearnMoreLink";
import { ServiceTwoLineTitle } from "./ServiceTwoLineTitle";
import type { ServiceItem } from "../../data/services";

const cardShell =
  "relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[30px] border border-secondary p-8 shadow-[0px_5px_0px_0px_#191A23] md:min-h-[310px] md:rounded-[45px] md:p-[50px]";

const surfaceShell: Record<ServiceItem["surface"], string> = {
  default: `${cardShell} bg-default text-secondary`,
  primary: `${cardShell} bg-primary text-secondary`,
  secondary: `${cardShell} bg-secondary text-white`,
};

const titleClass: Record<ServiceItem["titleTone"], string> = {
  primary: "text-primary",
  white: "text-white",
};

export const ServiceCard = ({ line1, line2, surface, titleTone, image }: ServiceItem) => {
  const arrowTone = surface === "secondary" ? "white" : "dark";
  const learnTextClass =
    surface === "secondary" ? "text-white" : "text-secondary";

  return (
    <article className={surfaceShell[surface]}>
      <div className="relative z-1 max-w-[300px]">
        <ServiceTwoLineTitle
          line1={line1}
          line2={line2}
          className={titleClass[titleTone]}
        />
      </div>

      <div className="relative z-1 mt-10 md:mt-0">
        <LearnMoreLink
          href="#cta"
          arrowTone={arrowTone}
          textClassName={learnTextClass}
        />
      </div>

      <img
        src={image}
        alt=""
        className="pointer-events-none absolute bottom-3 right-3 h-[147.62px] w-[210px] max-w-[min(210px,52%)] select-none object-contain md:bottom-5 md:right-5"
      />
    </article>
  );
};
