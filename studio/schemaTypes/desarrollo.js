export default {
  name: 'desarrollo',
  title: 'Desarrollos Inmobiliarios',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del Desarrollo',
      type: 'string',
      description: 'Ej. "Paramount Providencia". Este nombre se usará para generar la URL.',
      validation: Rule => Rule.required().error('El nombre es obligatorio para generar la URL.')
    },
    {
      name: 'slug',
      title: 'Slug / URL',
      type: 'slug',
      options: {
        source: 'nombre',
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      },
      description: 'Se genera automáticamente. Puedes editarlo si necesitas una URL diferente.',
      validation: Rule => Rule.required().error('El slug es obligatorio.')
    },
    {
      name: 'estado',
      title: 'Estado Comercial',
      type: 'string',
      description: 'Ej. PREVENTA, ENTREGA INMEDIATA, VENTA.',
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
      description: 'Ej. "Providencia, Guadalajara". Aparece debajo del título.'
    },
    {
      name: 'residencias',
      title: 'Número de Residencias',
      type: 'number',
      description: 'Cantidad total de unidades del desarrollo.'
    },
    {
      name: 'fechaApertura',
      title: 'Fecha de Apertura',
      type: 'string',
      description: 'Ej. "Dic 2028". Aparece en la tarjeta y en el detalle.'
    },
    {
      name: 'precioDesde',
      title: 'Precio Desde',
      type: 'string',
      description: 'Ej. "$6 MDP". Aparece en la tarjeta del catálogo.'
    },
    {
      name: 'amenidades',
      title: 'Amenidades Destacadas',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Presiona Enter después de cada amenidad. Ej. "Alberca", "Gimnasio".'
    },
    {
      name: 'resumen',
      title: 'Resumen',
      type: 'text',
      rows: 3,
      description: 'Un párrafo corto que describa el desarrollo. Aparece en la sección "Resumen".'
    },
    {
      name: 'caracteristicas',
      title: 'Características',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Lista de características. Aparecen como bullets en el detalle.'
    },
    {
      name: 'sobreDesarrollo',
      title: 'Sobre el Desarrollo',
      type: 'text',
      rows: 5,
      description: 'Texto largo que aparece en la sección "Sobre el desarrollo".'
    },
    {
      name: 'galeria',
      title: 'Galería de Fotos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true // Permite recortar y ajustar la imagen
          },
          fields: [
            {
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string',
              description: 'Describe la imagen para accesibilidad. Ej. "Fachada del edificio".'
            }
          ]
        }
      ],
      description: 'La primera imagen será la principal. Puedes arrastrar para reordenar.',
      validation: Rule => Rule.min(1).error('Agrega al menos una imagen.')
    },
    {
      name: 'modelos',
      title: 'Modelos de Departamento',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'nombre',
              title: 'Nombre del Modelo',
              type: 'string',
              description: 'Ej. "Modelo A", "Tipo 1".',
              validation: Rule => Rule.required()
            },
            {
              name: 'superficie',
              title: 'Superficie (m²)',
              type: 'string',
              description: 'Ej. "85 m²". Puedes escribirlo como texto para más flexibilidad.'
            },
            {
              name: 'recamaras',
              title: 'Recámaras',
              type: 'number'
            },
            {
              name: 'banos',
              title: 'Baños',
              type: 'number'
            },
            {
              name: 'plano',
              title: 'Imagen del Plano',
              type: 'image',
              options: {
                hotspot: true
              },
              description: 'Sube el plano arquitectónico del modelo.'
            }
          ],
          preview: {
            select: {
              title: 'nombre',
              subtitle: 'superficie',
              media: 'plano'
            }
          }
        }
      ],
      description: 'Agrega cada modelo de departamento que ofrezca el desarrollo.'
    },
    {
      name: 'lugaresCercanos',
      title: 'Lugares Cercanos',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Ej. "Andares", "Hospital Puerta de Hierro". Aparecen en el mapa.'
    },
    {
      name: 'mapaUrl',
      title: 'URL de Google Maps (Iframe)',
      type: 'string',
      description: 'Pega aquí la URL del iframe de Google Maps. En Google Maps, haz clic en "Compartir" > "Insertar un mapa" y copia solo el enlace que está dentro de src="...".'
    }
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'estado',
      media: 'galeria.0'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Sin nombre',
        subtitle: subtitle || 'Sin estado',
        media: media || undefined
      };
    }
  },
  initialValue: {
    estado: 'PREVENTA'
  }
};