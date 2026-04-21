import { Button } from "@/components/ui/button";
import { ArrowRight, Check, PlayCircle } from "lucide-react";
import { useCallback, useEffect, useRef, type PointerEvent } from "react";
import CodePreview from "./CodePreview";
import {
  CURSOR_SRC_DEFAULT,
  CURSOR_SRC_POINTER,
  DISPLAY_PX,
  cursorHotspotPx,
} from "./PixelCursor";
import { VsCodeHeroFrame } from "./VsCodeHeroFrame";

const bullets = [
  "+40 horas de conteúdo direto ao ponto",
  "Projetos com Python + IA desde o módulo 1",
  "Suporte da comunidade com +20.000 alunos",
  "Certificado reconhecido pelo mercado",
];

const logos = [
  "Itaú",
  "Ambev",
  "Vale",
  "Petrobras",
  "Magalu",
  "Bradesco",
  "Stone",
  "iFood",
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cursorWrapRef = useRef<HTMLDivElement>(null);
  const cursorImgRef = useRef<HTMLImageElement>(null);
  const reduceMotionRef = useRef(false);
  const rafRef = useRef<number>(0);
  const pendingRef = useRef<{ clientX: number; clientY: number } | null>(null);
  const lastPointerRef = useRef<boolean | null>(null);
  const pressedRef = useRef(false);
  const lastHitRef = useRef({ x: 0, y: 0, pointer: false, t: 0 });
  const lastClientRef = useRef({ clientX: 0, clientY: 0 });

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    const preload = (src: string) => {
      const im = new Image();
      im.decoding = "async";
      im.src = src;
    };
    preload(CURSOR_SRC_DEFAULT);
    preload(CURSOR_SRC_POINTER);
  }, []);

  useEffect(() => {
    const release = () => {
      pressedRef.current = false;
    };
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    return () => {
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
    };
  }, []);

  const hitInteractive = useCallback((clientX: number, clientY: number, root: HTMLElement) => {
    const stack = document.elementsFromPoint(clientX, clientY);
    for (const node of stack) {
      if (!(node instanceof Element)) continue;
      if (!root.contains(node)) continue;
      const hit = node.closest(
        'a[href], button:not([disabled]), [role="button"]:not([disabled]), [role="link"], summary, input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
      );
      if (hit && root.contains(hit)) return true;
    }
    return false;
  }, []);

  const flushCursor = useCallback(() => {
    rafRef.current = 0;
    const section = sectionRef.current;
    const wrap = cursorWrapRef.current;
    const img = cursorImgRef.current;
    const pending = pendingRef.current;
    if (!section || !wrap || !img || !pending) return;
    if (reduceMotionRef.current) return;

    const { clientX, clientY } = pending;
    const r = section.getBoundingClientRect();
    const xPx = clientX - r.left;
    const yPx = clientY - r.top;

    const now = performance.now();
    const lh = lastHitRef.current;
    const dx = clientX - lh.x;
    const dy = clientY - lh.y;
    const moved = dx * dx + dy * dy > 36;
    const stale = now - lh.t > 48;
    let pointer = lh.pointer;
    if (moved || stale) {
      pointer = hitInteractive(clientX, clientY, section);
      lastHitRef.current = { x: clientX, y: clientY, pointer, t: now };
    }

    const { x: hotspotX, y: hotspotY } = cursorHotspotPx(pointer);
    const scale = pressedRef.current ? 0.94 : 1;
    wrap.style.opacity = "1";
    wrap.style.transform = `translate3d(${xPx - hotspotX}px, ${yPx - hotspotY}px, 0) scale(${scale})`;

    if (lastPointerRef.current !== pointer) {
      lastPointerRef.current = pointer;
      img.src = pointer ? CURSOR_SRC_POINTER : CURSOR_SRC_DEFAULT;
    }
  }, [hitInteractive]);

  const queueCursor = useCallback(
    (clientX: number, clientY: number) => {
      const el = sectionRef.current;
      if (!el || reduceMotionRef.current) return;
      lastClientRef.current = { clientX, clientY };
      pendingRef.current = { clientX, clientY };
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        flushCursor();
      });
    },
    [flushCursor],
  );

  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    queueCursor(e.clientX, e.clientY);
  };

  const handlePointerLeave = () => {
    const wrap = cursorWrapRef.current;
    if (wrap) wrap.style.opacity = "0";
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onPointerDownCapture={(e) => {
        pressedRef.current = true;
        pendingRef.current = { clientX: e.clientX, clientY: e.clientY };
        lastClientRef.current = { clientX: e.clientX, clientY: e.clientY };
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          flushCursor();
        });
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        handlePointerLeave();
        pressedRef.current = false;
      }}
      className="hero-custom-cursor relative flex min-h-screen flex-col overflow-x-clip motion-safe:cursor-none motion-reduce:cursor-auto"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden">
        <div className="absolute -right-[8%] top-[18%] h-[min(45vh,400px)] w-[min(45vh,400px)] rounded-full bg-[radial-gradient(circle_at_center,hsl(217_91%_60%/0.09),transparent_70%)] blur-[100px] motion-safe:animate-mesh-shift motion-reduce:animate-none" />
      </div>

      <VsCodeHeroFrame>
        <div
          className="flex justify-center animate-fade-in opacity-0"
          style={{ animationDelay: "100ms" }}
        >
          <a
            href="#novo"
            className="group inline-flex items-center gap-3 rounded-full border border-border/80 bg-card/30 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card/50 hover:text-foreground"
          >
            <span className="rounded-md border border-primary/25 bg-primary/[0.08] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Novo
            </span>
            <span className="text-foreground/90">
              Trilha Python + IA · 2026
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:opacity-80" />
          </a>
        </div>

        <h1
          className="mt-8 flex w-full flex-col items-center text-center font-bold tracking-tight text-balance animate-fade-up opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          <span className="block text-gradient text-3xl leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl">
            Aprenda Python do zero
          </span>
          <span className="mt-2 block text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-foreground/95">e construa </span>
            <span className="text-gradient">com IA</span>
          </span>
          <span
            className="mt-4 inline-flex max-w-full items-center justify-center gap-0 rounded-md border border-border/70 bg-[hsl(222_25%_10%)] px-3 py-1.5 font-mono text-sm font-medium leading-none tracking-tight text-foreground shadow-sm sm:mt-5 sm:px-4 sm:py-2 sm:text-base md:text-lg"
            title="Arquivo do curso — projetos guiados até o deploy"
          >
            <span className="text-muted-foreground/90">~/curso/</span>
            <span className="text-primary">projetos_reais</span>
            <span className="text-muted-foreground">.py</span>
          </span>
        </h1>

        <p
          className="mx-auto mt-8 max-w-2xl text-center text-base sm:text-lg text-muted-foreground animate-fade-up opacity-0"
          style={{ animationDelay: "300ms" }}
        >
          O curso mais prático do Brasil para quem quer entrar em tecnologia{" "}
          <span className="text-foreground/90">sem enrolação.</span>
        </p>

        <ul
          className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 animate-fade-up opacity-0"
          style={{ animationDelay: "400ms" }}
        >
          {bullets.map((b) => (
            <li
              key={b}
              className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 px-5 py-4 text-sm text-foreground/90 backdrop-blur transition-all duration-300 hover:border-primary/35 hover:bg-card/70 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.12),0_16px_40px_-24px_hsl(var(--primary)/0.25)] motion-safe:hover:-translate-y-0.5"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:ring-primary/50">
                <Check className="h-3 w-3 text-primary" strokeWidth={3} />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up opacity-0"
          style={{ animationDelay: "500ms" }}
        >
          <Button variant="hero" size="xl" className="w-full sm:w-auto group">
            Quero começar agora
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="glass" size="xl" className="w-full sm:w-auto group">
            <PlayCircle className="h-4 w-4 text-primary" />
            Ver o que vou aprender
          </Button>
        </div>

        <div
          className="mt-6 flex items-center justify-center gap-3 text-xs text-muted-foreground animate-fade-in opacity-0"
          style={{ animationDelay: "550ms" }}
        >
          <div className="flex -space-x-2">
            {[
              "hsl(217 91% 58%)",
              "hsl(199 89% 52%)",
              "hsl(213 85% 68%)",
              "hsl(230 75% 62%)",
            ].map((c, i) => (
              <span
                key={i}
                className="h-6 w-6 rounded-full border-2 border-background"
                style={{
                  background: `linear-gradient(135deg, ${c}, hsl(222 40% 12%))`,
                }}
              />
            ))}
          </div>
          <span>
            <span className="text-foreground font-medium">+100.000 alunos</span>{" "}
            já transformaram a carreira
          </span>
        </div>

        <div className="mx-auto mt-20 w-full max-w-5xl space-y-16 sm:mt-24 sm:space-y-20">
          <CodePreview />

          <div className="animate-fade-in opacity-0" style={{ animationDelay: "800ms" }}>
          <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground/80 sm:text-sm">
            Alunos que trabalham em
          </p>
          <div className="mt-8 w-full rounded-lg border border-emerald-950/40 bg-[hsl(222_42%_4%)] p-2 shadow-[inset_0_0_0_1px_rgba(16,185,129,0.08)] sm:p-3">
            <div className="rounded-md border border-emerald-900/35 bg-black/40 px-3 py-2 font-mono text-[11px] text-emerald-500/85 sm:text-xs">
              <span className="text-emerald-600/75">aluno@asimov</span>
              <span className="text-emerald-800/80">:</span>
              <span className="text-emerald-600/80">~</span>
              <span className="text-emerald-900/60">$ </span>
              <span className="text-emerald-300/95">./partners.sh --stream --live</span>
              <span
                className="ml-1 inline-block h-3 w-2 translate-y-0.5 bg-emerald-400 motion-safe:animate-pulse"
                aria-hidden
              />
            </div>
            <div className="group relative mt-1 overflow-hidden rounded-md bg-black/25 px-2 py-3 sm:py-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 bg-gradient-to-r from-[hsl(222_42%_4%)] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-[hsl(222_42%_4%)] to-transparent" />
              <div className="flex w-max will-change-transform font-mono text-sm text-emerald-400/90 motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:text-base">
                <div className="flex shrink-0 items-center gap-x-0 pr-10 sm:pr-14">
                  {logos.map((l, i) => (
                    <span key={l} className="flex shrink-0 items-center">
                      <span className="whitespace-nowrap font-semibold tracking-wide">{l}</span>
                      {i < logos.length - 1 ? (
                        <span className="px-4 text-emerald-700/50 sm:px-5">::</span>
                      ) : null}
                    </span>
                  ))}
                </div>
                <div className="flex shrink-0 items-center gap-x-0 pr-10 sm:pr-14" aria-hidden>
                  {logos.map((l, i) => (
                    <span key={`marquee-b-${l}-${i}`} className="flex shrink-0 items-center">
                      <span className="whitespace-nowrap font-semibold tracking-wide">{l}</span>
                      {i < logos.length - 1 ? (
                        <span className="px-4 text-emerald-700/50 sm:px-5">::</span>
                      ) : null}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </VsCodeHeroFrame>

      <div
        ref={cursorWrapRef}
        className="pointer-events-none absolute left-0 top-0 z-[120] opacity-0 motion-reduce:hidden will-change-transform"
        style={{ transformOrigin: "0 0" }}
        aria-hidden
      >
        <img
          ref={cursorImgRef}
          src={CURSOR_SRC_DEFAULT}
          width={DISPLAY_PX}
          height={DISPLAY_PX}
          draggable={false}
          alt=""
          className="block drop-shadow-[2px_3px_0_rgba(0,0,0,0.65)] [image-rendering:pixelated]"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
