import { useState } from 'react';

const faqs = [
  {
    pregunta: "¿Quién es la empresa desarrolladora y qué garantía tengo de que entregarán en la fecha pactada?",
    respuesta: "BITÁRE REAL ESTATE. Nuestra mayor garantía es la trayectoria de nuestra familia en el medio inmobiliario desde antes de los años 80. Siempre contratamos gerencias de proyectos externas para auto-auditarnos y garantizar el cumplimiento estricto de los estándares de calidad y tiempos acordados. Además, estamos completamente validados por instituciones bancarias."
  },
  {
    pregunta: "¿Cuáles son los esquemas de pago o enganches que manejan en general?",
    respuesta: "Manejamos esquemas flexibles adaptados a cada proyecto: 25/25/50, 35/35/30, 30/70 y 90/10. En desarrollos seleccionados contamos con esquemas especiales desde 15/10/75."
  },
  {
    pregunta: "¿Aceptan créditos hipotecarios (Infonavit, Bancarios, Cofinavit) al momento de la escritura?",
    respuesta: "Sí, aceptamos y gestionamos créditos hipotecarios bancarios, Infonavit y Cofinavit al momento de la escrituración."
  },
  {
    pregunta: "¿Cómo funciona el proceso de apartado y firma del contrato de promesa de compraventa?",
    respuesta: "En la cita inicial se aparta la unidad (generalmente con $50,000 MXN). Se otorgan hasta 10 días para recabar la documentación y proceder a la firma del contrato donde se liquida el enganche. Posteriormente, nuestro equipo administrativo se encarga de la gestión de pagos recurrentes y facturación directa."
  },
  {
    pregunta: "¿Se puede visitar el showroom, departamento muestra o el terreno de la obra?",
    respuesta: "Sí, coordinamos visitas guiadas al showroom, departamento muestra o al terreno del proyecto de tu interés previa cita con uno de nuestros asesores."
  }
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="pt-16 border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-2">
          Resolvemos tus dudas
        </span>
        <h2 className="text-3xl font-extrabold text-white">
          Preguntas Frecuentes
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-[#1b1c1e] border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full text-left p-5 font-bold text-white flex justify-between items-center gap-4 hover:text-brand-red transition-colors text-sm sm:text-base"
            >
              <span>{faq.pregunta}</span>
              <span className={`transform transition-transform duration-300 text-brand-red font-bold ${openIdx === idx ? 'rotate-180' : ''}`}>
                ↓
              </span>
            </button>

            {openIdx === idx && (
              <div className="px-5 pb-5 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3">
                {faq.respuesta}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;