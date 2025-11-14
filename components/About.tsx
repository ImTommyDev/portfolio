export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Sobre mí</h2>
        <p className="text-sm text-slate-300">
          Un poco más de contexto sobre quién soy y qué hago.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[2fr,1.2fr] items-start">
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Soy Tomás, desarrollador web centrado en construir soluciones para
            negocios: landing pages, webs completas y automatizaciones
            conectadas con herramientas de IA.
          </p>
          <p>
            Me gusta trabajar con <span className="text-sky-400">Next.js</span>,{" "}
            <span className="text-sky-400">TypeScript</span> y{" "}
            <span className="text-sky-400">Tailwind CSS</span>, buscando que
            cada proyecto sea rápido, claro de usar y fácil de mantener.
          </p>
          <p>
            Ahora mismo estoy montando mi stack alrededor de Next + PostgreSQL +
            Prisma, con foco en aplicaciones tipo ERP y paneles internos para
            gestionar clientes, proyectos y facturación.
          </p>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-800 p-4 text-sm">
          <h3 className="text-sm font-semibold text-slate-100">
            Tech que estoy usando
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Prisma</li>
            <li>PostgreSQL</li>
            <li>Supabase / Neon</li>
            <li>Automatizaciones e IA</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
