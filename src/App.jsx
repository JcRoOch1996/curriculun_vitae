import React from "react";

export default function CV() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800 font-sans">
      <header className="mb-6 border-b pb-4 flex items-center gap-4">
        <img
          src="/foto-perfil.jpg"
          alt="Foto de Juan Carlos Romero Ochoa"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <div>
          <h1 className="text-3xl font-bold">Juan Carlos Romero Ochoa</h1>
          <p className="text-sm text-gray-600">Temuco, Chile | Nacionalidad: Colombiana con permanencia definitiva</p>
          <p className="text-sm text-gray-600">Correo: juancarlosjuancajr@gmail.com | Tel: +56 9 9315 2648</p>
          <p className="text-sm text-blue-600">
            <a href="https://linkedin.com/in/juan-carlos-romero-ochoa-ab56692b2" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" | "}
            <a href="https://github.com/JcRoOch1996" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Perfil Profesional</h2>
        <p>
          Estudiante de último año de Ingeniería en Informática con título técnico en Electrónica. Apasionado por el desarrollo web y multiplataforma, con especial interés en Node.js, Python, aplicaciones móviles e inteligencia artificial. Responsable, autodidacta y con buenas habilidades de trabajo en equipo, motivado por crecer profesionalmente en el área de tecnologías de la información.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Formación Académica</h2>
        <ul className="list-disc list-inside">
          <li><strong>Técnico en Electrónica Nivel Medio</strong> — Liceo Politécnico Pueblo Nuevo (Egresado en 2016)</li>
          <li><strong>Ingeniería en Informática</strong> — Instituto Profesional IP Chile (2022 - Presente)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Experiencia Laboral</h2>
        <div>
          <h3 className="font-bold">Técnico en mantención de equipos MFC</h3>
          <p className="text-sm text-gray-600">Distribuidora Integral Van&Jac (2018 - 2020)</p>
          <ul className="list-disc list-inside">
            <li>Mantenimiento preventivo y correctivo de equipos multifuncionales (MFC).</li>
            <li>Diagnóstico de fallas técnicas y configuración básica de red.</li>
            <li>Soporte a usuarios y resolución de problemas técnicos.</li>
            <li>Desarrollo de habilidades de atención al cliente.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Habilidades Técnicas</h2>
        <ul className="list-disc list-inside">
          <li>HTML, CSS, JavaScript, TypeScript, Node.js, SQL, NoSQL</li>
          <li>React, Angular, Git, GitHub, Astro</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Habilidades Blandas</h2>
        <ul className="list-disc list-inside">
          <li>Trabajo en equipo</li>
          <li>Comunicación efectiva</li>
          <li>Responsabilidad y compromiso</li>
          <li>Aprendizaje autónomo</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Idiomas</h2>
        <ul className="list-disc list-inside">
          <li>Español: Nativo</li>
          <li>Inglés: Nivel A1 (capacidad para comprender frases simples, presentarse y redactar textos breves)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b mb-2">Áreas de Interés</h2>
        <ul className="list-disc list-inside">
          <li>Desarrollo web (frontend y backend)</li>
          <li>Desarrollo de aplicaciones móviles</li>
          <li>Programación en Node.js</li>
          <li>Inteligencia artificial y aprendizaje automático</li>
          <li>Desarrollo de software multiplataforma</li>
        </ul>
      </section>
    </main>
  );
}
