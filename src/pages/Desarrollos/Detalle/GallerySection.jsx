import { useState, useEffect } from 'react';
import { urlFor } from '../../../sanityClient'; // Ajusta la ruta para llegar a src/sanityClient.js

const GallerySection = ({ data }) => {
  // Validar si hay galería disponible
  const galeria = data.galeria || [];
  
  const [selectedImg, setSelectedImg] = useState(galeria[0]);

  // Sincronizar si la galería se carga asíncronamente
  useEffect(() => {
    if (galeria.length > 0) {
      setSelectedImg(galeria[0]);
    }
  }, [data]);

  return (
    <div className="space-y-6">
      {/* Badge y Encabezado */}
      <div>
        <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-sm tracking-widest uppercase inline-block mb-3">
          {data.estado}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
          {data.nombre}
        </h1>
        <p className="text-gray-400 text-sm flex items-center gap-2">
          <svg className="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
          {data.ubicacion}
        </p>
      </div>

      {/* Imagen Principal */}
      <div className="w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl bg-black/40 flex items-center justify-center">
        {selectedImg ? (
          <img 
            src={urlFor(selectedImg).url()} 
            alt={data.nombre} 
            className="w-full h-full object-cover transition-all duration-500" 
          />
        ) : (
          <span className="text-gray-500 text-sm">Sin imágenes en la galería</span>
        )}
      </div>

      {/* Miniaturas */}
      {galeria.length > 0 && (
        <div className="grid grid-cols-5 gap-3">
          {galeria.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImg(img)}
              className={`h-20 rounded-lg overflow-hidden border transition-all ${
                selectedImg === img ? 'border-brand-red ring-2 ring-brand-red/30' : 'border-white/10 opacity-60 hover:opacity-100'
              }`}
            >
              <img 
                src={urlFor(img).url()} 
                alt={`Vista ${idx}`} 
                className="w-full h-full object-cover" 
              />
            </button>
          ))}
        </div>
      )}

      {/* Barra de Especificaciones Rápidas */}
      <div className="flex items-center gap-6 bg-[#1b1c1e] border border-white/10 p-4 rounded-xl text-xs sm:text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
          <span>{data.residencias ? `${data.residencias} Residencias` : 'Residencias exclusivas'}</span>
        </div>
        <div className="h-4 w-[1px] bg-white/20" />
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          <span>{data.fechaApertura ? `Apertura: ${data.fechaApertura}` : 'Entrega programada'}</span>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;