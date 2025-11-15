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

export default function ProjectsPage() {
  return (
    <main>
      <section>
        <h1>Proyectos</h1>
        <p>
          Listado de proyectos donde muestro cómo trabajo el desarrollo web y la
          automatización.
        </p>

        <div>
          {projects.map((project) => (
            <article key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul>
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {project.link && <a href={project.link}>Ver proyecto</a>}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
