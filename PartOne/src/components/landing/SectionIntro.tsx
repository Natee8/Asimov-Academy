import type { ReactNode } from "react";

type SectionIntroProps = {
  title: ReactNode;
  description: ReactNode;
};

/**
 * Section title (lime badge style) + lead paragraph, used under the hero.
 */
export const SectionIntro = ({ title, description }: SectionIntroProps) => (
  <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10 xl:gap-[40px]">
    <div className="flex shrink-0 flex-wrap items-center gap-5">{title}</div>
    <div className="min-w-0 flex-1 max-w-[min(100%,960px)] text-lg leading-[1.45] text-secondary md:text-xl">
      {description}
    </div>
  </div>
);
