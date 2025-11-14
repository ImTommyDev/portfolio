export function Uthopiq() {
  return (
    <section id="uthopiq" className="mx-auto max-w-5xl px-4 py-20 space-y-10">
      {/* Título */}
      <div>
        <h2 className="text-3xl font-bold">Uthopiq</h2>
        <p className="text-sm text-slate-300 mt-1">
          Mi agencia especializada en desarrollo web, automatización y
          soluciones con IA.
        </p>
      </div>

      {/* Contenido */}
      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* Texto principal */}
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Uthopiq es un proyecto profesional donde ofrecemos{" "}
            <span className="text-sky-400">desarrollo web moderno</span>,
            acompañado de automatizaciones inteligentes para negocios que
            quieren escalar más rápido y con menos trabajo manual.
          </p>

          <p>
            Construimos sitios en WordPress y en React/Next.js, y conectamos
            sistemas mediante APIs, chatbots y flujos de trabajo usando
            herramientas como <span className="text-sky-400">n8n</span> y
            modelos de IA.
          </p>

          <p>
            El objetivo es claro: hacer webs rápidas, escalables y que generen
            resultados reales para empresas y emprendedores.
          </p>

          <a
            href="https://uthopiq.com/"
            target="_blank"
            className="inline-block mt-4 rounded-full bg-sky-500 px-5 py-2 text-sm font-medium hover:bg-sky-400 transition-colors"
          >
            Visitar Uthopiq.com
          </a>
        </div>

        {/* Tarjeta lateral */}
        <div className="rounded-xl border border-slate-800 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-slate-100">
            Qué ofrecemos
          </h3>

          <ul className="space-y-1 text-xs text-slate-300">
            <li>• Landing pages rápidas y optimizadas</li>
            <li>• Tiendas online completas</li>
            <li>• Webs corporativas y portales a medida</li>
            <li>• Chatbots con IA</li>
            <li>• Automatizaciones con n8n / API</li>
            <li>• Auditorías y mantenimiento mensual</li>
          </ul>

          <div className="pt-4 space-y-1 text-xs text-slate-300">
            <p className="font-semibold text-slate-100">Redes de Uthopiq</p>
            <p>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/uthopiq/"
                target="_blank"
                className="text-sky-400 hover:underline"
              >
                @uthopiq
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/company/uthopiq-agencia-ia-desarrollo-web/"
                target="_blank"
                className="text-sky-400 hover:underline"
              >
                Uthopiq · Agencia IA & Desarrollo Web
              </a>
            </p>
          </div>

          <p className="pt-3 text-[11px] text-slate-500">
            Esta sección resume mis servicios principales desde Uthopiq. En la
            web tienes información completa.
          </p>
        </div>
      </div>
    </section>
  );
}
