const NearbySection = ({ lugares, mapaUrl }) => {
  const listaLugares = lugares || [];

  return (
    <section className="border-t border-white/10 pt-10">
      <h2 className="text-2xl font-extrabold text-white mb-6">Lugares de interés cercanos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Lista de lugares */}
        {listaLugares.length > 0 ? (
          <ul className="space-y-3">
            {listaLugares.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm bg-[#1b1c1e] p-3 rounded-lg border border-white/5">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm">No hay lugares cercanos registrados.</p>
        )}

        {/* Embed / Contenedor del Mapa */}
        <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#1b1c1e] flex items-center justify-center">
          {mapaUrl ? (
            <iframe
              title="Ubicación del desarrollo"
              src={mapaUrl}
              className="w-full h-full border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              loading="lazy"
            />
          ) : (
            <span className="text-gray-500 text-sm">Mapa no disponible</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default NearbySection;