"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Category = "todos" | "web" | "automatizacion" | "portfolio";

type Project = {
  title: string;
  summary: string;
  description: string;
  year: string;
  category: Category;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio personal",
    summary: "Mi portfolio como desarrollador web.",
    description:
      "Portfolio construido con Next.js, TypeScript, Tailwind, Framer Motion y shadcn/ui, mostrando mis proyectos, servicios y la sección de Uthopiq.",
    year: "2025",
    category: "portfolio",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    liveUrl: "#", // aquí irá la url pública
    repoUrl: "https://github.com/ImTommyDev/portfolio",
  },
  {
    title: "Web de Uthopiq",
    summary: "Agencia IA & Desarrollo Web.",
    description:
      "Sitio enfocado en presentar los servicios de Uthopiq: desarrollo web, automatizaciones y soluciones con IA para negocios.",
    year: "2025",
    category: "web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://uthopiq.com/",
  },
  {
    title: "Prototipo ERP interno",
    summary: "Panel para gestionar clientes y proyectos.",
    description:
      "Prototipo de interfaz para un ERP interno: gestión de clientes, proyectos y facturación. Enfocado en estructura, UI y flujo de trabajo.",
    year: "2025",
    category: "automatizacion",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    repoUrl: "#",
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "automatizacion", label: "Automatización / ERP" },
  { id: "portfolio", label: "Portfolio" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Category>("todos");

  const filteredProjects =
    filter === "todos"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-5xl px-4 py-16 space-y-10">
        {/* Cabecera */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
            Proyectos
          </p>
          <h1 className="text-3xl font-bold md:text-4xl">
            Proyectos y experimentos
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Aquí recopilo los proyectos que voy construyendo: desde webs para
            clientes y la propia Uthopiq, hasta prototipos de ERPs y paneles
            internos que uso para aprender y mejorar mi stack.
          </p>

          <div className="flex gap-3">
            <Button asChild variant="outline" className="text-xs">
              <Link href="/">Volver al inicio</Link>
            </Button>
          </div>
        </motion.section>

        {/* Filtros */}
        <section className="space-y-3">
          <p className="text-xs text-slate-400">Filtrar por tipo de proyecto</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                type="button"
                variant={filter === cat.id ? "default" : "outline"}
                size="sm"
                className="text-xs"
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </section>

        {/* Lista de proyectos */}
        <section className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full border-slate-800 hover:border-sky-500/60 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base md:text-lg">
                      {project.title}
                    </CardTitle>
                    <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] text-slate-300">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {project.summary}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-slate-300">
                  <p>{project.description}</p>

                  <div className="flex flex-wrap gap-2 text-[11px]">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-700 px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="text-sky-400 hover:underline"
                      >
                        Ver online
                      </a>
                    )}
                    {project.repoUrl && project.repoUrl !== "#" && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        className="text-sky-400 hover:underline"
                      >
                        Ver repositorio
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {filteredProjects.length === 0 && (
            <p className="text-sm text-slate-400">
              De momento no tengo proyectos en esta categoría.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
