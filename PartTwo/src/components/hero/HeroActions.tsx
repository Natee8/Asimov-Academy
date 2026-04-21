type HeroActionsProps = {
  primaryLabel: string
  secondaryLabel: string
}

const commonButton =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition duration-200 sm:text-base"

export function HeroActions({ primaryLabel, secondaryLabel }: HeroActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        className={`${commonButton} bg-primary text-white shadow-lg shadow-primary/35 hover:bg-primary-light`}
      >
        {primaryLabel}
      </button>
      <button
        type="button"
        className={`${commonButton} border border-details-border bg-background-card text-details-strong hover:border-primary/60 hover:text-white`}
      >
        {secondaryLabel}
      </button>
    </div>
  )
}
