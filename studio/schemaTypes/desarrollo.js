export default {
  name: 'desarrollo',
  title: 'Desarrollos Inmobiliarios',
  type: 'document',
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'catalogo', title: 'Datos de la Tarjeta (Catálogo)' },
    { name: 'detalle', title: 'Detalle del Desarrollo' },
    { name: 'modelos', title: 'Modelos y Ubicación' }
  ],
  fields: [
    // ----- GENERAL -----
    {
      name: 'nombre',
      title: 'Nombre del Desarrollo',
      type: 'string',
      group: 'general',
      description: 'Ej. "Paramount Providencia". Se usará para generar la URL.',
      validation: Rule => Rule.required().error('El nombre es obligatorio.')
    },
    {
      name: 'slug',
      title: 'Slug / URL',
      type: 'slug',
      group: 'general',
      options: {
        source: 'nombre',
        maxLength: 96,
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      },
      description: 'Se genera automáticamente. Puedes editarlo si necesitas una URL diferente.',
      validation: Rule => Rule.required()
    },
    {
      name: 'logotipo',
      title: 'Logotipo del Desarrollo',
      type: 'image',
      group: 'general',
      options: { hotspot: true },
      description: 'Logo que aparece en el círculo del SidebarCard. Sube un PNG con fondo transparente idealmente.'
    },
    {
      name: 'estado',
      title: 'Estado Comercial',
      type: 'string',
      group: 'general',
      options: {
        list: [
          { title: 'Preventa', value: 'PREVENTA' },
          { title: 'Entrega Inmediata', value: 'ENTREGA INMEDIATA' },
          { title: 'Venta', value: 'VENTA' },
          { title: 'Terminado', value: 'TERMINADO' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'ubicacion',
      title: 'Ubicación Breve',
      type: 'string',
      group: 'general',
      description: 'Ej. "Providencia, Guadalajara". Aparece debajo del título.'
    },

    // ----- CATÁLOGO (tarjetas) -----
    {
      name: 'precioDesde',
      title: 'Precio Desde',
      type: 'string',
      group: 'catalogo',
      description: 'Ej. "$6 MDP". Aparece en la tarjeta del catálogo.'
    },
    {
      name: 'residencias',
      title: 'Número de Residencias',
      type: 'number',
      group: 'catalogo',
      description: 'Cantidad total de unidades del desarrollo.'
    },
    {
      name: 'fechaApertura',
      title: 'Fecha de Apertura',
      type: 'string',
      group: 'catalogo',
      description: 'Ej. "Dic 2028". Aparece en la tarjeta y en el detalle.'
    },
    {
      name: 'rangoSuperficie',
      title: 'Rango de Superficie',
      type: 'string',
      group: 'catalogo',
      description: 'Ej. "De 49m² a 135m²". Aparece a la derecha de la fecha en la tarjeta.'
    },

    // ----- DETALLE -----
    {
      name: 'banosPorHabitacion',
      title: 'Baños por Habitación',
      type: 'string',
      group: 'detalle',
      description: 'Ej. "1 por habitación". Aparece en la barra rápida de especificaciones.'
    },
    {
      name: 'tipologias',
      title: 'Tipologías Disponibles',
      type: 'string',
      group: 'detalle',
      description: 'Ej. "Loft, 2 Rec y 3 Rec". Aparece en la barra rápida de especificaciones.'
    },
    {
      name: 'amenidades',
      title: 'Amenidades Destacadas',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      group: 'detalle',
      description: 'Presiona Enter después de cada amenidad. Ej. "Alberca", "Gimnasio".'
    },
    {
      name: 'resumen',
      title: 'Resumen',
      type: 'text',
      rows: 3,
      group: 'detalle',
      description: 'Párrafo corto que aparece en la sección "Resumen".'
    },
    {
      name: 'caracteristicas',
      title: 'Características',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      group: 'detalle',
      description: 'Lista que aparece como bullets en el detalle.'
    },
    {
      name: 'sobreDesarrollo',
      title: 'Sobre el Desarrollo',
      type: 'text',
      rows: 5,
      group: 'detalle',
      description: 'Texto largo que aparece en "Sobre el desarrollo".'
    },
    {
      name: 'galeria',
      title: 'Galería de Fotos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string',
              description: 'Describe la imagen. Ej. "Fachada del edificio".'
            }
          ]
        }
      ],
      group: 'detalle',
      description: 'La primera imagen será la principal. Arrastra para reordenar.',
      validation: Rule => Rule.min(1).error('Agrega al menos una imagen.')
    },

    // ----- MODELOS Y UBICACIÓN -----
    {
      name: 'modelos',
      title: 'Modelos de Departamento',
      type: 'array',
      group: 'modelos',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nombre', title: 'Nombre del Modelo', type: 'string', validation: Rule => Rule.required() },
            { name: 'superficie', title: 'Superficie (m²)', type: 'string' },
            { name: 'recamaras', title: 'Recámaras', type: 'number' },
            { name: 'banos', title: 'Baños', type: 'number' },
            {
              name: 'render',
              title: 'Render / Imagen del Modelo',
              type: 'image',
              options: { hotspot: true },
              description: 'Imagen decorativa del modelo (render 3D, foto de sala, etc.).'
            },
            {
              name: 'plano',
              title: 'Plano Arquitectónico',
              type: 'image',
              options: { hotspot: true },
              description: 'Plano técnico del modelo.'
            }
          ],
          preview: {
            select: { title: 'nombre', subtitle: 'superficie', media: 'render' }
          }
        }
      ],
      description: 'Al hacer clic en cada modelo se cambia la imagen en el sitio.'
    },
    {
      name: 'lugaresCercanos',
      title: 'Lugares Cercanos',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      group: 'modelos',
      description: 'Ej. "Andares", "Hospital Puerta de Hierro".'
    },
    {
      name: 'mapaUrl',
      title: 'URL de Google Maps (Iframe)',
      type: 'string',
      group: 'modelos',
      description: 'Pega solo la URL dentro de src="..." del iframe.'
    }
  ],
  preview: {
    select: { title: 'nombre', subtitle: 'estado', media: 'galeria.0' },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Sin nombre',
        subtitle: subtitle || 'Sin estado',
        media: media || undefined
      };
    }
  },
  initialValue: { estado: 'PREVENTA' }
};