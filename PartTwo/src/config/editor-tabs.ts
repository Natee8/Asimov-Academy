export type EditorTabConfig = {
  to: string;
  label: string;
  end?: boolean;
};

export const EDITOR_TABS: readonly EditorTabConfig[] = [
  { to: "/", label: "hero_landing.py", end: true },
  { to: "/curso", label: "curso.py" },
  { to: "/projetos", label: "projetos.py" },
  { to: "/comunidade", label: "comunidade.py" },
  { to: "/precos", label: "precos.py" },
] as const;
