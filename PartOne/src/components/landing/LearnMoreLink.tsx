import arrowDark from "../../assets/icons/redirectDark.svg";
import arrowLight from "../../assets/icons/redirectWhite.svg";

type LearnMoreVariant = "on-light" | "on-dark";

type LearnMoreLinkProps = {
  href: string;
  variant: LearnMoreVariant;
  className?: string;
};

export const LearnMoreLink = ({
  href,
  variant,
  className = "",
}: LearnMoreLinkProps) => {
  const isDark = variant === "on-dark";

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-[15px] text-xl leading-none ${
        isDark ? "text-white" : "text-secondary"
      } font-normal ${className}`.trim()}
    >
      <span
        className={isDark ? "border-b border-white" : "border-b border-secondary"}
      >
        Learn more
      </span>
      <span
        className={`flex size-10 items-center justify-center rounded-full border md:size-[41px] ${
          isDark ? "border-white" : "border-secondary bg-default"
        }`}
      >
        <img
          src={isDark ? arrowLight : arrowDark}
          alt=""
          width={18}
          height={18}
          className="size-[18px] md:size-5"
        />
      </span>
    </a>
  );
};
