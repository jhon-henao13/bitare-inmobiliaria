import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-40 px-28 py-6 bg-transparent flex items-center"
    >
      {/* Logo alineado a la izquierda por defecto */}
      <div className="flex-shrink-0 z-10">
        {/* Reemplaza el src con tu ruta real */}
        <img src="/src/assets/logo.png" alt="Bitáre Real Estate" className="h-16 object-contain mix-blend-screen" />
      </div>

      {/* Enlaces centrados de forma absoluta respecto al nav */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-14 text-md font-semibold tracking-wide">
        <Link to="/desarrollos" className="hover:text-brand-red transition-colors duration-300">Desarrollos</Link>
        <Link to="/nosotros" className="hover:text-brand-red transition-colors duration-300">Nosotros</Link>
        <Link to="/contacto" className="hover:text-brand-red transition-colors duration-300">Contácto</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;