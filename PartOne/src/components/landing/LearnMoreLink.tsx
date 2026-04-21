import arrowDark from "../../assets/icons/redirectDark.svg";
import arrowWhite from "../../assets/icons/redirectWhite.svg";
import type { LearnMoreLinkProps } from "./types";

export type { LearnMoreArrowTone } from "./types";

export const LearnMoreLink = ({
  href,
  arrowTone,
  label = "Learn more",
  className = "",
  textClassName = "",
}: LearnMoreLinkProps) => {
  const src = arrowTone === "dark" ? arrowDark : arrowWhite;

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-[15px] text-xl font-normal leading-none ${className}`.trim()}
    >
      <img
        src={src}
        alt=""
        width={41}
        height={41}
        className="size-[41px] shrink-0 transition-transform duration-200 ease-out group-hover:scale-110 group-focus-visible:scale-110"
      />
      <span className={textClassName}>{label}</span>
    </a>
  );
};
