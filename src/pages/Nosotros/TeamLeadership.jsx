import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

// --- IMPORTACIONES DE LAS FOTOS DEL EQUIPO (SESIÓN PROFESIONAL) ---
import angie1 from '../../assets/team/profesional/angieCabada1.webp';
import angie2 from '../../assets/team/profesional/angieCabada2.webp';
import angie3 from '../../assets/team/profesional/angieCabada3.webp';

import cristian1 from '../../assets/team/profesional/cristianChavez1.webp';
import cristian2 from '../../assets/team/profesional/cristianChavez2.webp';
import cristian3 from '../../assets/team/profesional/cristianChavez3.webp';
import cristian4 from '../../assets/team/profesional/cristianChavez4.webp';
import cristian5 from '../../assets/team/profesional/cristianChavez5.webp';

import daniel1 from '../../assets/team/profesional/danielChavez1.webp';
import daniel2 from '../../assets/team/profesional/danielChavez2.webp';
import daniel3 from '../../assets/team/profesional/danielChavez3.webp';

import luis1 from '../../assets/team/profesional/luisMadrigal1.webp';
import luis2 from '../../assets/team/profesional/luisMadrigal2.webp';
import luis3 from '../../assets/team/profesional/luisMadrigal3.webp';
import luis4 from '../../assets/team/profesional/luisMadrigal4.webp';
import luis5 from '../../assets/team/profesional/luisMadrigal5.webp';

import luisa1 from '../../assets/team/profesional/luisaHuerta1.webp';
import luisa2 from '../../assets/team/profesional/luisaHuerta2.webp';
import luisa3 from '../../assets/team/profesional/luisaHuerta3.webp';

import aliImg from '../../assets/team/ali-rueda.jpeg'; // Ali se mantiene con su misma imagen

// --- FOTO GRUPAL 16:9 ---
import fullTeamImg from '../../assets/team/profesional/fullTeam16-9.webp';

const teamMembers = [
  {
    id: 1,
    name: 'Cristian Chávez',
    role: 'Fundador / Director General',
    quote: 'Desarrollamos con visión. Comercializamos con estrategia. Creamos valor a largo plazo.',
    bio: 'Lidera la estrategia global y la expansión corporativa de Bitáre, transformando cada desarrollo en un referente de valor y diseño.',
    images: [cristian1, cristian2, cristian3, cristian4, cristian5],
  },
  {
    id: 2,
    name: 'Daniel Chávez',
    role: 'Asesor de Ventas',
    quote: 'La certidumbre y la solidez financiera son los cimientos sobre los cuales edificamos legados duraderos.',
    bio: 'Encargado de la estructuración estratégica y consolidación de alianzas clave para el crecimiento financiero de los proyectos.',
    images: [daniel1, daniel2, daniel3],
  },
  {
    id: 3,
    name: 'Luis Madrigal',
    role: 'Director Comercial',
    quote: 'Entender las necesidades del mercado es la clave para conectar cada espacio con la inversión y el estilo de vida ideal.',
    bio: 'Especialista en la dirección de fuerzas de venta de alto rendimiento y posicionamiento comercial de desarrollos exclusivos.',
    images: [luis1, luis2, luis3, luis4, luis5],
  },
  {
    id: 4,
    name: 'Luisa Huerta',
    role: 'Asesora de Ventas',
    quote: 'Cada cliente busca algo único; nuestra misión es convertir esa visión en una realidad tangible con atención de primer nivel.',
    bio: 'Enfocada en la optimización de la experiencia del cliente y la gestión de relaciones comerciales de alto valor.',
    images: [luisa1, luisa2, luisa3],
  },
  {
    id: 5,
    name: 'Angie Cabada',
    role: 'Asesora de Ventas',
    quote: 'La pasión por el detalle y la cercanía con nuestros clientes aseguran transacciones exitosas y relaciones a largo plazo.',
    bio: 'Experta en estrategias de comercialización y acompañamiento personalizado en cada etapa del proceso inmobiliario.',
    images: [angie1, angie2, angie3],
  },
  {
    id: 6,
    name: 'Ali Rueda',
    role: 'Asesora de Ventas',
    quote: 'La confianza se construye escuchando y ofreciendo la mejor opción para cada estilo de vida.',
    bio: 'Dedicada a brindar un asesoramiento inmobiliario cercano, transparente y altamente profesional en cada etapa de la inversión.',
    images: [aliImg],
  },
];

const TeamLeadership = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [memberPoseIndices, setMemberPoseIndices] = useState({});

  const prevIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
  const nextIndex = (currentIndex + 1) % teamMembers.length;

  const handlePrev = () => setCurrentIndex(prevIndex);
  const handleNext = () => setCurrentIndex(nextIndex);

  const activeMember = teamMembers[currentIndex];
  const prevMember = teamMembers[prevIndex];
  const nextMember = teamMembers[nextIndex];

  // Manejo de cambio de pose individual para las tarjetas de preview lateral y central
  const handlePoseChange = (memberId, direction, totalImages, e) => {
    e.stopPropagation();
    setMemberPoseIndices((prev) => {
      const current = prev[memberId] || 0;
      let updated;
      if (direction === 'next') {
        updated = (current + 1) % totalImages;
      } else {
        updated = (current - 1 + totalImages) % totalImages;
      }
      return { ...prev, [memberId]: updated };
    });
  };

  const getPoseIndex = (memberId) => memberPoseIndices[memberId] || 0;

  return (
    <section className="relative bg-brand-black text-white py-24 px-4 sm:px-8 lg:px-12 overflow-hidden font-sans select-none">
      {/* Resplandor sutil de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ENCABEZADO TIPO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end mb-12 lg:mb-16 pb-8 border-b border-white/10">
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
          <div className="md:col-span-4">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Personas que creen en el poder transformador de los espacios. Nuestro equipo combina experiencia, visión y un profundo compromiso con un desarrollo inmobiliario con sentido humano.
            </p>
          </div>
          <div className="md:col-span-3 md:text-right hidden md:block">
            <p className="text-[11px] lg:text-xs font-bold tracking-[0.35em] text-gray-400 uppercase !leading-snug">
              MÁS QUE PROYECTOS, <br />
              <span className="text-white">LEGADOS</span>
            </p>
          </div>
        </div>

        {/* SLIDER DE LIDERAZGO */}
        <div className="relative mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">

            {/* TARJETA IZQUIERDA (PREVIEW) */}
            <div 
              onClick={handlePrev}
              className="hidden lg:block lg:col-span-2 relative h-[480px] rounded-2xl overflow-hidden cursor-pointer group border border-white/5 hover:border-brand-red/40 transition-all duration-500 bg-[#1b1c1e]"
            >
              <img 
                src={prevMember.images[getPoseIndex(prevMember.id)]} 
                alt={prevMember.name} 
                className="w-full h-full object-cover object-top grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 backdrop-blur-md"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="absolute bottom-6 left-5 right-5 text-left">
                <h4 className="text-white font-bold text-base line-clamp-1">{prevMember.name}</h4>
                <p className="text-gray-400 text-[10px] font-semibold tracking-wider uppercase line-clamp-1">{prevMember.role}</p>
              </div>
            </div>

            {/* TARJETA CENTRAL DESTACADA */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#1b1c1e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 relative group/main"
                >
                  {/* Foto del integrante con Carrusel Interno de Poses */}
                  <div className="md:col-span-5 relative h-72 sm:h-96 md:h-full min-h-[380px] bg-black">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={getPoseIndex(activeMember.id)}
                        src={activeMember.images[getPoseIndex(activeMember.id)]} 
                        alt={activeMember.name} 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover object-top grayscale contrast-110"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1e] via-transparent to-transparent md:hidden" />

                    {/* Botones de navegación para las poses múltiples */}
                    {activeMember.images.length > 1 && (
                      <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover/main:opacity-100 transition-opacity duration-300 z-20">
                        <button 
                          onClick={(e) => handlePoseChange(activeMember.id, 'prev', activeMember.images.length, e)}
                          className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-brand-red transition-all shadow-xl"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button 
                          onClick={(e) => handlePoseChange(activeMember.id, 'next', activeMember.images.length, e)}
                          className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-brand-red transition-all shadow-xl"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    )}

                    {/* Indicador de poses en esquina superior */}
                    {activeMember.images.length > 1 && (
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex gap-1 z-20">
                        {activeMember.images.map((_, i) => (
                          <span 
                            key={i} 
                            className={`h-1.5 rounded-full transition-all ${i === getPoseIndex(activeMember.id) ? 'w-4 bg-brand-red' : 'w-1.5 bg-white/40'}`} 
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Detalle y Cita */}
                  <div className="md:col-span-7 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between relative bg-[#1b1c1e]">
                    <div className="text-brand-red text-4xl lg:text-5xl font-serif font-bold leading-none mb-2 opacity-80">
                      “
                    </div>

                    <div>
                      <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-snug mb-6 tracking-wide">
                        {activeMember.quote}
                      </p>
                      <div className="w-12 h-[3px] bg-brand-red mb-6" />
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                        {activeMember.name}
                      </h3>
                      <p className="text-brand-red text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
                        {activeMember.role}
                      </p>
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

            {/* TARJETA DERECHA (PREVIEW) */}
            <div 
              onClick={handleNext}
              className="hidden lg:block lg:col-span-2 relative h-[480px] rounded-2xl overflow-hidden cursor-pointer group border border-white/5 hover:border-brand-red/40 transition-all duration-500 bg-[#1b1c1e]"
            >
              <img 
                src={nextMember.images[getPoseIndex(nextMember.id)]} 
                alt={nextMember.name} 
                className="w-full h-full object-cover object-top grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 backdrop-blur-md"
                aria-label="Siguiente"
              >
                <ChevronRight size={20} />
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

        {/* ========================================================
            SECCIÓN ESTELAR: FOTO GRUPAL (FULL TEAM 16:9)
        ======================================================== */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-[#1b1c1e] group"
        >
          <div className="relative h-[320px] sm:h-[450px] lg:h-[550px] w-full overflow-hidden">
            <img 
              src={fullTeamImg} 
              alt="Equipo Bitáre" 
              className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
            
            <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 z-10">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-brand-red" size={20} />
                <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">
                  UNIDOS POR UN PROPÓSITO
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Equipo Bitáre
              </h3>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl mt-2">
                Talento, arquitectura y estrategia comercial consolidando desarrollos únicos que trascienden en el tiempo.
              </p>
            </div>
          </div>
        </motion.div> */}

      </div>
    </section>
  );
};

export default TeamLeadership;