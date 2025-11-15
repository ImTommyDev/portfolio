export function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>
        Si quieres hablar de un proyecto, colaboración o simplemente preguntar
        algo:
      </p>

      <div>
        <div>
          <p>
            Cuéntame brevemente qué necesitas (tipo de web, funcionalidades,
            plazos aproximados) y te respondo con una propuesta inicial lo antes
            posible.
          </p>

          <p>
            Email: <a href="mailto:info@uthopiq.com">info@uthopiq.com</a>
          </p>

          <h3>Redes personales</h3>
          <ul>
            <li>
              GitHub:{" "}
              <a href="https://github.com/ImTommyDev" target="_blank">
                github.com/ImTommyDev
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/tom%C3%A1s-primo-rico-801498231/"
                target="_blank"
              >
                Tomás Primo Rico
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a href="https://www.instagram.com/tomasprimo_/" target="_blank">
                @tomasprimo_
              </a>
            </li>
          </ul>

          <h3>Redes de Uthopiq</h3>
          <ul>
            <li>
              Instagram:{" "}
              <a href="https://www.instagram.com/uthopiq/" target="_blank">
                @uthopiq
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/company/uthopiq-agencia-ia-desarrollo-web/"
                target="_blank"
              >
                Uthopiq · Agencia IA &amp; Desarrollo Web
              </a>
            </li>
          </ul>
        </div>

        <form>
          <div>
            <label>Nombre</label>
            <input placeholder="Tu nombre" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder="tucorreo@ejemplo.com" />
          </div>

          <div>
            <label>Mensaje</label>
            <textarea placeholder="Cuéntame qué idea tienes en mente..." />
          </div>

          <button type="submit">Enviar (formulario sin conexión aún)</button>
        </form>
      </div>
    </section>
  );
}
