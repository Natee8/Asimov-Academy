import amazon from "../../assets/logos/amazon.svg";
import dribbble from "../../assets/logos/Dribbble.svg";
import hubspot from "../../assets/logos/hubspoot.svg";
import netflix from "../../assets/logos/netflix.svg";
import notion from "../../assets/logos/notion.svg";
import zoom from "../../assets/logos/zoom.svg";

const stripClass =
  "flex flex-wrap items-center justify-between gap-8 border-y border-secondary py-10 md:gap-10 md:py-[70px] xl:flex-nowrap";

const logoClass = "h-8 w-auto opacity-90 grayscale md:h-9";

export const PartnersLogoStrip = () => (
  <div className={stripClass}>
    <img src={amazon} alt="" className={logoClass} />
    <img src={dribbble} alt="" className={logoClass} />
    <img src={hubspot} alt="" className={logoClass} />
    <img src={notion} alt="" className={logoClass} />
    <img src={netflix} alt="" className={logoClass} />
    <img src={zoom} alt="" className={logoClass} />
  </div>
);
