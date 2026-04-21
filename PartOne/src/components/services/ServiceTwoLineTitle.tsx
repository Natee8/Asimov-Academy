type ServiceTwoLineTitleProps = {
  line1: string;
  line2: string;
  /** Classes do título (ex.: text-primary, text-white) */
  className: string;
};

export const ServiceTwoLineTitle = ({
  line1,
  line2,
  className,
}: ServiceTwoLineTitleProps) => (
  <h3
    className={`text-[22px] font-medium leading-[1.2] md:text-[26px] xl:text-[30px] ${className}`}
  >
    {line1}
    <br />
    {line2}
  </h3>
);
