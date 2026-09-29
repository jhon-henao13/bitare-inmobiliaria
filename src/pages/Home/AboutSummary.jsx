import { motion } from 'framer-motion';
import twoSectionImg from '../../assets/twosection.png';

const AboutSummary = () => {
  return (
    <section className="relative bg-white text-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Patrón de puntos superior (Dot matrix) */}
      <div 
        className="absolute top-0 left-0 w-full h-10 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#9CA3AF 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
          backgroundPosition: 'center top'
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* COLUMNA IZQUIERDA: Imagen recortada escalonada */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center lg:justify-start"
        >
          <img 
            src={twoSectionImg} 
            alt="Arquitectura e inversión inmobiliaria" 
            className="w-full max-w-md lg:max-w-none h-auto object-contain drop-shadow-md"
          />
        </motion.div>

        {/* COLUMNA DERECHA: Textos, Métricas con líneas rojas y Línea de tiempo */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Encabezado y Subtítulo con desplazamiento negativo a la izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-10 lg:-ml-28 relative z-20 max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold !leading-[1.3] tracking-tight mb-4">
              <span className="text-black block">Diseñamos con intención,</span>
              <span className="text-gray-500 block">construimos con solidez y</span>
              <span className="text-gray-500 block">blindamos tu patrimonio.</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg font-medium tracking-wide">
              Respaldados por más de 30 años de trayectoria comercial en la ZMG.
            </p>
          </motion.div>

          {/* Bloque de Métricas / Estadísticas con Línea Roja Vectorial */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-20 pt-4"
          >
            {/* SVG responsive para dibujar exactamente el trazo rojo */}
            <div className="absolute inset-0 pointer-events-none hidden sm:block overflow-visible">
              <svg 
                className="w-full h-[150%] -top-12 absolute left-0 overflow-visible" 
                viewBox="0 0 600 150" 
                fill="none" 
                preserveAspectRatio="none"
              >
                {/* 
                  Estructura del trazo:
                  - Borde izquierdo y base de Stat 1
                  - Pico / Techo elevado en Stat 2
                  - Base, borde derecho ascendente y línea continua hacia arriba saliéndose del contenedor en Stat 3
                */}
                <path 
                  d="M 2 45 V 135 H 170 V 55 L 285 22 L 390 55 V 135 H 570 V -140 H 660" 
                  stroke="#d12a2a" 
                  strokeWidth="2" 
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </svg>
            </div>

            {/* Cuadrícula de Estadísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 px-2 py-4 relative z-10 sm:border-0 border-l-2 border-brand-red pl-3 sm:pl-1">
              
              {/* Stat 1 */}
              <div className="flex flex-col justify-end sm:pl-2 pb-2 max-w-2xl">
                <span className="text-3xl sm:text-4xl font-semibold text-black tracking-tight">10+</span>
                <span className="text-base text-gray-500 font-medium leading-tight mt-1">
                  Desarrollos<br />Propios
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col justify-start sm:px-2 pb-2">
                <span className="text-3xl sm:text-4xl font-semibold text-black tracking-tight">$8,000 +</span>
                <span className="text-base text-gray-500 font-medium leading-tight mt-1">
                  MDP<br />comercializados
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col justify-end sm:pl-4 pb-2">
                <span className="text-3xl sm:text-4xl font-semibold text-black tracking-tight">1,500+</span>
                <span className="text-base text-gray-500 font-medium leading-tight mt-1">
                  Unidades<br />comercializadas
                </span>
              </div>

            </div>
          </motion.div>

          {/* Línea de Tiempo / Hitos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2"
          >
            {/* Hito 1 */}
            <div className="bg-brand-red text-white p-3 sm:p-3.5 rounded-sm flex flex-col justify-center">
              <span className="text-base sm:text-lg font-extrabold leading-none mb-0">90s</span>
              <span className="text-lg sm:text-xl font-semibold text-white/90">Origen</span>
            </div>

            {/* Hito 2 */}
            <div className="bg-brand-red text-white p-3 sm:p-3.5 rounded-sm flex flex-col justify-center">
              <span className="text-base sm:text-lg font-extrabold leading-none mb-0">2018</span>
              <span className="text-lg sm:text-xl font-semibold text-white/90">Fundación</span>
            </div>

            {/* Hito 3 */}
            <div className="bg-brand-red text-white p-3 sm:p-3.5 rounded-sm flex flex-col justify-center">
              <span className="text-base sm:text-lg font-extrabold leading-none mb-0">2022</span>
              <span className="text-lg sm:text-xl font-semibold text-white/90">Evolución</span>
            </div>

            {/* Hito 4 (Con degradado/desvanecido a la derecha) */}
            <div className="bg-gradient-to-r from-brand-red via-brand-red/90 to-transparent text-white p-3 sm:p-3.5 rounded-sm flex flex-col justify-center pr-8">
              <span className="text-base sm:text-lg font-extrabold leading-none mb-0">Hoy</span>
              <span className="text-lg sm:text-xl font-semibold text-white/90">Liderazgo</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSummary;