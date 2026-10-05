import ContactForm from './ContactForm';
import OfficeInfoMap from './OfficeInfoMap';
import FaqSection from './FaqSection';

const Contacto = () => {
  return (
    <main className="bg-brand-black min-h-screen pt-28 pb-20 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Banner de la Sección */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="bg-brand-red/10 text-brand-red border border-brand-red/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block">
            Atención Personalizada
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight !leading-[1.2]">
            Transformamos Oportunidades Inmobiliarias en Proyectos de Alto Valor
          </h1>
        </div>

        {/* Layout Principal 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <OfficeInfoMap />
          <ContactForm />
        </div>

        {/* Sección de Preguntas Frecuentes */}
        <FaqSection />

      </div>
    </main>
  );
};

export default Contacto;