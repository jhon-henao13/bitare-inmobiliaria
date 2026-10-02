import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Bitáre Inmobiliaria - CMS',

  projectId: 'zl8cwgny',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('Desarrollos Inmobiliarios')
              .schemaType('desarrollo')
              .child(
                S.documentTypeList('desarrollo')
                  .title('Desarrollos')
                  .defaultOrdering([{ field: 'nombre', direction: 'asc' }])
              ),
            // Aquí pueden agregar más tipos de contenido en el futuro
            // Ejemplo:
            // S.listItem().title('Páginas').schemaType('pagina').child(S.documentTypeList('pagina'))
          ])
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})