const CodePreview = () => {
  return (
    <div className="w-full animate-fade-up opacity-0" style={{ animationDelay: "600ms" }}>
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border/50 pb-4 font-mono sm:pb-5">
        <span className="break-all text-base font-medium text-foreground/95 sm:text-lg md:text-xl">
          projeto_01_chatbot.py
        </span>
        <span className="shrink-0 text-xs text-muted-foreground sm:text-sm">Python</span>
      </div>

      <div className="mt-5 grid grid-cols-[auto_1fr] font-mono text-sm leading-7 sm:mt-7 sm:text-[15px] sm:leading-8 md:text-base md:leading-8">
        <div className="select-none border-r border-border/80 bg-muted/20 py-6 pl-2 pr-4 text-right text-muted-foreground/55 tabular-nums sm:py-8 sm:pl-3 sm:pr-5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre
          data-wheel-scroll-x
          className="vscode-scrollbar-x min-w-0 py-6 pl-5 pr-2 text-foreground/90 sm:py-8 sm:pl-8 sm:pr-4"
        >
          <code>
            <span className="text-muted-foreground"># Seu primeiro projeto com IA</span>
            {"\n"}
            <span className="text-[hsl(217_85%_72%)]">from</span>{" "}
            <span className="text-[hsl(199_82%_62%)]">openai</span>{" "}
            <span className="text-[hsl(217_85%_72%)]">import</span> OpenAI{"\n\n"}
            <span className="text-[hsl(217_85%_72%)]">def</span>{" "}
            <span className="text-primary">responder</span>(pergunta):{"\n"}
            {"    "}cliente = OpenAI(){"\n"}
            {"    "}resposta = cliente.chat.completions.create({"\n"}
            {"        "}model=<span className="text-[hsl(213_75%_70%)]">"gpt-4"</span>,{"\n"}
            {"        "}messages=[
            {"{"}
            <span className="text-[hsl(213_75%_70%)]">"role"</span>:{" "}
            <span className="text-[hsl(213_75%_70%)]">"user"</span>,{" "}
            <span className="text-[hsl(213_75%_70%)]">"content"</span>: pergunta
            {"}"}]{"\n"}
            {"    "}){"\n"}
            {"    "}
            <span className="text-[hsl(217_85%_72%)]">return</span> resposta.choices[
            <span className="text-[hsl(199_70%_58%)]">0</span>].message.content
            <span className="ml-1 inline-block h-[1.05em] w-0.5 translate-y-px bg-primary align-middle motion-safe:animate-glow-pulse" />
          </code>
        </pre>
      </div>

      <div className="mt-0 border-t border-border/60 bg-muted/10 px-2 py-3 font-mono text-xs text-muted-foreground sm:px-4 sm:py-4 sm:text-sm">
        <span className="text-primary">$</span> python projeto_01_chatbot.py{" "}
        <span className="text-[hsl(199_75%_55%)]">→ ✔ Pronto em 0.84s</span>
      </div>

      <p className="mt-4 font-mono text-[11px] text-muted-foreground/70 sm:text-xs">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary motion-safe:animate-glow-pulse" />
          Módulo 1 · ao vivo
        </span>
      </p>
    </div>
  );
};

export default CodePreview;
