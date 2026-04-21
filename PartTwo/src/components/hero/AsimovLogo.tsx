import { cn } from "@/lib/utils";

export function AsimovSymbol({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-7 w-7 shrink-0 sm:h-8 sm:w-8", className)}>
      <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))] shadow-[0_0_16px_-4px_hsl(var(--primary)/0.45)]" />
      <div className="absolute inset-[2px] flex items-center justify-center rounded-[5px] bg-[hsl(222_35%_5%)]">
        <span className="font-mono text-[11px] font-bold text-primary sm:text-xs">{"{ }"}</span>
      </div>
    </div>
  );
}

const AsimovLogo = () => (
  <div className="flex items-center gap-2">
    <AsimovSymbol className="h-8 w-8 sm:h-8 sm:w-8" />
    <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
      asimov<span className="font-normal text-muted-foreground">.academy</span>
    </span>
  </div>
);

export default AsimovLogo;
