import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronLeft, FileCode, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EDITOR_TABS } from "@/config/editor-tabs";
import { cn } from "@/lib/utils";
import type { VsCodeHeroFrameProps } from "@/types/hero";
import AsimovLogo, { AsimovSymbol } from "./AsimovLogo";

export function VsCodeHeroFrame({ children }: VsCodeHeroFrameProps) {
  const [authExpanded, setAuthExpanded] = useState(false);
  const { pathname } = useLocation();

  const openAuth = () => setAuthExpanded(true);
  const closeAuth = () => setAuthExpanded(false);

  const breadcrumbFile =
    EDITOR_TABS.find((t) => pathname === t.to)?.label ?? "hero_landing.py";

  return (
    <div className="relative z-10 flex min-h-0 w-full min-w-0 flex-1 flex-col border-b border-border/60 bg-[hsl(222_22%_8%)]">
      <div className="sticky top-0 z-[60] flex h-10 w-full min-w-0 shrink-0 items-center gap-2 border-b border-border/80 bg-[hsl(220_16%_9%)] px-2 shadow-[0_1px_0_0_hsl(222_40%_4%/0.4)] sm:h-11 sm:gap-3 sm:px-4">
        <div className="flex shrink-0 gap-1 sm:gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[hsl(0_72%_60%)]/90 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[hsl(45_90%_55%)]/85 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[hsl(140_50%_45%)]/80 sm:h-3 sm:w-3" />
        </div>
        <p className="min-w-0 flex-1 truncate text-center font-mono text-[10px] text-muted-foreground min-[380px]:text-[11px] sm:text-xs">
          Asimov Academy — Python + IA
        </p>
      </div>

      <div className="flex min-h-0 w-full min-w-0 flex-1">
        <aside
          className={cn(
            "vscode-scrollbar-y sticky top-10 z-[55] flex max-h-[calc(100dvh-2.5rem)] shrink-0 flex-col self-start overflow-y-auto border-r border-border/80 bg-[hsl(222_20%_8%)] py-3 transition-[width] duration-200 ease-out sm:top-11 sm:max-h-[calc(100dvh-2.75rem)] sm:py-4",
            authExpanded ? "w-[min(220px,82vw)] sm:w-56" : "w-[56px] sm:w-[60px]",
          )}
          aria-label="Conta"
        >
          <div className="flex h-full flex-col gap-3 px-2 sm:px-2.5">
            {!authExpanded ? (
              <>
                <div className="flex justify-center pt-1">
                  <AsimovSymbol className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <button
                    type="button"
                    onClick={openAuth}
                    title="Log in"
                    aria-label="Abrir conta — Log in"
                    className="flex cursor-pointer items-center justify-center rounded-md border border-border/70 bg-[hsl(222_22%_10%)] p-2.5 text-muted-foreground transition-colors hover:border-primary/35 hover:bg-[hsl(222_22%_14%)] hover:text-foreground"
                  >
                    <LogIn className="h-4 w-4" strokeWidth={2} />
                  </button>
                  <button
                    type="button"
                    onClick={openAuth}
                    title="Register"
                    aria-label="Abrir conta — Register"
                    className="flex cursor-pointer items-center justify-center rounded-md border border-border/70 bg-[hsl(222_22%_10%)] p-2.5 text-muted-foreground transition-colors hover:border-primary/35 hover:bg-[hsl(222_22%_14%)] hover:text-foreground"
                  >
                    <UserPlus className="h-4 w-4" strokeWidth={2} />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex animate-fade-in flex-col gap-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-muted-foreground">Conta</span>
                  <button
                    type="button"
                    onClick={closeAuth}
                    className="cursor-pointer rounded p-1 text-muted-foreground hover:bg-white/[0.08] hover:text-foreground"
                    aria-label="Recolher painel de conta"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>
                <div className="border-b border-border/60 pb-3">
                  <div className="origin-left scale-[0.95]">
                    <AsimovLogo />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button type="button" variant="outline" size="sm" className="h-9 w-full justify-center font-mono text-xs">
                    Login
                  </Button>
                  <Button type="button" variant="hero" size="sm" className="h-9 w-full justify-center font-mono text-xs">
                    Register
                  </Button>
                </div>
              </div>
            )}
          </div>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-[hsl(222_35%_5%)]">
          <div
            data-wheel-scroll-x
            className="vscode-scrollbar-x sticky top-10 z-[52] flex min-h-[2.75rem] w-full min-w-0 shrink-0 items-stretch border-b border-border/70 bg-[hsl(222_20%_10%)] sm:top-11"
          >
            {EDITOR_TABS.map((tab) => (
              <NavLink
                key={tab.label}
                to={tab.to}
                end={tab.end}
                className={({ isActive }) =>
                  cn(
                    "relative flex shrink-0 items-center gap-1.5 border-r border-border/60 px-2.5 py-2 font-mono text-[10px] transition-colors sm:gap-2 sm:px-4 sm:py-2.5 sm:text-xs",
                    isActive
                      ? "bg-[hsl(222_35%_5%)] text-foreground after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[hsl(222_35%_5%)]"
                      : "bg-transparent text-muted-foreground hover:bg-[hsl(222_22%_12%)] hover:text-foreground/90",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <FileCode
                      className={cn("h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4", isActive ? "text-primary" : "opacity-60")}
                      aria-hidden
                    />
                    {tab.label}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="sticky top-[calc(2.5rem+2.75rem)] z-[51] flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-border/60 bg-[hsl(222_35%_5%)] px-3 py-2 font-mono text-[10px] text-muted-foreground/90 sm:top-[calc(2.75rem+2.75rem)] sm:px-4 sm:text-[11px]">
            <span className="text-muted-foreground/70">workspace</span>
            <span className="text-muted-foreground/50">›</span>
            <span>curso_python_ia</span>
            <span className="text-muted-foreground/50">›</span>
            <span className="text-foreground/90">{breadcrumbFile}</span>
          </div>

          <div className="min-h-0 flex-1">
            <div className="px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 md:px-10 md:pb-24 md:pt-12">
              {children}
            </div>
          </div>

          <div className="sticky bottom-0 z-[50] flex h-9 w-full shrink-0 items-center border-t border-border/80 bg-[hsl(222_22%_10%)] px-3 font-mono text-[10px] text-muted-foreground sm:h-10 sm:px-4 sm:text-[11px]">
            <span className="hidden truncate sm:inline">Ln 1, Col 1 · UTF-8 · Python</span>
            <span className="truncate sm:hidden">Python · UTF-8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
