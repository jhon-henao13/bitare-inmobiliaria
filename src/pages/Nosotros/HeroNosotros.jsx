import { motion } from 'framer-motion';
import bgHeroNosotros from '../../assets/background-hero-nosotros.png';

const HeroNosotros = () => {
  return (
    <section className="relative w-full overflow-hidden">
      
      {/* =========================================================
        1. VISTA MÓVIL (Mobile): Altura controlada, sin recortes y texto adaptado
      ========================================================= */}
      <div 
        className="relative w-full h-[52vh] min-h-[420px] bg-cover bg-center bg-no-repeat flex items-center px-6 md:hidden"
        style={{ backgroundImage: `url(${bgHeroNosotros})` }}
      >
        {/* Overlays para lectura impecable en móvil */}
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        
        {/* Contenido Móvil */}
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start justify-center space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight !leading-snug drop-shadow-2xl text-left">
              Una Trayectoria Construida con <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Experiencia y Visión
              </span>
            </h1>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "70px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-brand-red rounded-full mt-1"
            />
          </motion.div>
        </div>
      </div>


      {/* =========================================================
        2. VISTA DESKTOP / TABLET (md y superior): Exactamente igual al original
      ========================================================= */}
      <div className="hidden md:block relative w-full">
        <img 
          src={bgHeroNosotros} 
          alt="Trayectoria Bitáre" 
          className="w-full h-auto block object-cover grayscale-[30%] brightness-25"
        />

        {/* Overlay oscuro lateral izquierdo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none" />

        {/* Capa sutil de gradiente vertical superior */}
        <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

        {/* Contenido Desktop */}
        <div className="absolute inset-0 z-10 max-w-7xl w-full mx-auto px-12 lg:px-20 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start justify-center space-y-6 max-w-5xl"
          >
            <h1 className="md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight md:!leading-snug drop-shadow-2xl text-left">
              Una Trayectoria Construida con <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Experiencia y Visión
              </span>
            </h1>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "90px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-brand-red rounded-full mt-2"
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroNosotros;