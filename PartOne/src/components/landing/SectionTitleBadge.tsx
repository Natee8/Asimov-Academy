import type { SectionTitleBadgeProps } from "./types";

const badgeClass =
  "inline-block rounded-[7px] bg-primary px-2.5 py-0 text-[30px] font-medium leading-tight text-secondary md:text-[36px] xl:text-[40px]";

export const SectionTitleBadge = ({
  id,
  children,
  as: Tag = "h2",
}: SectionTitleBadgeProps) => (
  <Tag id={id} className={`shrink-0 ${badgeClass}`}>
    {children}
  </Tag>
);
