import React from "react";

export default function CV() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto p-8 text-gray-900 font-serif">
        {/* Encabezado estilo Harvard */}
        <header className="mb-8 border-b border-gray-300 pb-4">
          <h1 className="text-4xl font-bold">Juan Carlos Romero Ochoa</h1>
          <p className="mt-1">Temuco, Chile</p>
          <p>Nacionalidad: Colombiana (permanencia definitiva)</p>
          <p>Email: juancarlosjuancajr@gmail.com | Tel: +56 9 9315 2648</p>
          <p>LinkedIn: linkedin.com/in/juan-carlos-romero-ochoa-ab56692b2</p>
          <p>GitHub: github.com/JcRoOch1996</p>
        </header>

        {/* Perfil Profesional */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 pb-1 mb-2">
            Perfil Profesional
          </h2>
          <p>
            Estudiante de último año de Ingeniería en Informática con título técnico en Electrónica. Apasionado por el desarrollo web y multiplataforma, con especial interés en Node.js, Python, aplicaciones móviles e inteligencia artificial. Responsable, autodidacta y con habilidades para el trabajo en equipo. Motivado por crecer profesionalmente en el área de tecnologías de la información.
          </p>
        </section>

        {/* Formación Académica */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 pb-1 mb-2">
            Formación Académica
          </h2>
          <ul className="space-y-2">
            <li>
              <p className="font-bold">Ingeniería en Informática</p>
              <p>Instituto Profesional IP Chile, 2022 - Presente</p>
            </li>
            <li>
              <p className="font-bold">Técnico en Electrónica Nivel Medio</p>
              <p>Liceo Politécnico Pueblo Nuevo, Egresado en 2016</p>
            </li>
          </ul>
        </section>

        {/* Experiencia Laboral */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 pb-1 mb-2">
            Experiencia Laboral
          </h2>
          <div className="mb-4">
            <p className="font-bold">Técnico en mantención de equipos MFC</p>
            <p>Distribuidora Integral Van&Jac, 2018 - 2020</p>
            <ul className="list-disc list-inside mt-1">
              <li>Mantenimiento preventivo y correctivo de equipos multifuncionales</li>
              <li>Diagnóstico de fallas técnicas y configuración básica de red</li>
              <li>Soporte técnico a usuarios</li>
              <li>Atención al cliente y resolución de incidencias</li>
            </ul>
          </div>
        </section>

        {/* Habilidades Técnicas */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 pb-1 mb-2">
            Habilidades Técnicas
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Desarrollo Frontend:</strong> HTML, CSS, JavaScript, React, Angular, Astro, Bootstrap, TailwindCSS</li>
            <li><strong>Desarrollo Backend:</strong> JavaScript, TypeScript, Express.js, NestJS, MySQL, MongoDB</li>
            <li><strong>Herramientas de desarrollo:</strong> Visual Studio Code, Thunder Client, Postman, Git, GitHub</li>
            <li><strong>Herramientas de virtualización:</strong> VirtualBox, VMware</li>
            <li><strong>Herramientas de ofimática:</strong> Word, Excel</li>
            <li><strong>Sistemas operativos:</strong> Windows, Linux</li>
          </ul>
        </section>

        {/* Habilidades Blandas */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 pb-1 mb-2">
            Habilidades Blandas
          </h2>
          <p>Trabajo en equipo, comunicación efectiva, responsabilidad, compromiso, aprendizaje autónomo</p>
        </section>

        {/* Idiomas */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 pb-1 mb-2">
            Idiomas
          </h2>
          <p><strong>Español:</strong> Nativo</p>
          <p><strong>Inglés:</strong> Nivel A1 (CEFR) – comprensión y escritura de frases simples; presentaciones básicas</p>
        </section>

        {/* Áreas de Interés */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 pb-1 mb-2">
            Áreas de Interés
          </h2>
          <p>Desarrollo web, aplicaciones móviles, Node.js, inteligencia artificial, aprendizaje automático, software multiplataforma</p>
        </section>
      </main>
    </div>
  );
}
