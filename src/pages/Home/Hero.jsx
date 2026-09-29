import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import bgHero from '../../assets/background-hero.png';
import bgHeroMobile from '../../assets/background-hero-mobile.png';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center">
      {/* Background Image Responsivo (Cambia automáticamente en mobile y desktop) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${bgHeroMobile})` }}
      />
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${bgHero})` }}
      />
      
      {/* 1. Gradiente vertical superior: Intenso arriba, desvanece a transparente en la mitad */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/95 via-black/40 to-transparent pointer-events-none"></div>
      
      {/* 2. Gradiente lateral izquierdo para reforzar la lectura del texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent w-full md:w-2/3 pointer-events-none"></div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-8 md:px-16 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-4xl flex flex-col"
        >
          {/* Subtítulo / Categoría (Ordenado primero en mobile con 'order-1', y abajo del título en desktop con 'md:order-2') */}
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xs md:text-sm tracking-[0.25em] text-gray-200 uppercase mb-4 md:mb-8 font-medium order-1 md:order-2"
          >
            Desarrolladora - Inmobiliaria
          </motion.h2>

          {/* Título Principal (Ordenado segundo en mobile con 'order-2', y arriba en desktop con 'md:order-1') */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-snug mb-4 drop-shadow-[0_4px_3px_rgba(0,0,0,0.8)] order-2 md:order-1">
            Inversión inteligente.<br />
            Arquitectura que trasciende
          </h1>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-red text-white font-extrabold py-3 px-6 rounded flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg order-3 w-fit mt-2"
          >
            Ver Portafolio <ArrowRight size={18} strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;