import { motion } from 'framer-motion';
import alianzaImg from '../../assets/nosotros-alianza.jpg';

const alliances = [
  {
    id: 1,
    category: 'Arquitectura',
    partners: ['JG Arquitectura'],
    description: 'Diseño conceptual, espacial y vanguardia arquitectónica.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 2,
    category: 'Gerencia',
    partners: ['Hartera Gestión'],
    description: 'Estructuración técnica y supervisión ejecutiva de obra.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 3,
    category: 'Construcción',
    partners: ['GCO Edificaciones'],
    description: 'Ejecución de infraestructura con los más altos estándares.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h6zm0 0V2a1 1 0 011-1h2a1 1 0 011 1v2m-4 0h4m2 0h2a2 2 0 012 2v14a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    id: 4,
    category: 'Fiscal',
    partners: ['KS Consultores', 'Dupla Group'],
    description: 'Planificación tributaria y optimización financiera legal.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 5,
    category: 'Financiero',
    partners: ['Multiva', 'Banorte'],
    description: 'Banca patrimonial, créditos de desarrollo y fondos de inversión.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    category: 'Jurídico',
    partners: ['Dorantes Aranda'],
    description: 'Protección patrimonial, certeza y certeza contractual.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

const StrategicAlliances = () => {
  return (
    <section className="relative bg-white/85 text-white py-24 px-4 sm:px-8 lg:px-16 overflow-hidden font-sans">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* COLUMNA IZQUIERDA: SHOWCASE VISUAL CON IMAGEN */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl group bg-[#1b1c1e]">
              {/* Imagen del Edificio */}
              <div className="relative h-[580px] sm:h-[760px] w-full overflow-hidden">
                <img 
                  src={alianzaImg} 
                  alt="Edificio Alianzas Bitáre" 
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Degradados de fusión visual */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/40 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay" />
              </div>

              {/* Insignia Flotante en la Imagen */}
              

              {/* Borde sutil rojo acento */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-red-500 to-transparent" />
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: ENCABEZADO Y GRID DE ALIANZAS */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tag Superior */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-[0.35em] uppercase">
                SOCIOS ESTRATÉGICOS
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight !leading-tight mb-4">
              Nuestras <br />
              <span className="text-brand-red">Alianzas Estratégicas</span>
            </h2>

            <p className="text-gray-900 text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
              Colaboramos con firmas líderes del sector para asegurar la máxima calidad técnica, certidumbre legal y rentabilidad en cada proyecto.
            </p>

            {/* GRID DE ALIANZAS EN 2 COLUMNAS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {alliances.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative bg-[#1b1c1e] border-l-2 border-l-brand-red border-y border-r border-white/5 hover:border-r-white/20 p-5 rounded-r-xl transition-all duration-300 hover:translate-x-1 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    {/* Nombre de la categoría (Arquitectura, Gerencia, etc.) */}
                    <h3 className="text-brand-red font-extrabold text-sm tracking-wider uppercase">
                      {item.category}
                    </h3>
                    
                    <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Nombre del Socio/Empresa */}
                  <div className="mb-2">
                    {item.partners.map((partner, pIdx) => (
                      <p key={pIdx} className="text-white font-bold text-base sm:text-lg leading-snug">
                        {partner}
                      </p>
                    ))}
                  </div>

                  {/* Descripción corta */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StrategicAlliances;