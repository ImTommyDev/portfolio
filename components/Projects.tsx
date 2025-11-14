const projects = [
  {
    title: "Portfolio personal",
    description:
      "Portfolio hecho con Next.js, TypeScript y Tailwind, mostrando mis proyectos y servicios.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Landing para agencia",
    description:
      "Landing oscura con animaciones suaves y formulario de contacto conectado a automatizaciones.",
    tech: ["React", "AOS", "PHPMailer"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl space-y-8 px-4 py-16">
      <div>
        <h2 className="text-2xl font-semibold">Proyectos destacados</h2>
        <p className="text-sm text-slate-300">
          Algunos trabajos (o prototipos) que muestran cómo enfoco el desarrollo
          web y la automatización.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-slate-800 p-4 transition-colors hover:border-sky-500/60"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-700 px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                className="mt-4 inline-block text-xs text-sky-400 hover:underline"
                target="_blank"
              >
                Ver proyecto
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
