import arrowDark from "../../assets/icons/redirectDark.svg";
import arrowWhite from "../../assets/icons/redirectWhite.svg";

export type LearnMoreArrowTone = "dark" | "white";

type LearnMoreLinkProps = {
  href: string;
  /** Ícone redirect: escuro em cards default/primary, branco em card secondary */
  arrowTone: LearnMoreArrowTone;
  label?: string;
  className?: string;
  textClassName?: string;
};

/**
 * Ícone 41×41 sem círculo extra; texto sem sublinhado. Ordem: ícone → label.
 */
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
      className={`inline-flex items-center gap-[15px] text-xl font-normal leading-none ${className}`.trim()}
    >
      <img src={src} alt="" width={41} height={41} className="size-[41px] shrink-0" />
      <span className={textClassName}>{label}</span>
    </a>
  );
};
