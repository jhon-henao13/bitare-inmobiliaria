import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

// Datos de los desarrollos basados en el diseño de referencia
const projectsData = [
  {
    id: 1,
    title: 'Paramount Providencia',
    price: '$6 MDP',
    badge: 'PREVENTA',
    units: '62 unidades',
    date: 'Dic 2028',
    size: 'De 49m² a 135m²',
    image: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/DESARROLLOS/image+18762.png'
  },
  {
    id: 2,
    title: 'Xelozia Ciudad Granja',
    price: '$4.8 MDP',
    badge: 'PREVENTA',
    units: '114 unidades',
    date: 'Dic 2027',
    size: 'De 70m² a 83m²',
    image: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/DESARROLLOS/image+18763.png'
  },
  {
    id: 3,
    title: 'Paramount Providencia',
    price: '$6 MDP',
    badge: 'VENTA',
    units: '102 unidades',
    date: 'Terminado',
    size: 'De 57m² a 92m²',
    image: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/INICIO/fotos+bitare-12+1-1.png'
  }
];

const DevelopmentsGrid = () => {
  return (
    <section className="relative bg-white text-white pt-16 pb-56 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-6"
          >
            Proyectos en Venta y Preventa
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-500 text-base md:text-lg max-w-xl font-medium !leading-relaxed"
          >
            Proyectos diseñados con intención, construidos con solidez y ubicados en las zonas de mayor plusvalía de Guadalajara.
          </motion.p>
        </div>

        {/* GRID DE 2 COLUMNAS (Como en la referencia) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* TARJETAS DE PROYECTOS */}
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-[#161616] border border-white/10 hover:border-brand-red/50 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Contenedor de Imagen */}
              <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden bg-[#1f1f1f]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Sombra suave para integración */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/80 via-transparent to-transparent opacity-60" />

                {/* Badge de Estado en la esquina inferior izquierda de la imagen */}
                <div className="absolute bottom-0 left-0">
                  <span className="bg-brand-red text-white text-base font-black uppercase tracking-widest px-6 py-2 inline-block shadow-lg">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Información del Proyecto */}
              <div className="bg-white px-3 md:px-5 py-5 md:py-8 flex flex-col justify-between flex-grow">
                {/* Título y Precio */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-brand-red transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="text-base text-gray-600 font-normal whitespace-nowrap">
                    Desde: <span className="text-black font-semibold text-base md:text-lg">{project.price}</span>
                  </div>
                </div>

                {/* Metadatos divididos por líneas verticales | */}
                <div className="pt-4 border-t border-[#d12a2a] flex flex-wrap justify-between items-center gap-3 text-base md:text-lg text-gray-600 font-normal">
                  <span>{project.units}</span>
                  <span className="text-brand-red font-semibold">|</span>
                  <span>{project.date}</span>
                  <span className="text-brand-red font-semibold">|</span>
                  <span>{project.size}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* TARJETA 4: COMING SOON */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="bg-transparent border border-dashed border-white/15 hover:border-brand-red/40 transition-all duration-500 min-h-[420px] flex flex-col items-center justify-center p-8 text-center relative group overflow-hidden"
          >
            {/* Resplandor decorativo de fondo */}
            <div className="absolute w-64 h-64 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-all duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-black/10 border border-black/20 flex items-center justify-center mb-6 text-brand-red group-hover:scale-110 transition-transform duration-300">
                <Sparkles size={28} />
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-black/40 tracking-wider mb-2">
                Coming Soon
              </h3>
              
              {/* <p className="text-gray-400 text-sm max-w-xs font-normal">
                Nuevas oportunidades de inversión estratégica en desarrollo.
              </p> */}
            </div>
          </motion.div>

        </div>
      </div>

      {/* CORTE DIAGONAL DE TRANSICIÓN EN EL FONDO (Como en el ejemplo) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/5 md:h-1/4 bg-[#2a292e] pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />
    </section>
  );
};

export default DevelopmentsGrid;