type HeroBulletListProps = {
  items: string[]
}

export function HeroBulletList({ items }: HeroBulletListProps) {
  return (
    <ul className="grid gap-3 text-sm text-details sm:grid-cols-2 sm:text-base">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-details-border/60 bg-background-card/70 p-3"
        >
          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-secondary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
