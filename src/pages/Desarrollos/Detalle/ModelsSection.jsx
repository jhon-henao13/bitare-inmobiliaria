import { useState, useEffect } from 'react';
import { urlFor } from '../../../sanityClient';

const ModelsSection = ({ modelos }) => {
  // Si no hay modelos o la lista está vacía, no mostramos nada (o un mensaje)
  if (!modelos || modelos.length === 0) {
    return (
      <section className="border-t border-white/10 pt-10">
        <h2 className="text-2xl font-extrabold text-white mb-6">Modelos</h2>
        <p className="text-gray-400 text-sm">No hay modelos de departamento registrados para este desarrollo.</p>
      </section>
    );
  }

  const [activeModel, setActiveModel] = useState(modelos[0]);

  // Actualizar el modelo activo si cambian los props del desarrollo
  useEffect(() => {
    if (modelos && modelos.length > 0) {
      setActiveModel(modelos[0]);
    }
  }, [modelos]);

  if (!activeModel) return null;

  return (
    <section className="border-t border-white/10 pt-10">
      <h2 className="text-2xl font-extrabold text-white mb-6">Modelos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#1b1c1e] border border-white/10 p-6 sm:p-8 rounded-2xl">
        {/* Selector de Modelos (Izquierda) */}
        <div className="md:col-span-5 space-y-3">
          {modelos.map((mod) => (
            <button
              key={mod.nombre || mod._key}
              onClick={() => setActiveModel(mod)}
              className={`w-full text-left p-4 rounded-xl font-bold transition-all flex items-center justify-between border ${
                activeModel?.nombre === mod.nombre
                  ? 'bg-brand-red text-white border-brand-red shadow-lg'
                  : 'bg-black/40 text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              <span>{mod.nombre}</span>
              <span className="text-xs opacity-80">{mod.superficie}</span>
            </button>
          ))}
        </div>

        {/* Vista Previa del Plano (Derecha) */}
        <div className="md:col-span-7 bg-white rounded-xl p-4 overflow-hidden border border-white/10 shadow-xl">
          {activeModel.plano ? (
            <img
              src={urlFor(activeModel.plano).url()}
              alt={`Plano ${activeModel.nombre}`}
              className="w-full h-64 sm:h-80 object-contain hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-64 sm:h-80 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Sin imagen de plano disponible
            </div>
          )}
          <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center text-gray-800 text-xs font-semibold">
            <span>Recámaras: {activeModel.recamaras}</span>
            <span>Baños: {activeModel.banos}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;