import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'Alejandro Rivas',
    role: 'COFUNDADOR Y DIRECTOR DE DESARROLLO',
    quote: 'Creemos en el poder de los espacios para elevar la calidad de vida de las personas y construir proyectos con visión de futuro.',
    bio: 'Especialista en desarrollo y crecimiento de proyectos inmobiliarios de alta gama con más de 15 años de trayectoria.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Mariana Torres',
    role: 'COFUNDADORA Y DIRECTORA DE ESTRATEGIA',
    quote: 'La precisión analítica y el diseño de vanguardia se unen para garantizar inversiones sólidas y de verdadero impacto.',
    bio: 'Líder en estructuración financiera y posicionamiento de marcas exclusivas en el sector de bienes raíces.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Santiago Garza',
    role: 'DIRECTOR DE ARQUITECTURA Y DISEÑO',
    quote: 'Cada línea y cada textura deben responder a una narrativa arquitectónica honesta, funcional y atemporal.',
    bio: 'Arquitecto galardonado enfocado en conceptos residenciales y corporativos sostenibles de alto estándar.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  },
];

const TeamLeadership = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
  const nextIndex = (currentIndex + 1) % teamMembers.length;

  const handlePrev = () => setCurrentIndex(prevIndex);
  const handleNext = () => setCurrentIndex(nextIndex);

  const activeMember = teamMembers[currentIndex];
  const prevMember = teamMembers[prevIndex];
  const nextMember = teamMembers[nextIndex];

  return (
    <section className="relative bg-brand-black text-white py-24 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans select-none">
      {/* Resplandor sutil de fondo de la marca */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ENCABEZADO TIPO GRID DE 3 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end mb-12 lg:mb-16 pb-8 border-b border-white/10">
          
          {/* Columna Izquierda: Tag + Título Principal */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-[0.35em] uppercase">
                NUESTRO EQUIPO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-normal text-white !leading-tight">
              Liderazgo <br />
              <span className="text-gray-300">y Visión</span>
            </h2>
          </div>

          {/* Columna Central: Descripción */}
          <div className="md:col-span-4">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Personas que creen en el poder transformador de los espacios. Nuestro equipo combina experiencia, visión y un profundo compromiso con un desarrollo inmobiliario con sentido humano.
            </p>
          </div>

          {/* Columna Derecha: Slogan Acento */}
          <div className="md:col-span-3 md:text-right hidden md:block">
            <p className="text-[11px] lg:text-xs font-bold tracking-[0.35em] text-gray-400 uppercase !leading-snug">
              MÁS QUE PROYECTOS, <br />
              <span className="text-white">LEGADOS</span>
            </p>
          </div>
        </div>

        {/* SLIDER DE LIDERAZGO - TRIPLE TARJETA (DESKTOP) / CARTA PRINCIPAL (MOBILE) */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">

            {/* TARJETA IZQUIERDA (PREVIEW EN DESKTOP) */}
            <div 
              onClick={handlePrev}
              className="hidden lg:block lg:col-span-2 relative h-[480px] rounded-2xl overflow-hidden cursor-pointer group border border-white/5 hover:border-brand-red/40 transition-all duration-500 bg-[#1b1c1e]"
            >
              <img 
                src={prevMember.image} 
                alt={prevMember.name} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Botón Flecha Izquierda */}
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 backdrop-blur-md"
                aria-label="Anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-5 right-5 text-left">
                <h4 className="text-white font-bold text-base line-clamp-1">{prevMember.name}</h4>
                <p className="text-gray-400 text-[10px] font-semibold tracking-wider uppercase line-clamp-1">{prevMember.role}</p>
              </div>
            </div>

            {/* TARJETA CENTRAL DESTACADA (MIEMBRO ACTIVO) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#1b1c1e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12"
                >
                  {/* Foto del integrante */}
                  <div className="md:col-span-5 relative h-72 sm:h-96 md:h-full min-h-[380px]">
                    <img 
                      src={activeMember.image} 
                      alt={activeMember.name} 
                      className="w-full h-full object-cover grayscale contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1e] via-transparent to-transparent md:hidden" />
                  </div>

                  {/* Detalle y Cita */}
                  <div className="md:col-span-7 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between relative bg-[#1b1c1e]">
                    {/* Comilla roja flotante decorativa */}
                    <div className="text-brand-red text-4xl lg:text-5xl font-serif font-bold leading-none mb-2 opacity-80">
                      “
                    </div>

                    <div>
                      {/* Cita textual */}
                      <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-snug mb-6 tracking-wide">
                        {activeMember.quote}
                      </p>

                      {/* Línea divisoria */}
                      <div className="w-12 h-[3px] bg-brand-red mb-6" />

                      {/* Nombre y Cargo */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                        {activeMember.name}
                      </h3>
                      <p className="text-brand-red text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
                        {activeMember.role}
                      </p>

                      {/* Bio resumida */}
                      <p className="text-gray-400 text-sm sm:text-md leading-relaxed">
                        {activeMember.bio}
                      </p>
                    </div>

                    {/* Controles para Mobile */}
                    <div className="flex lg:hidden items-center justify-between mt-8 pt-4 border-t border-white/10">
                      <button 
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center active:scale-95"
                      >
                        ‹
                      </button>
                      <div className="flex gap-2">
                        {teamMembers.map((_, idx) => (
                          <span 
                            key={idx} 
                            className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-brand-red' : 'w-2 bg-white/20'}`}
                          />
                        ))}
                      </div>
                      <button 
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center active:scale-95"
                      >
                        ›
                      </button>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* TARJETA DERECHA (PREVIEW EN DESKTOP) */}
            <div 
              onClick={handleNext}
              className="hidden lg:block lg:col-span-2 relative h-[480px] rounded-2xl overflow-hidden cursor-pointer group border border-white/5 hover:border-brand-red/40 transition-all duration-500 bg-[#1b1c1e]"
            >
              <img 
                src={nextMember.image} 
                alt={nextMember.name} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Botón Flecha Derecha */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 backdrop-blur-md"
                aria-label="Siguiente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-5 right-5 text-left">
                <h4 className="text-white font-bold text-base line-clamp-1">{nextMember.name}</h4>
                <p className="text-gray-400 text-[10px] font-semibold tracking-wider uppercase line-clamp-1">{nextMember.role}</p>
              </div>
            </div>

          </div>

          {/* INDICADORES DE PAGINACIÓN (DOTS) EN DESKTOP */}
          <div className="hidden lg:flex items-center justify-center gap-3 mt-10">
            {teamMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-brand-red' 
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir al integrante ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TeamLeadership;