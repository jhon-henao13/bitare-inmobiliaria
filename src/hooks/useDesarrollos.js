import { useState, useEffect } from 'react';
import { client } from '../sanityClient';

export const useDesarrollos = () => {
  const [desarrollos, setDesarrollos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `*[_type == "desarrollo"] | order(nombre asc) {
      _id,
      nombre,
      "slug": slug.current,
      estado,
      ubicacion,
      precioDesde,
      residencias,
      fechaApertura,
      rangoSuperficie,
      "imagenPrincipal": galeria[0].asset->url,
      "imagenHover": galeria[1].asset->url
    }`;

    client.fetch(query)
      .then((res) => { setDesarrollos(res); setLoading(false); })
      .catch((err) => { console.error(err); setError(err); setLoading(false); });
  }, []);

  return { desarrollos, loading, error };
};

export const useDesarrollo = (slug) => {
  const [desarrollo, setDesarrollo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const query = `*[_type == "desarrollo" && slug.current == $slug][0] {
      _id,
      nombre,
      "slug": slug.current,
      estado,
      ubicacion,
      residencias,
      fechaApertura,
      rangoSuperficie,
      precioDesde,
      banosPorHabitacion,
      tipologias,
      amenidades,
      resumen,
      caracteristicas,
      sobreDesarrollo,
      "logotipoUrl": logotipo.asset->url,
      galeria[] {
        _key,
        "url": asset->url,
        alt
      },
      modelos[] {
        _key,
        nombre,
        superficie,
        recamaras,
        banos,
        "renderUrl": render.asset->url,
        "planoUrl": plano.asset->url
      },
      lugaresCercanos,
      mapaUrl
    }`;

    client.fetch(query, { slug })
      .then((res) => { setDesarrollo(res); setLoading(false); })
      .catch((err) => { console.error(err); setError(err); setLoading(false); });
  }, [slug]);

  return { desarrollo, loading, error };
};