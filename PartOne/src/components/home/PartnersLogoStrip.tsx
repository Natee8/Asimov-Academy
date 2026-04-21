import amazon from "../../assets/logos/amazon.svg";
import dribbble from "../../assets/logos/Dribbble.svg";
import hubspot from "../../assets/logos/hubspoot.svg";
import netflix from "../../assets/logos/netflix.svg";
import notion from "../../assets/logos/notion.svg";
import zoom from "../../assets/logos/zoom.svg";

const stripClass =
  "flex flex-wrap items-center justify-between gap-8 py-6 md:gap-10 md:py-8 xl:flex-nowrap";

const logoClass =
  "h-12 w-[124.11px] max-w-[min(124.11px,100%)] shrink-0 object-contain grayscale";

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
