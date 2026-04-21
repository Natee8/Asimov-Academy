import type { ReactNode } from "react";
import { PAGE_SHELL_CLASS } from "../../utils/layout";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export const PageShell = ({ children, className = "" }: PageShellProps) => (
  <div className={[PAGE_SHELL_CLASS, className].filter(Boolean).join(" ")}>
    {children}
  </div>
);
