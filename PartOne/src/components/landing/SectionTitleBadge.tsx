import type { ReactNode } from "react";

type SectionTitleBadgeProps = {
  id?: string;
  children: ReactNode;
  as?: "h2" | "h3";
};

const badgeClass =
  "inline-block rounded-[7px] bg-primary px-2.5 py-0 text-[30px] font-medium leading-tight text-secondary md:text-[36px] xl:text-[40px]";

/**
 * Lime “label” heading used in Services, Case Studies, etc.
 */
export const SectionTitleBadge = ({
  id,
  children,
  as: Tag = "h2",
}: SectionTitleBadgeProps) => (
  <Tag id={id} className={`shrink-0 ${badgeClass}`}>
    {children}
  </Tag>
);
