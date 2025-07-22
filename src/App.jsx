import React from "react";

export default function CV() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto p-8 text-gray-800 font-sans">
        {/* Header con diseño moderno */}
        <header className="mb-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Juan Carlos Romero Ochoa</h1>
            <div className="space-y-1 text-gray-600">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Temuco, Chile | Nacionalidad: Colombiana con permanencia definitiva
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                juancarlosjuancajr@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +56 9 9315 2648
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/juan-carlos-romero-ochoa-ab56692b2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/JcRoOch1996"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </header>

        {/* Secciones con diseño de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna izquierda */}
          <div className="space-y-6">
            {/* Perfil Profesional */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Perfil Profesional
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Estudiante de último año de Ingeniería en Informática con título
                técnico en Electrónica. Apasionado por el desarrollo web y
                multiplataforma, con especial interés en Node.js, Python, aplicaciones
                móviles e inteligencia artificial. Responsable, autodidacta y con
                buenas habilidades de trabajo en equipo, motivado por crecer
                profesionalmente en el área de tecnologías de la información.
              </p>
            </section>

            {/* Experiencia Laboral */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Experiencia Laboral
              </h2>
              <div className="mb-4">
                <h3 className="font-bold text-lg text-gray-800">Técnico en mantención de equipos MFC</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Distribuidora Integral Van&Jac (2018 - 2020)
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Mantenimiento preventivo y correctivo de equipos multifuncionales (MFC)</li>
                  <li>Diagnóstico de fallas técnicas y configuración básica de red</li>
                  <li>Soporte a usuarios y resolución de problemas técnicos</li>
                  <li>Desarrollo de habilidades de atención al cliente</li>
                </ul>
              </div>
            </section>

            {/* Formación Académica */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Formación Académica
              </h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-bold text-gray-800">Técnico en Electrónica Nivel Medio</h3>
                  <p className="text-gray-600">Liceo Politécnico Pueblo Nuevo</p>
                  <p className="text-sm text-gray-500">Egresado en 2016</p>
                </li>
                <li>
                  <h3 className="font-bold text-gray-800">Ingeniería en Informática</h3>
                  <p className="text-gray-600">Instituto Profesional IP Chile</p>
                  <p className="text-sm text-gray-500">2022 - Presente</p>
                </li>
              </ul>
            </section>
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            {/* Habilidades Técnicas */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Habilidades Técnicas
              </h2>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Programación Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Angular</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Astro</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Programación Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">ExpressJs</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">NestJs</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Django</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Flask</span>
                </div>
              </div>
            </section>

            {/* Habilidades Blandas */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Habilidades Blandas
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Trabajo en equipo</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Comunicación efectiva</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Responsabilidad</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Compromiso</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Aprendizaje autónomo</span>
              </div>
            </section>

            {/* Idiomas */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Idiomas
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-gray-800">Español</h3>
                  <p className="text-sm text-gray-600">Nativo</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Inglés</h3>
                  <p className="text-sm text-gray-600">Nivel A1 (capacidad para comprender frases simples, presentarse y redactar textos breves)</p>
                </div>
              </div>
            </section>

            {/* Áreas de Interés */}
            <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Áreas de Interés
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Desarrollo web</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Aplicaciones móviles</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Inteligencia artificial</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Aprendizaje automático</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Software multiplataforma</span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}