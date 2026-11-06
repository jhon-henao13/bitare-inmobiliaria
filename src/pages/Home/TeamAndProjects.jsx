import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import viewpointImg from '../../assets/deliveredProjects/viewpoint.png';
import torreMeyaImg from '../../assets/deliveredProjects/torre-meya.png';
import paramountImg from '../../assets/comercialProjects/paramount-providencia.png';
import xeloziaImg from '../../assets/comercialProjects/xelozia-cdgranja.png';
import cassianovaImg from '../../assets/comercialProjects/cassianova-americana.png';

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

// --- DATOS DE LOS PROYECTOS PROPORCIONADOS ---
const deliveredProjects = [
  { id: 1, title: 'View Point | Ladrón de G.', subtitle: 'Aportación de Tierra', img: viewpointImg },
  { id: 2, title: 'Torre Meya | Ciudad del Sol', subtitle: ' ', img: torreMeyaImg },
  { id: 3, title: 'Nova | Providencia', subtitle: ' ', img: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/INICIO/fotos+bitare-13+2.png' },
  { id: 4, title: 'Vivero Las Fuentes', subtitle: 'Aportación de Tierra', img: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/INICIO/fotos+bitare-11+1-1.png' },
];

const commercialProjects = [
  { id: 5, title: 'Paramount | Providencia', subtitle: ' ', img: paramountImg },
  { id: 6, title: 'Xelozia | Cd Granja', subtitle: ' ', img: xeloziaImg },
  { id: 7, title: 'Cassianova | Americana', subtitle: ' ', img: cassianovaImg },
];

// --- DATOS DEL EQUIPO CON ARREGLOS DE FOTOS MULTIPLES ---
const teamMembers = [
  { id: 1, name: 'Cristian Chávez', role: 'Fundador / Director General', images: [cristian1, cristian2, cristian3, cristian4, cristian5] },
  { id: 2, name: 'Daniel Chávez', role: 'Asesor de ventas', images: [daniel1, daniel2, daniel3] },
  { id: 3, name: 'Luis Madrigal', role: 'Director Comercial', images: [luis1, luis2, luis3, luis4, luis5] },
  { id: 4, name: 'Luisa Huerta', role: 'Asesora de Ventas', images: [luisa1, luisa2, luisa3] },
  { id: 5, name: 'Angie Cabada', role: 'Asesora de Ventas', images: [angie1, angie2, angie3] },
  { id: 6, name: 'Ali Rueda', role: 'Asesora de Ventas', images: [aliImg] },
];

/* COMPONENTE INTERNO: Tarjeta de Proyecto Animada */
const ProjectCarouselCard = ({ categoryTitle, projects, intervalDelay }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, intervalDelay);
    return () => clearInterval(timer);
  }, [projects.length, intervalDelay]);

  return (
    <Link to="/desarrollos" className="flex flex-col group overflow-hidden bg-transparent">
      <div className="bg-brand-red text-white text-center py-2 text-md md:text-base font-bold tracking-widest uppercase z-20 mx-6">
        {categoryTitle}
      </div>
      <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden cursor-pointer">
        <AnimatePresence mode="wait">
          <motion.img
            key={projects[index].id}
            src={projects[index].img}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/20 to-transparent z-10" />
        <div className="absolute top-4 right-4 bg-white text-brand-red rounded-full p-2.5 z-20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
          <ArrowUpRight size={22} strokeWidth={2.5} />
        </div>
        <div className="absolute bottom-6 left-0 w-full px-6 z-20 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[index].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-md">{projects[index].title}</h3>
              <p className="text-gray-300 text-base md:text-lg mt-1">{projects[index].subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
};

/* COMPONENTE DE TARJETA DE EQUIPO CON MINI-CARRUSEL INTERNO */
const TeamMemberCard = ({ member }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const nextPose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev + 1) % member.images.length);
  };

  const prevPose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev - 1 + member.images.length) % member.images.length);
  };

  return (
    <div className="w-full max-w-sm">
      <Link 
        to="/nosotros" 
        className="relative group overflow-hidden block w-full h-[570px] cursor-pointer shadow-md border border-[#6e6d6e]/60 bg-[#1b1c1e]"
      >
        {/* Imagen actual con AnimatePresence para transiciones suaves */}
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImgIdx}
            src={member.images[currentImgIdx]} 
            alt={member.name} 
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-opacity pointer-events-none" />

        {/* Controles de Mini-Carrusel Interno (Aparecen al hacer Hover si hay más de 1 foto) */}
        {member.images.length > 1 && (
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-auto">
            <button 
              onClick={prevPose}
              className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-brand-red transition-all shadow-lg"
              title="Pose anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextPose}
              className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-brand-red transition-all shadow-lg"
              title="Siguiente pose"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Indicadores de Poses (Puntitos inferiores) */}
        {member.images.length > 1 && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {member.images.map((_, i) => (
              <span 
                key={i} 
                className={`h-1.5 rounded-full transition-all ${i === currentImgIdx ? 'w-5 bg-brand-red' : 'w-1.5 bg-white/50'}`} 
              />
            ))}
          </div>
        )}

        {/* Minicard inferior con nombre y cargo */}
        <div className="absolute bottom-4 left-4 right-4 bg-brand-black/95 p-3.5 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-2xl border-l-2 border-brand-red z-20">
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide">{member.name}</h4>
            <p className="text-gray-400 text-xs mt-0.5">{member.role}</p>
          </div>
          <ArrowUpRight className="text-brand-red ml-3 flex-shrink-0" size={18} />
        </div>
      </Link>
      <div className="w-14 mx-auto h-[3px] bg-brand-red mt-4 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.4)] opacity-90" />
    </div>
  );
};

const TeamAndProjects = () => {
  return (
    <section 
      className="relative text-white py-28 px-4 md:px-12 lg:px-20 overflow-hidden font-sans"
      style={{ backgroundColor: '#2a2b2d' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-3xl transform rotate-12 shadow-[0_20px_50px_rgba(27,28,30,0.9)] border border-white/5" style={{ backgroundColor: '#1b1c1e' }} />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-2xl transform -rotate-12 shadow-[0_25px_60px_rgba(27,28,30,0.8)] border border-white/5" style={{ backgroundColor: '#1b1c1e' }} />
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] rounded-3xl transform rotate-45 shadow-[0_30px_70px_rgba(27,28,30,0.9)] border border-white/5" style={{ backgroundColor: '#1b1c1e' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECCIÓN 1: EL EQUIPO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Las mentes detrás de Bitáre</h2>
            <p className="text-gray-200 text-base md:text-lg max-w-3xl !leading-snug">
              Conoce a la directiva que transforma la arquitectura de vanguardia en certidumbre financiera, respaldados por una red de aliados constructores de clase mundial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6 items-center justify-items-center max-w-6xl mx-auto">
            {teamMembers.map((member, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={member.id} 
                  className={`w-full max-w-sm transition-transform duration-500 ${
                    isEven ? 'translate-y-0' : 'lg:translate-y-6'
                  } ${idx === 5 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md' : ''}`}
                >
                  <TeamMemberCard member={member} />
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* SECCIÓN 2: PROYECTOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Explora lo más relevante</h2>
            <p className="text-gray-300 text-base md:text-lg font-medium !leading-relaxed">
              Ubicaciones estratégicas diseñadas para habitar o rentar con alto rendimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <ProjectCarouselCard 
              categoryTitle="Desarrollos Entregados" 
              projects={deliveredProjects} 
              intervalDelay={4000} 
            />
            <ProjectCarouselCard 
              categoryTitle="Proyectos en Comercialización" 
              projects={commercialProjects} 
              intervalDelay={4500} 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamAndProjects;