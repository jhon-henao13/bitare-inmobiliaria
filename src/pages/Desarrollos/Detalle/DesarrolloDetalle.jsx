import { useParams, Link } from 'react-router-dom';
import { useDesarrollo } from '../../../hooks/useDesarrollos';
import GallerySection from './GallerySection';
import SidebarCard from './SidebarCard';
import ModelsSection from './ModelsSection';
import NearbySection from './NearbySection';

const DesarrolloDetalle = () => {
  const { slug } = useParams();
  const { desarrollo, loading, error } = useDesarrollo(slug);

  if (loading) {
    return (
      <main className="bg-brand-black min-h-screen pt-28 pb-20 text-white font-sans flex justify-center items-center">
        <p className="text-gray-400 text-lg animate-pulse">Cargando desarrollo...</p>
      </main>
    );
  }

  if (error || !desarrollo) {
    return (
      <main className="bg-brand-black min-h-screen pt-28 pb-20 text-white font-sans text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Desarrollo no encontrado</h1>
          <p className="text-gray-400 mb-8">El desarrollo que buscas no existe o no ha sido publicado.</p>
          <Link to="/desarrollos" className="text-brand-red hover:underline">
            ← Volver al portafolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-brand-black min-h-screen pt-28 pb-20 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/desarrollos" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-red text-sm transition-colors mb-8">
          ← Volver al portafolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            <GallerySection data={desarrollo} />

            {desarrollo.resumen && (
              <section className="border-t border-white/10 pt-8">
                <h2 className="text-2xl font-extrabold text-white mb-4">Resumen</h2>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{desarrollo.resumen}</p>
              </section>
            )}

            {desarrollo.caracteristicas && desarrollo.caracteristicas.length > 0 && (
              <section className="border-t border-white/10 pt-8">
                <h2 className="text-2xl font-extrabold text-white mb-6">Características</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-gray-300 text-xs sm:text-sm">
                  {desarrollo.caracteristicas.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {desarrollo.sobreDesarrollo && (
              <section className="border-t border-white/10 pt-8">
                <h2 className="text-2xl font-extrabold text-white mb-4">Sobre el desarrollo</h2>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{desarrollo.sobreDesarrollo}</p>
              </section>
            )}

            <ModelsSection modelos={desarrollo.modelos} />
            <NearbySection lugares={desarrollo.lugaresCercanos} mapaUrl={desarrollo.mapaUrl} />
          </div>

          <div className="lg:col-span-4">
            <SidebarCard data={desarrollo} />
          </div>

        </div>
      </div>
    </main>
  );
};

export default DesarrolloDetalle;