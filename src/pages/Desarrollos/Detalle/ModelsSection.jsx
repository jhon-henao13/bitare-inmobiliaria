import { useState, useEffect } from 'react';

const ModelsSection = ({ modelos }) => {
  const [activeModel, setActiveModel] = useState(null);
  const [vista, setVista] = useState('render'); // 'render' | 'plano'

  useEffect(() => {
    if (modelos && modelos.length > 0) {
      setActiveModel(modelos[0]);
      setVista(modelos[0].renderUrl ? 'render' : 'plano');
    } else {
      setActiveModel(null);
    }
  }, [modelos]);

  if (!modelos || modelos.length === 0) {
    return (
      <section className="border-t border-white/10 pt-10">
        <h2 className="text-2xl font-extrabold text-white mb-6">Modelos</h2>
        <p className="text-gray-400 text-sm">No hay modelos de departamento registrados para este desarrollo.</p>
      </section>
    );
  }

  if (!activeModel) return null;

  const hasRender = !!activeModel.renderUrl;
  const hasPlano = !!activeModel.planoUrl;
  const imagenActual = vista === 'render' ? activeModel.renderUrl : activeModel.planoUrl;

  const seleccionarModelo = (mod) => {
    setActiveModel(mod);
    setVista(mod.renderUrl ? 'render' : 'plano');
  };

  return (
    <section className="border-t border-white/10 pt-10">
      <h2 className="text-2xl font-extrabold text-white mb-6">Modelos</h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#1b1c1e] border border-white/10 p-6 sm:p-8 rounded-2xl">
        {/* Selector de Modelos */}
        <div className="md:col-span-5 space-y-3">
          {modelos.map((mod) => (
            <button
              key={mod._key || mod.nombre}
              onClick={() => seleccionarModelo(mod)}
              className={`w-full text-left p-4 rounded-xl font-bold transition-all flex items-center justify-between border ${
                activeModel?._key === mod._key || activeModel?.nombre === mod.nombre
                  ? 'bg-brand-red text-white border-brand-red shadow-lg'
                  : 'bg-black/40 text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              <span>{mod.nombre}</span>
              <span className="text-xs opacity-80">{mod.superficie}</span>
            </button>
          ))}
        </div>

        {/* Vista Previa */}
        <div className="md:col-span-7 bg-white rounded-xl p-4 overflow-hidden border border-white/10 shadow-xl">
          {/* Toggle Plano/Render si existen ambos */}
          {hasRender && hasPlano && (
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setVista('render')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  vista === 'render' ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                Render
              </button>
              <button
                onClick={() => setVista('plano')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  vista === 'plano' ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                Plano
              </button>
            </div>
          )}

          {imagenActual ? (
            <img
              src={imagenActual}
              alt={`${vista === 'render' ? 'Render' : 'Plano'} ${activeModel.nombre}`}
              className="w-full h-64 sm:h-80 object-contain hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-64 sm:h-80 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Sin imagen disponible
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center text-gray-800 text-xs font-semibold">
            <span>Recámaras: {activeModel.recamaras ?? '—'}</span>
            <span>Baños: {activeModel.banos ?? '—'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;