export default {
  name: 'desarrollo',
  title: 'Desarrollos Inmobiliarios',
  type: 'document',
  fields: [
    { name: 'nombre', title: 'Nombre del Desarrollo', type: 'string' },
    { name: 'slug', title: 'Slug / URL', type: 'slug', options: { source: 'nombre' } },
    { name: 'estado', title: 'Estado (ej. PREVENTA, ENTREGA INMEDIATA)', type: 'string' },
    { name: 'ubicacion', title: 'Ubicación Breve', type: 'string' },
    { name: 'residencias', title: 'Número de Residencias', type: 'number' },
    { name: 'fechaApertura', title: 'Fecha de Apertura', type: 'string' },
    { name: 'amenidades', title: 'Amenidades', type: 'array', of: [{ type: 'string' }] },
    { name: 'resumen', title: 'Resumen', type: 'text' },
    { name: 'caracteristicas', title: 'Características', type: 'array', of: [{ type: 'string' }] },
    { name: 'sobreDesarrollo', title: 'Sobre el Desarrollo', type: 'text' },
    { name: 'galeria', title: 'Galería de Fotos', type: 'array', of: [{ type: 'image' }] },
    {
      name: 'modelos',
      title: 'Modelos de Departamento',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nombre', title: 'Nombre del Modelo', type: 'string' },
            { name: 'superficie', title: 'Superficie (m²)', type: 'string' },
            { name: 'recamaras', title: 'Recámaras', type: 'number' },
            { name: 'banos', title: 'Baños', type: 'number' },
            { name: 'plano', title: 'Imagen del Plano', type: 'image' }
          ]
        }
      ]
    },
    { name: 'lugaresCercanos', title: 'Lugares Cercanos', type: 'array', of: [{ type: 'string' }] },
    { name: 'mapaUrl', title: 'URL de Iframe de Google Maps', type: 'string' }
  ]
}