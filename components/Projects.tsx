"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold">Proyectos destacados</h2>
        <p className="text-sm text-slate-300">
          Algunos trabajos (o prototipos) que muestran cómo enfoco el desarrollo
          web y la automatización.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
          >
            <Card className="border-slate-800 hover:border-sky-500/60 transition-colors h-full">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-3">
                  {project.description}
                </p>
                <div className="mb-3 flex flex-wrap gap-2 text-xs text-slate-300">
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
                    className="text-xs text-sky-400 hover:underline"
                    target="_blank"
                  >
                    Ver proyecto
                  </a>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
