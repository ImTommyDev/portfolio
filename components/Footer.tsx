export function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Tomás. Todos los derechos reservados.
        </p>
        <p className="text-[11px]">
          Construido con Next.js, TypeScript y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
