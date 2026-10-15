import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para activar el estado de contracción y fondo glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Desarrollos', path: '/desarrollos' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contácto', path: '/contacto' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-40 px-6 sm:px-12 lg:px-28 flex items-center justify-between transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'py-3.5 bg-[#1b1c1e]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      {/* Logo con reducción sutil al hacer scroll */}
      <div className="flex-shrink-0 z-50">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img 
            src={logoImg} 
            alt="Bitáre Real Estate" 
            className={`object-contain mix-blend-screen transition-all duration-500 ease-in-out ${
              scrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'
            }`} 
          />
        </Link>
      </div>

      {/* Enlaces de escritorio (centrados de forma absoluta) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-12 text-md lg:text-md font-semibold tracking-wide text-white">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className="relative py-1 hover:text-brand-red transition-colors duration-300 group"
          >
            {link.name}
            {/* Línea inferior animada muy elegante al hacer hover */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d12a2a] transition-all duration-300 group-hover:w-full" />
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
          className={`w-7 h-[3px] bg-[#d12a2a] transition-all duration-300 ease-in-out transform ${
            isOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-2'
          }`}
        />
        <span 
          className={`w-7 h-[3px] bg-[#d12a2a] transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
          }`}
        />
        <span 
          className={`w-7 h-[3px] bg-[#d12a2a] transition-all duration-300 ease-in-out transform ${
            isOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-2'
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
            className="fixed inset-0 w-full h-screen bg-[#1b1c1e]/98 backdrop-blur-2xl z-40 flex flex-col justify-center items-center px-8 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center space-y-8 text-center w-full py-20">
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