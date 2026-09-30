import { motion } from 'framer-motion';

const workModels = [
  {
    number: '01',
    title: 'Comercialización de proyectos',
    description: 'Comercializamos tu desarrollo con estrategia integral: fuerza de ventas, marketing digital y red de compradores calificados.',
    tag: 'Estrategia & Ventas',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Desarrollo Conjunto',
    description: 'Participamos como socios estratégicos en el desarrollo de proyectos, aportando experiencia, estructura y red de contactos.',
    tag: 'Sinergia & Ejecución',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Aportación de Tierra',
    description: 'Gestionamos y estructuramos aportaciones de tierra para proyectos de desarrollo inmobiliario con esquemas flexibles.',
    tag: 'Estructuración Patrimonial',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V7a2 2 0 00-2-2h-1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Inversión Inmobiliaria',
    description: 'Conectamos inversionistas con proyectos de alto potencial, generando rentabilidad y plusvalía sostenible.',
    tag: 'Retorno & Plusvalía',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const HowWeWork = () => {
  return (
    <section className="relative bg-brand-black text-white py-28 px-4 sm:px-8 lg:px-16 overflow-hidden font-sans">
      {/* Luces y destellos de fondo estilo Bitáre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -top-12 right-0 w-80 h-80 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold tracking-[0.25em] uppercase backdrop-blur-md mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            MODELOS DE COLABORACIÓN
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white !leading-tight"
          >
            ¿Cómo podemos <span className="text-brand-red">trabajar juntos?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg mt-6 max-w-2xl mx-auto"
          >
            Diseñamos esquemas de negocio flexibles orientados a potenciar el valor del suelo, optimizar el capital y asegurar proyectos exitosos.
          </motion.p>
        </div>

        {/* RETÍCULA DE 4 COLUMNAS DE ALTO IMPACTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workModels.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-[#1b1c1e] border border-white/10 hover:border-brand-red/60 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_40px_rgba(227,6,19,0.15)] flex flex-col justify-between overflow-hidden"
            >
              {/* Resplandor superior hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-brand-red group-hover:to-transparent transition-all duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl group-hover:bg-brand-red/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Cabecera de la tarjeta: Número + Icono */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-black text-white/20 group-hover:text-brand-red transition-colors duration-300 font-mono">
                    {item.number}
                  </span>

                  <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-md">
                    {item.icon}
                  </div>
                </div>

                {/* Sub-tag */}
                <span className="text-[10px] font-bold tracking-widest text-brand-red uppercase bg-brand-red/10 px-2.5 py-1 rounded border border-brand-red/20 mb-3 inline-block">
                  {item.tag}
                </span>

                {/* Título de la modalidad */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Descripción explicativa exacta */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}[cite: 14]
                </p>
              </div>

              {/* Pie interactivo de tarjeta */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between group-hover:border-white/20 transition-colors">
                <span className="text-xs text-gray-400 font-medium group-hover:text-white transition-colors">
                  Explorar esquema
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-brand-red flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BANNER INFERIOR DE ACCIÓN (CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-[#1b1c1e] border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
          
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              ¿Tienes un terreno o un proyecto en mente?
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm">
              Analizamos la viabilidad técnica y financiera de tu propuesta sin compromiso.
            </p>
          </div>

          <a
            href="#contacto"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-brand-red/30"
          >
            Iniciar conversación
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HowWeWork;