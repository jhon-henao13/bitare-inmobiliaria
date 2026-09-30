import { motion } from 'framer-motion';

const valuesList = [
  {
    title: 'Compromiso',
    description: 'Dedicación absoluta en cada etapa de la inversión patrimonial.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Servicio',
    description: 'Atención personalizada, humana y orientada a soluciones.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Integridad',
    description: 'Coherencia ética y rectitud en cada negociación.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Honestidad',
    description: 'Transparencia total e información clara desde el primer día.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Responsabilidad',
    description: 'Cumplimiento riguroso de cada promesa y tiempo acordado.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Innovación',
    description: 'Transformación constante de ideas en desarrollo de alto impacto.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Creación de Valor',
    description: 'Proyectos rentables diseñados para generar plusvalía sostenible.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Orientación al Cliente',
    description: 'Acompañamiento cercano en la construcción de su legado.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const MissionVisionValues = () => {
  return (
    <section className="relative bg-[#2a2b2d] text-white py-24 px-4 sm:px-8 lg:px-16 overflow-hidden font-sans">
      {/* Geometría tridimensional coherente con el fondo de la landing */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-60">
        <div className="absolute top-10 -right-20 w-96 h-96 rounded-3xl transform rotate-45 shadow-[0_20px_50px_rgba(27,28,30,0.9)] border border-white/5" style={{ backgroundColor: '#1b1c1e' }} />
        <div className="absolute -bottom-24 -left-20 w-[500px] h-[500px] rounded-3xl transform -rotate-12 shadow-[0_30px_70px_rgba(27,28,30,0.9)] border border-white/5" style={{ backgroundColor: '#1b1c1e' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ENCABEZADO DE SECCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red" />
            NUESTRA FILOSOFÍA
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white !leading-tight"
          >
            Propósito, Destino y <span className="text-brand-red">Principios</span>
          </motion.h2>
        </div>

        {/* MISIÓN & VISIÓN (2 TARJETAS DESTACADAS ASIMÉTRICAS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

          {/* TARJETA DE MISIÓN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative bg-[#1b1c1e] border border-white/10 hover:border-brand-red/50 rounded-2xl p-8 sm:p-10 transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Brillo dinámico en esquina superior */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl group-hover:bg-brand-red/20 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold tracking-[0.25em] text-brand-red uppercase bg-brand-red/10 px-3 py-1 rounded-sm border border-brand-red/20">
                  01 | PROPÓSITO
                </span>
                <span className="text-3xl font-extrabold text-white/20 group-hover:text-brand-red/40 transition-colors">
                  Misión
                </span>
              </div>

              

              <p className="text-gray-300 text-sm sm:text-base !leading-relaxed font-normal">
                Desarrollar y comercializar proyectos inmobiliarios de alto valor que generen bienestar, rentabilidad y plusvalía para nuestros clientes, mediante un servicio profesional, transparente y enfocado en la excelencia, acompañándolos en cada etapa de su inversión patrimonial.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-red" />
              <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Explicidez Patrimonial</span>
            </div>
          </motion.div>

          {/* TARJETA DE VISIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative bg-[#1b1c1e] border border-white/10 hover:border-brand-red/50 rounded-2xl p-8 sm:p-10 transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Brillo dinámico en esquina superior */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl group-hover:bg-brand-red/20 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold tracking-[0.25em] text-brand-red uppercase bg-brand-red/10 px-3 py-1 rounded-sm border border-brand-red/20">
                  02 | FUTURO
                </span>
                <span className="text-3xl font-extrabold text-white/20 group-hover:text-brand-red/40 transition-colors">
                  Visión
                </span>
              </div>

              

              <p className="text-gray-300 text-sm sm:text-base !leading-relaxed font-normal">
                Convertirnos en una de las desarrolladoras y comercializadoras inmobiliarias más influyentes de México, distinguidas por nuestra capacidad de transformar ideas en proyectos exitosos, generar valor sostenible y construir un legado de confianza, innovación y excelencia.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-red" />
              <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Liderazgo de Vanguardia</span>
            </div>
          </motion.div>

        </div>

        {/* VALORES - GRID DE 8 PIEZAS */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
              Valores <span className="text-brand-red">Fundamentales</span>
            </h3>
            <div className="h-[1px] bg-white/10 flex-grow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valuesList.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-[#1b1c1e] border border-white/5 hover:border-brand-red/50 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-black/40 border border-white/10 text-brand-red flex items-center justify-center mb-5 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    {val.icon}
                  </div>

                  <h4 className="text-white font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">
                    {val.title}
                  </h4>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="w-0 group-hover:w-full h-[2px] bg-brand-red transition-all duration-500 mt-5" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVisionValues;