export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-8 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-secondary/25 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-details-border/80 bg-background-card/80 p-6 backdrop-blur">
        <div className="mb-6 flex items-center justify-between text-xs text-details">
          <span className="rounded-full border border-details-border px-3 py-1">
            Python + IA
          </span>
          <span>Metodologia Asimov</span>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-primary/35 bg-primary/10 p-4">
            <p className="text-sm text-details-strong">
              Aula 01: Fundamentos de Python aplicados em problemas reais.
            </p>
          </div>
          <div className="rounded-2xl border border-secondary/35 bg-secondary/10 p-4">
            <p className="text-sm text-details-strong">
              Projeto guiado: Automatize tarefas e acelere com IA.
            </p>
          </div>
          <div className="rounded-2xl border border-details-border bg-background-soft p-4">
            <p className="text-sm text-details">
              Comunidade ativa, desafios práticos e feedback para evoluir sem travar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
