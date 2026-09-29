import { motion } from 'framer-motion';
import bgHero from '../../assets/background-hero-desarrollos.jpg';

const HeroDesarrollos = () => {
  return (
    <section className="relative w-full h-[65vh] min-h-[480px] md:h-[75vh] flex items-center justify-start overflow-hidden font-sans">
      {/* Imagen de Fondo en escala de grises / tonalidad oscura */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter grayscale contrast-125"
        style={{ backgroundImage: `url(${bgHero})` }}
      />

      {/* Overlay Oscuro para contraste y legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-black/10" />

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight !leading-[1.15]">
            Portafolio de Desarrollos <br />
            <span className="text-brand-red">Bitáre.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-gray-300 text-base md:text-lg font-normal leading-relaxed max-w-xl"
          >
            Explora nuestros proyectos residenciales y comerciales diseñados bajo los más altos estándares de arquitectura, plusvalía y ubicación estratégica.
          </motion.p>
        </motion.div>
      </div>

      {/* Sombra suave en el borde inferior para integrar con la siguiente sección */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-black to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroDesarrollos;