import { useState, useEffect } from 'react';
import { client } from '../sanityClient';

// Hook para obtener TODOS los desarrollos (para el catálogo)
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
      "imagenPrincipal": galeria[0].asset->url,
      "imagenHover": galeria[1].asset->url
    }`;

    client.fetch(query)
      .then((res) => {
        setDesarrollos(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al obtener desarrollos:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { desarrollos, loading, error };
};

// Hook para obtener UN desarrollo por slug (para el detalle)
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
      precioDesde,
      amenidades,
      resumen,
      caracteristicas,
      sobreDesarrollo,
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
        "planoUrl": plano.asset->url
      },
      lugaresCercanos,
      mapaUrl
    }`;

    client.fetch(query, { slug })
      .then((res) => {
        setDesarrollo(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al obtener el desarrollo:', err);
        setError(err);
        setLoading(false);
      });
  }, [slug]);

  return { desarrollo, loading, error };
};