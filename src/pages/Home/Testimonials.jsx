import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Star, Quote } from 'lucide-react';

// Datos de testimoniales con videos e información
const testimonialsData = [
  {
    id: 1,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/DESARROLLOS/image+18762.png',
    rating: 5,
    quote: 'Invertir con Bitáre fue la decisión más acertada para nuestro portafolio. Desde el primer momento demostraron transparencia total, calidad arquitectónica de primer nivel y un cumplimiento puntual en los rendimientos.',
    author: 'Ing. Alejandro Garza',
    role: 'Inversionista - Paramount Providencia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/INICIO/fotos+bitare-12+1-1.png',
    rating: 5,
    quote: 'Buscábamos un desarrollo con solidez financiera y respaldo real en la ZMG. La plusvalía que ha generado nuestra unidad en View Point superó todas nuestras proyecciones iniciales.',
    author: 'Dra. Sofía Sotomayor',
    role: 'Propietaria - View Point Ladrón de G.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    poster: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/DESARROLLOS/image+18763.png',
    rating: 5,
    quote: 'El trato personalizado de la directiva y la atención al detalle en los acabados marcan una diferencia abismal en comparación con otras desarrolladoras del sector.',
    author: 'Carlos & Elena Mendoza',
    role: 'Inversionistas - Xelozia Cd. Granja',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const current = testimonialsData[currentIndex];

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const togglePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="bg-white text-white py-20 px-4 md:px-12 lg:px-20 overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO: Título a la izquierda y Botones de navegación a la derecha */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-[40px] text-black font-extrabold !leading-tight max-w-2xl tracking-tight"
          >
            Quienes ya invirtieron con<br />
            <span className="text-brand-red">nosotros cuentan su historia.</span>
          </motion.h2>

          {/* Botones de Navegación (Anterios / Siguiente) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={handlePrev}
              aria-label="Testimonio anterior"
              className="p-3.5 bg-[#1e1e1e] hover:bg-brand-red text-white rounded-none transition-all duration-300 border border-white/10 hover:border-brand-red group cursor-pointer"
            >
              <ChevronLeft size={22} className="transform group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Testimonio siguiente"
              className="p-3.5 bg-brand-red hover:bg-red-700 text-white rounded-none transition-all duration-300 shadow-lg cursor-pointer group"
            >
              <ChevronRight size={22} className="transform group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* GRILLA DE CONTENIDO: Video (Izquierda) + Card de Testimonio (Derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* REPRODUCTOR DE VIDEO (Izquierda - 7 columnas) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative bg-[#181818] overflow-hidden rounded-sm min-h-[320px] sm:min-h-[420px] flex items-center justify-center group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full relative"
              >
                <video
                  ref={videoRef}
                  src={current.videoUrl}
                  poster={current.poster}
                  className="w-full h-full object-cover max-h-[480px]"
                  controls={isPlaying}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Overlay Oscuro con Botón Play cuando no está reproduciendo */}
                {!isPlaying && (
                  <div 
                    onClick={togglePlayVideo}
                    className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center cursor-pointer"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 bg-brand-red/90 text-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/20 pl-1"
                    >
                      <Play size={34} fill="white" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* TARJETA DE TESTIMONIO (Derecha - 5 columnas) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 bg-[#161616] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border border-white/5"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full justify-between relative z-10"
              >
                {/* Estrellas de Calificación */}
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-brand-red text-brand-red" />
                    ))}
                  </div>

                  {/* Cita en texto */}
                  <p className="text-gray-200 text-base md:text-lg font-normal leading-relaxed italic mb-8">
                    "{current.quote}"
                  </p>
                </div>

                {/* Info del Autor con Avatar */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img 
                    src={current.avatar} 
                    alt={current.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-red/50"
                  />
                  <div>
                    <h3 className="text-white font-bold text-base tracking-wide">{current.author}</h3>
                    <p className="text-gray-400 text-xs font-medium mt-0.5">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Icono de Comillas Marcapasos en la esquina inferior derecha */}
            <Quote 
              size={120} 
              className="absolute -bottom-6 -right-6 text-white/[0.03] pointer-events-none transform rotate-180" 
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;