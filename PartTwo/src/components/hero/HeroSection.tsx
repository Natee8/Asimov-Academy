import { HeroActions } from './HeroActions'
import { HeroBulletList } from './HeroBulletList'
import { HeroVisual } from './HeroVisual'

const heroBullets = [
  '+40 horas de conteudo direto ao ponto;',
  'Projetos com Python + IA desde o modulo 1;',
  'Suporte da comunidade com +20.000 alunos;',
  'Certificado reconhecido pelo mercado.',
]

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(109,91,255,0.20),transparent_35%),radial-gradient(circle_at_90%_85%,rgba(37,208,171,0.15),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-details-border bg-background-soft px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-details sm:text-sm">
            Curso de Python + IA
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-details-strong sm:text-5xl lg:text-6xl">
              Aprenda Python do zero e construa projetos reais com IA
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-details sm:text-lg">
              O curso mais pratico do Brasil para quem quer entrar em tecnologia sem
              enrolacao.
            </p>
          </div>

          <HeroBulletList items={heroBullets} />
          <HeroActions
            primaryLabel="Quero comecar agora"
            secondaryLabel="Ver o que vou aprender"
          />
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
