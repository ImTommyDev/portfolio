"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4"
    >
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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
          <Button
            asChild
            className="rounded-full px-5 py-2 text-sm font-medium"
          >
            <a href="#projects">Ver proyectos</a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-slate-600 text-slate-100 hover:border-sky-400"
          >
            <a href="#contact">Contactar</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
