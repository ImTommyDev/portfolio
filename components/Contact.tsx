"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <p className="text-sm text-slate-300">
          Si quieres hablar de un proyecto, colaboración o simplemente preguntar
          algo:
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Info de contacto + redes */}
        <div className="rounded-xl border border-slate-800 p-4 text-sm text-slate-300 space-y-4">
          <p>
            Cuéntame brevemente qué necesitas (tipo de web, funcionalidades,
            plazos aproximados) y te respondo con una propuesta inicial lo antes
            posible.
          </p>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-slate-100">Email:</span>{" "}
              <a
                href="mailto:info@uthopiq.com"
                className="text-sky-400 hover:underline"
              >
                info@uthopiq.com
              </a>
            </p>

            <div>
              <p className="font-semibold text-slate-100 mb-1">
                Redes personales
              </p>
              <ul className="space-y-1 text-xs">
                <li>
                  GitHub:{" "}
                  <a
                    href="https://github.com/ImTommyDev"
                    target="_blank"
                    className="text-sky-400 hover:underline"
                  >
                    github.com/ImTommyDev
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/tom%C3%A1s-primo-rico-801498231/"
                    target="_blank"
                    className="text-sky-400 hover:underline"
                  >
                    Tomás Primo Rico
                  </a>
                </li>
                <li>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/tomasprimo_/"
                    target="_blank"
                    className="text-sky-400 hover:underline"
                  >
                    @tomasprimo_
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-100 mb-1">
                Redes de Uthopiq
              </p>
              <ul className="space-y-1 text-xs">
                <li>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/uthopiq/"
                    target="_blank"
                    className="text-sky-400 hover:underline"
                  >
                    @uthopiq
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/company/uthopiq-agencia-ia-desarrollo-web/"
                    target="_blank"
                    className="text-sky-400 hover:underline"
                  >
                    Uthopiq · Agencia IA & Desarrollo Web
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <a
            href="mailto:info@uthopiq.com?subject=Proyecto%20web%20-%20Consulta"
            className="inline-flex items-center justify-center rounded-full border border-sky-500 px-4 py-2 text-xs font-medium text-sky-400 hover:bg-sky-500/10 transition-colors"
          >
            Enviar email rápido
          </a>
        </div>

        {/* Formulario dummy con shadcn */}
        <form
          className="space-y-4 rounded-xl border border-slate-800 p-4 text-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-1">
            <label className="text-xs text-slate-200">Nombre</label>
            <Input placeholder="Tu nombre" />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-200">Email</label>
            <Input type="email" placeholder="tucorreo@ejemplo.com" />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-200">Mensaje</label>
            <Textarea
              className="min-h-[120px]"
              placeholder="Cuéntame qué idea tienes en mente..."
            />
          </div>

          <Button type="submit" className="w-full" variant="default">
            Enviar (formulario sin conexión aún)
          </Button>

          <p className="text-[11px] text-slate-500">
            Más adelante conectaremos este formulario a un backend o servicio de
            email (Resend, PHPMailer, etc.).
          </p>
        </form>
      </div>
    </section>
  );
}
