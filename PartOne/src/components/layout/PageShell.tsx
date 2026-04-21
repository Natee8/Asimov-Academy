import { PAGE_SHELL_CLASS } from "../../utils/layout";
import type { PageShellProps } from "./types";

export const PageShell = ({ children, className = "" }: PageShellProps) => (
  <div className={[PAGE_SHELL_CLASS, className].filter(Boolean).join(" ")}>
    {children}
  </div>
);
