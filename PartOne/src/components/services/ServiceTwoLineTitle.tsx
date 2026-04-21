type ServiceTwoLineTitleProps = {
  line1: string;
  line2: string;
  pillClassName: string;
};

export const ServiceTwoLineTitle = ({
  line1,
  line2,
  pillClassName,
}: ServiceTwoLineTitleProps) => (
  <h3
    className={`inline-block rounded-[7px] px-2.5 py-0.5 text-[22px] font-medium leading-[1.2] md:text-[26px] xl:text-[30px] ${pillClassName}`}
  >
    {line1}
    <br />
    {line2}
  </h3>
);
