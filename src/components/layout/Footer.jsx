import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import logoImg from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-brand-red text-white py-12 px-6 md:px-12 lg:px-20 font-sans border-t border-red-700/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
        
        {/* COLUMNA 1: Logo Bitáre (4 columnas) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 flex items-center"
        >
          <Link to="/" className="inline-block">
            <img 
              src={logoImg} 
              alt="Bitáre Real Estate" 
              className="h-16 md:h-20 object-contain brightness-0 invert" 
            />
          </Link>
        </motion.div>

        {/* COLUMNA 2: Navegación Inicio + Redes Sociales (3 columnas) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 flex flex-col"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-wide relative inline-block">
            Inicio
            <span className="block w-16 h-[1.6px] bg-[#2a2b2d] mt-1"></span>
          </h3>
          <ul className="space-y-2 text-sm font-medium text-white/90 mb-6">
            <li>
              <Link to="/desarrollos" className="hover:text-black transition-colors duration-200">
                Desarrollos
              </Link>
            </li>
            <li>
              <Link to="/desarrollos" className="hover:text-black transition-colors duration-200">
                Propiedades
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-black transition-colors duration-200">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-black transition-colors duration-200">
                Inversionistas
              </Link>
            </li>
          </ul>

          {/* Iconos Redes Sociales */}
          <div className="flex items-center gap-3">
            {/* Instagram SVG nativo */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="p-1.5 hover:bg-white hover:text-brand-red rounded-full transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            {/* Facebook SVG nativo */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="p-1.5 hover:bg-white hover:text-brand-red rounded-full transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                stroke="none"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 5.025 3.658 9.184 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.201 22 17.042 22 12.017 22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>

            {/* WhatsApp (teléfono) */}
            <a 
              href="https://wa.me/5213310433598"
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              className="p-1.5 hover:bg-white hover:text-brand-red rounded-full transition-all duration-300"
            >
              <Phone size={18} />
            </a>
          </div>
        </motion.div>

        {/* COLUMNA 3: Contacto (2 columnas) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 flex flex-col"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-wide relative inline-block">
            Contacto
            <span className="block w-16 h-[1.6px] bg-[#2a2b2d] mt-1"></span>
          </h3>
          <ul className="space-y-2 text-sm font-medium text-white/90">
            <li>
              <Link to="/contacto" className="hover:text-black transition-colors duration-200">
                Oficinas
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-black transition-colors duration-200">
                Ventas
              </Link>
            </li>
            <li>
              <a href="mailto:contacto@bitare.mx" className="hover:text-black transition-colors duration-200">
                E-mail
              </a>
            </li>
          </ul>
        </motion.div>

        {/* COLUMNA 4: Dirección (3 columnas) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-3 flex flex-col"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-wide relative inline-block">
            Dirección
            <span className="block w-16 h-[1.6px] bg-[#2a2b2d] mt-1"></span>
          </h3>
          <p className="text-sm font-medium text-white/90 leading-relaxed">
            C. Aníbal 145 Vallarta Nte., 44690<br />
            Guadalajara, Jal.
          </p>
        </motion.div>

      </div>

      {/* Copyrigth inferior discreto */}
      {/* <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/20 text-center md:text-left text-xs text-white/70">
        © {new Date().getFullYear()} Bitáre Real Estate. Todos los derechos reservados.
      </div> */}
    </footer>
  );
};

export default Footer;