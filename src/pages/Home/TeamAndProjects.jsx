import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// --- DATOS DE LOS PROYECTOS PROPORCIONADOS ---
const deliveredProjects = [
  {
    id: 1,
    title: 'View Point | Ladrón de G.',
    subtitle: 'Aportación de Tierra',
    img: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/INICIO/fotos+bitare-12+1-1.png'
  },
  {
    id: 2,
    title: 'Vivero Las Fuentes',
    subtitle: 'Aportación de Tierra',
    img: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/INICIO/fotos+bitare-11+1-1.png'
  },

  {
    id: 3,
    title: 'Nova | Providencia',
    subtitle: ' ',
    img: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/INICIO/fotos+bitare-13+2.png'
  }
];

const commercialProjects = [
  {
    id: 4,
    title: 'Paramount | Providencia',
    subtitle: ' ',
    img: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/DESARROLLOS/image+18762.png'
  },
  {
    id: 5,
    title: 'Xelozia | Cd Granja',
    subtitle: ' ',
    img: 'https://3dsvent.s3.us-east-1.amazonaws.com/bitare/DESARROLLOS/image+18763.png'
  },
  
];

// --- DATOS DEL EQUIPO (Ejemplo con placeholders profesionales) ---
const teamMembers = [
  { id: 1, name: 'Carlos Mendoza', role: 'Director General', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Roberto Alarcón', role: 'Director Comercial', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'David Silva', role: 'Director de Obra', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Fernando Ruiz', role: 'Finanzas', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop' },
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
      {/* Banner Superior Rojo */}
      <div className="bg-brand-red text-white text-center py-2 text-md md:text-base font-bold tracking-widest uppercase z-20 mx-6">
        {categoryTitle}
      </div>
      
      {/* Contenedor de Imagen Animada */}
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
        
        {/* Overlay Gradiente Oscuro en la base */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/20 to-transparent z-10" />

        {/* Icono Flotante Top Right (Hover) */}
        <div className="absolute top-4 right-4 bg-white text-brand-red rounded-full p-2.5 z-20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
          <ArrowUpRight size={22} strokeWidth={2.5} />
        </div>

        {/* Textos Informativos */}
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
              <p className="text-gray-300 text-xs md:text-sm mt-1">{projects[index].subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
};

const TeamAndProjects = () => {
  // Estado para el carrusel automático de equipo
//   const [teamIndex, setTeamIndex] = useState(0);

//   // Carrusel automático infinito de derecha a izquierda
//   useEffect(() => {
//     const teamTimer = setInterval(() => {
//       setTeamIndex((prev) => (prev + 1) % teamMembers.length);
//     }, 3000); // Velocidad de rotación (3 segundos)
//     return () => clearInterval(teamTimer);
//   }, []);

  return (
    <section 
      className="relative text-white py-28 px-4 md:px-12 lg:px-20 overflow-hidden font-sans"
      style={{ backgroundColor: '#2a2b2d' }}
    >
      {/* Elementos geométricos / Cubos texturizados de fondo con sombras y brillos claros (#1b1c1e) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-3xl transform rotate-12 shadow-[0_20px_50px_rgba(27,28,30,0.9)] border border-white/5" style={{ backgroundColor: '#1b1c1e' }} />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-2xl transform -rotate-12 shadow-[0_25px_60px_rgba(27,28,30,0.8)] border border-white/5" style={{ backgroundColor: '#1b1c1e' }} />
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] rounded-3xl transform rotate-45 shadow-[0_30px_70px_rgba(27,28,30,0.9)] border border-white/5" style={{ backgroundColor: '#1b1c1e' }} />
        <div className="absolute top-2/4 left-10 w-64 h-64 rounded-xl transform -rotate-6 shadow-[inset_0_2px_15px_rgba(255,255,255,0.05),0_15px_30px_rgba(27,28,30,0.8)]" style={{ backgroundColor: '#1b1c1e' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* =======================
            SECCIÓN 1: EL EQUIPO
        ======================== */}
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


          {/* Grilla estática del Equipo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 items-center justify-items-center max-w-6xl mx-auto">
            {teamMembers.map((member, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={member.id} 
                  className={`w-full transition-transform duration-500 ${
                    isEven ? 'translate-y-0' : 'md:translate-y-8 lg:translate-y-12'
                  }`}
                >
                  <Link 
                    to="/desarrollos" 
                    className="relative group overflow-hidden block w-full h-[340px] cursor-pointer shadow-md border border-[#6e6d6e]/60"
                  >
                    {/* Imagen del miembro (Gris por defecto, color en hover) */}
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-opacity" />

                    {/* Minicard estilo premium animada (Aparece inferior izquierda) */}
                    <div className="absolute bottom-4 left-4 bg-brand-black/95 p-3 flex items-center justify-between min-w-[180px] opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-2xl border-l-2 border-brand-red">
                      <div>
                        <h4 className="text-white font-bold text-sm tracking-wide">{member.name}</h4>
                        <p className="text-gray-400 text-xs mt-0.5">{member.role}</p>
                      </div>
                      <ArrowUpRight className="text-brand-red ml-3" size={18} />
                    </div>
                  </Link>

                  {/* Pequeña línea roja corta y centrada debajo de cada card de equipo */}
                  <div className="w-14 mx-auto h-[3px] bg-brand-red mt-4 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.4)] opacity-90" />
                </div>
              );
            })}
          </div>
        </motion.div>


        {/* =======================
            SECCIÓN 2: PROYECTOS
        ======================== */}
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

          {/* Grilla de 2 columnas para los Carruseles de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Carrusel Izquierdo - Entregados */}
            <ProjectCarouselCard 
              categoryTitle="Desarrollos Entregados" 
              projects={deliveredProjects} 
              intervalDelay={4000} // Cambia cada 4 segundos
            />
            
            {/* Carrusel Derecho - En Comercialización */}
            <ProjectCarouselCard 
              categoryTitle="Proyectos en Comercialización" 
              projects={commercialProjects} 
              intervalDelay={4500} // Ligeramente desfasado para que no cambien al mismo milisegundo
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamAndProjects;