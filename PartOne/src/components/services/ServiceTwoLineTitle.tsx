import type { ServiceTitleHighlight } from "../../data/services";
import type { ServiceTwoLineTitleProps } from "./types";

const highlightShell: Record<ServiceTitleHighlight, string> = {
  primary: "bg-primary text-secondary",
  white: "bg-background text-secondary",
};

const lineClass =
  "inline-block w-fit max-w-full rounded-[7px] px-2.5 py-0.5 text-[22px] font-medium leading-[1.2] md:text-[26px] xl:text-[30px]";

export const ServiceTwoLineTitle = ({
  line1,
  line2,
  highlight,
}: ServiceTwoLineTitleProps) => {
  const hi = highlightShell[highlight];
  return (
    <h3 className="flex flex-col items-start">
      <span className={`${lineClass} ${hi}`}>{line1}</span>
      <span className={`${lineClass} ${hi}`}>{line2}</span>
    </h3>
  );
};
