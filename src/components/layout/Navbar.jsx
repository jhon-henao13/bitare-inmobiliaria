import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Desarrollos', path: '/desarrollos' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contácto', path: '/contacto' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-40 px-6 sm:px-12 lg:px-28 py-6 bg-transparent flex items-center justify-between"
    >
      {/* Logo alineado a la izquierda */}
      <div className="flex-shrink-0 z-50">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logoImg} alt="Bitáre Real Estate" className="h-12 md:h-16 object-contain mix-blend-screen" />
        </Link>
      </div>

      {/* Enlaces de escritorio (centrados de forma absoluta) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-14 text-md font-semibold tracking-wide text-white">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className="hover:text-brand-red transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Botón Hamburger / Toggle Móvil */}
      <button 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center focus:outline-none group"
      >
        <span 
          className={`w-7 h-[2px] bg-white transition-all duration-300 ease-in-out transform ${
            isOpen ? 'rotate-45 translate-y-[7px]' : '-translate-y-2'
          }`}
        />
        <span 
          className={`w-7 h-[2px] bg-white transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
          }`}
        />
        <span 
          className={`w-7 h-[2px] bg-white transition-all duration-300 ease-in-out transform ${
            isOpen ? '-rotate-45 -translate-y-[7px]' : 'translate-y-2'
          }`}
        />
      </button>

      {/* Menú Móvil Desplegable Premium (Fullscreen / Drawer con Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#1b1c1e]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center px-8 md:hidden"
          >
            <div className="flex flex-col items-center space-y-8 text-center w-full">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white hover:text-brand-red transition-colors duration-300 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Elemento decorativo sutil en el menú móvil */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-16 h-[1px] bg-white/20 mt-6"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-400 text-xs tracking-widest uppercase"
              >
                Bitáre Real Estate
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;