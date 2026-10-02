import { useState } from 'react';
import LeadFormModal from '../../../components/LeadFormModal';

const SidebarCard = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const amenidadesTexto = data.amenidades && data.amenidades.length > 0
    ? data.amenidades.join(', ')
    : 'Amenidades exclusivas por anunciar';

  // ⚠️ Cambia por el WhatsApp real de Bitáre
  const WHATSAPP_NUMBER = '521234567890';

  return (
    <>
      <div className="sticky top-28 bg-[#1b1c1e] border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6">
        {/* Logotipo del desarrollo (imagen desde Sanity) */}
        <div className="w-24 h-24 bg-gradient-to-br from-brand-red/20 to-black/80 rounded-full border border-white/10 mx-auto flex items-center justify-center p-3 shadow-inner overflow-hidden">
          {data.logotipoUrl ? (
            <img
              src={data.logotipoUrl}
              alt={`Logotipo ${data.nombre}`}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-center">
              <span className="block text-xl font-extrabold text-white tracking-widest">BITÁRE</span>
              <span className="text-[9px] text-brand-red font-semibold uppercase tracking-widest">DEVELOPMENT</span>
            </div>
          )}
        </div>

        <div className="border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-brand-red mb-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Número de residencias</span>
          </div>
          <p className="text-white font-extrabold text-lg">
            {data.residencias ? `${data.residencias} departamentos de lujo` : 'Por definir'}
          </p>
        </div>

        <div className="border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-brand-red mb-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/></svg>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Amenidades destacadas</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{amenidadesTexto}</p>
        </div>

        <div className="border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-brand-red mb-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Fecha de apertura</span>
          </div>
          <p className="text-white font-extrabold text-lg">{data.fechaApertura || 'Próximamente'}</p>
        </div>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="block w-full text-center bg-brand-red hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] uppercase tracking-wider text-sm"
        >
          Hablar con un Asesor
        </button>
      </div>

      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        propiedad={data.nombre || ''}
        whatsappNumber={WHATSAPP_NUMBER}
      />
    </>
  );
};

export default SidebarCard;