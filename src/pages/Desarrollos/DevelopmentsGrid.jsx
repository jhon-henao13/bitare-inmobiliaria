import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useDesarrollos } from '../../hooks/useDesarrollos';
import { Link } from 'react-router-dom';

const DevelopmentsGrid = () => {
  const { desarrollos, loading, error } = useDesarrollos();

  if (loading) {
    return (
      <section className="bg-white text-white pt-16 pb-56 px-6 md:px-12 lg:px-20 font-sans">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-lg animate-pulse">Cargando desarrollos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white text-white pt-16 pb-56 px-6 md:px-12 lg:px-20 font-sans">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-500">Error al cargar los desarrollos. Intenta de nuevo más tarde.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white text-white pt-16 pb-56 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ENCABEZADO */}
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

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {desarrollos.map((project, index) => (
            <Link to={`/desarrollos/${project.slug}`} key={project._id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-[#161616] border border-white/10 hover:border-brand-red/50 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl max-w-[92%] lg:max-w-[86%] mx-auto w-full"
              >
                {/* Imagen con Crossfade */}
                <div className="relative w-full overflow-hidden bg-[#161616] aspect-[4/3]">
                  <img
                    src={project.imagenPrincipal}
                    alt={project.nombre}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {project.imagenHover && (
                    <img
                      src={project.imagenHover}
                      alt={`${project.nombre} alternativo`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105 pointer-events-none"
                    />
                  )}
                  {/* Badge de Estado */}
                  <div className="absolute bottom-0 left-0 z-20">
                    <span className="bg-brand-red text-white text-base font-black uppercase tracking-widest px-6 py-2 inline-block shadow-lg">
                      {project.estado}
                    </span>
                  </div>
                </div>

                {/* Información */}
                <div className="bg-white px-3 md:px-5 py-5 md:py-8 flex flex-col justify-between flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-brand-red transition-colors duration-300">
                      {project.nombre}
                    </h3>
                    {project.precioDesde && (
                      <div className="text-base text-gray-600 font-normal whitespace-nowrap">
                        Desde: <span className="text-black font-semibold text-base md:text-lg">{project.precioDesde}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#d12a2a] flex flex-wrap justify-between items-center gap-3 text-base md:text-lg text-gray-600 font-normal">
                    {project.residencias && <span>{project.residencias} unidades</span>}
                    {project.residencias && project.fechaApertura && (
                      <span className="text-brand-red font-semibold">|</span>
                    )}
                    {project.fechaApertura && <span>{project.fechaApertura}</span>}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}

          {/* TARJETA COMING SOON */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="bg-transparent border border-dashed border-white/15 hover:border-brand-red/40 transition-all duration-500 min-h-[380px] flex flex-col items-center justify-center p-8 text-center relative group overflow-hidden max-w-[92%] lg:max-w-[86%] mx-auto w-full"
          >
            <div className="absolute w-64 h-64 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-all duration-700 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-black/10 border border-black/20 flex items-center justify-center mb-6 text-brand-red group-hover:scale-110 transition-transform duration-300">
                <Sparkles size={28} />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-black/40 tracking-wider mb-2">
                Coming Soon
              </h3>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Corte diagonal de transición */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-72 md:h-80 bg-[#2a292e] pointer-events-none"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />
    </section>
  );
};

export default DevelopmentsGrid;