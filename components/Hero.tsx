export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center gap-6 px-4"
    >
      <p className="text-sm uppercase tracking-widest text-sky-400">
        Desarrollo Web & Agencia IA
      </p>
      <h1 className="text-4xl font-bold md:text-5xl">
        Hola, soy <span className="text-sky-400">Tomás</span>.
      </h1>
      <p className="max-w-xl text-sm text-slate-300 md:text-base">
        Construyo landing pages, webs a medida y automatizaciones usando
        Next.js, TypeScript y herramientas de IA para negocios que quieren
        resultados.
      </p>
      <div className="flex gap-3">
        <a
          href="#projects"
          className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium hover:bg-sky-400 transition-colors"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium hover:border-sky-400 transition-colors"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
