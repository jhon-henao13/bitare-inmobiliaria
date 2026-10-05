const OfficeInfoMap = () => {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-2">
          Visítanos
        </span>
        <h2 className="text-3xl font-extrabold text-white mb-3">
          Oficinas y Ventas
        </h2>
        <p className="text-gray-400 text-base leading-relaxed">
          Estamos listos para ayudarte a encontrar o desarrollar la mejor oportunidad.
        </p>
      </div>

      {/* Grid de Información de Contacto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Dirección */}
        <div className="bg-[#1b1c1e] border border-white/10 p-5 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Dirección
          </div>
          <p className="text-white text-sm font-semibold">
            C. Aníbal 145, Vallarta Norte<br />
            CP 44690, Guadalajara, Jal.
          </p>
        </div>

        {/* Horarios */}
        <div className="bg-[#1b1c1e] border border-white/10 p-5 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Horarios
          </div>
          <p className="text-white text-sm font-semibold">
            Lun - Vie: 9:00 a 18:00 hrs.<br />
            Sábados: 9:00 a 14:00 hrs.
          </p>
        </div>

        {/* Teléfono */}
        <div className="bg-[#1b1c1e] border border-white/10 p-5 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            Teléfono
          </div>
          <p className="text-white text-sm font-semibold">
            +52 33 0000 0000
          </p>
        </div>

        {/* E-mail */}
        <div className="bg-[#1b1c1e] border border-white/10 p-5 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            E-mail
          </div>
          <p className="text-white text-sm font-semibold">
            contacto@bitare.mx
          </p>
        </div>
      </div>

      {/* Mapa Embed con Botón Google Maps */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1b1c1e] h-72">
        <iframe
          title="Ubicación Bitáre Real Estate"
          src="https://maps.google.com/maps?q=C.+Aníbal+145,+Vallarta+Norte,+Guadalajara,+Jal.&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          loading="lazy"
        />
        <a
          href="https://maps.google.com/?q=C.+Aníbal+145,+Vallarta+Norte,+Guadalajara,+Jal."
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-black/80 hover:bg-black text-white text-xs font-bold py-2.5 px-4 rounded-lg border border-white/20 backdrop-blur-md transition-all flex items-center gap-2 shadow-lg"
        >
          <svg className="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
          📍 Ver en Google Maps
        </a>
      </div>
    </div>
  );
};

export default OfficeInfoMap;