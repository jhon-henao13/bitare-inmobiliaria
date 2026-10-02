import { useState, useEffect, useCallback } from 'react';
import { Bath, LayoutGrid, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = ({ data }) => {
  const galeria = data.galeria || [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => { setSelectedIndex(0); }, [data]);

  const selectedImg = galeria[selectedIndex];

  // Navegación con teclado en el lightbox
  const handleKey = useCallback((e) => {
    if (!lightboxOpen) return;
    if (e.key === 'Escape') setLightboxOpen(false);
    if (e.key === 'ArrowRight') setSelectedIndex(i => (i + 1) % galeria.length);
    if (e.key === 'ArrowLeft') setSelectedIndex(i => (i - 1 + galeria.length) % galeria.length);
  }, [lightboxOpen, galeria.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <div className="space-y-6">
      {/* Encabezado */}
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

      {/* Imagen Principal — natural, cap 620px, clic para abrir lightbox */}
      <button
        type="button"
        onClick={() => selectedImg && setLightboxOpen(true)}
        className="w-full max-h-[620px] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl bg-black/40 flex items-center justify-center cursor-zoom-in group"
      >
        {selectedImg ? (
          <img
            src={selectedImg.url}
            alt={selectedImg.alt || data.nombre}
            className="w-full h-auto max-h-[620px] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
          />
        ) : (
          <span className="text-gray-500 text-sm py-24">Sin imágenes en la galería</span>
        )}
      </button>

      {/* Miniaturas */}
      {galeria.length > 0 && (
        <div className="grid grid-cols-5 gap-3">
          {galeria.map((img, idx) => (
            <button
              key={img._key || idx}
              onClick={() => setSelectedIndex(idx)}
              className={`h-20 rounded-lg overflow-hidden border transition-all ${
                selectedIndex === idx ? 'border-brand-red ring-2 ring-brand-red/30' : 'border-white/10 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={img.alt || `Vista ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Barra de especificaciones rápidas */}
      <div className="flex flex-wrap items-center gap-6 bg-[#1b1c1e] border border-white/10 p-4 rounded-xl text-xs sm:text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <Bath className="w-5 h-5 text-brand-red" />
          <span>{data.banosPorHabitacion || 'Baños por definir'}</span>
        </div>
        <div className="h-4 w-[1px] bg-white/20" />
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-brand-red" />
          <span>{data.tipologias || 'Tipologías por definir'}</span>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedImg && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(i => (i - 1 + galeria.length) % galeria.length); }}
            className="absolute left-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={48} />
          </button>

          <img
            src={selectedImg.url}
            alt={selectedImg.alt || data.nombre}
            className="max-w-[92vw] max-h-[88vh] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(i => (i + 1) % galeria.length); }}
            className="absolute right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight size={48} />
          </button>

          <span className="absolute bottom-6 text-white/60 text-sm">
            {selectedIndex + 1} / {galeria.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default GallerySection;