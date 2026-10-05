import { motion } from 'framer-motion';
import torreMeyaImg from '../../assets/deliveredProjects/torre-meya.png';
import viewpointImg from '../../assets/deliveredProjects/viewpoint.png';
import id3Img from '../../assets/deliveredProjects/id3.png';
import id5Img from '../../assets/deliveredProjects/id5.png';

// Lista de proyectos entregados y aportaciones según la imagen de referencia
const deliveredProjects = [
  {
    id: 1,
    title: ' ',
    category: 'Proyecto Entregado',
    image: torreMeyaImg,
  },
  {
    id: 2,
    title: ' ',
    category: 'Aportación de Tierra',
    image: viewpointImg,
  },
  {
    id: 3,
    title: ' ',
    category: 'Proyecto Entregado',
    image: id3Img,
  },
  {
    id: 4,
    title: ' ',
    category: 'Aportación de Tierra',
    image: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/INICIO/fotos+bitare-11+1-1.png',
  },
  {
    id: 5,
    title: ' ',
    category: 'Aportación de Tierra',
    image: id5Img,
  },
];

const DeliveredProjects = () => {
  return (
    <section
      className="relative text-white pt-10 pb-24 px-4 md:px-12 lg:px-20 overflow-hidden font-sans"
      style={{ backgroundColor: '#2a2b2d' }}
    >
      {/* Elementos geométricos de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-3xl transform rotate-12 shadow-[0_20px_50px_rgba(27,28,30,0.9)] border border-white/5" style={{ backgroundColor: '#1b1c1e' }} />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-2xl transform -rotate-12 shadow-[0_25px_60px_rgba(27,28,30,0.8)] border border-white/5" style={{ backgroundColor: '#1b1c1e' }} />
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] rounded-3xl transform rotate-45 shadow-[0_30px_70px_rgba(27,28,30,0.9)] border border-white/5" style={{ backgroundColor: '#1b1c1e' }} />
        <div className="absolute top-2/4 left-10 w-64 h-64 rounded-xl transform -rotate-6 shadow-[inset_0_2px_15px_rgba(255,255,255,0.05),0_15px_30px_rgba(27,28,30,0.8)]" style={{ backgroundColor: '#1b1c1e' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ENCABEZADO */}
        <div className="mb-14 flex flex-col items-start md:items-end text-left">
          <div className="max-w-2xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 text-left !leading-tight"
            >
              Proyectos 100% Entregados <br className="hidden sm:block" />
              <span className="text-brand-red">y Aportaciones</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-300 text-base md:text-lg font-medium !leading-relaxed text-left"
            >
              La mejor evidencia de nuestro compromiso es el éxito de quienes ya invirtieron con nosotros.
            </motion.p>
          </div>
        </div>

        {/* GRID DE 2 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {deliveredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#1b1c1e] border border-white/10 hover:border-brand-red/50 transition-all duration-500 overflow-hidden shadow-2xl rounded-xs"
            >
              {/* Contenedor de la Imagen con aspect ratio vertical uniforme (3:4) */}
              <div className="relative w-full overflow-hidden bg-[#161616] aspect-[3/4]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Sombra de degradado para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                {/* Título */}
                <div className="absolute bottom-4 left-4 right-20 z-10">
                  <h3 className="text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-md">
                    {project.title}
                  </h3>
                </div>

                {/* Badge */}
                {project.category && (
                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="bg-black/70 backdrop-blur-md text-white text-[10px] md:text-xs font-medium px-3 py-1.5 rounded-xs border border-white/20 tracking-wider shadow-lg">
                      {project.category}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DeliveredProjects;