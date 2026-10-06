// =============================================================
//  Bitáre · Envío de leads al CRM (Go High Level / LeadConnector)
//  Dos webhooks separados según el tipo de lead:
//    - contacto-general  → Formulario de Contacto (/contacto)
//    - lead-desarrollo   → Modal dentro de cada desarrollo
// =============================================================

const CRM_WEBHOOKS = {
  'contacto-general':
    'https://services.leadconnectorhq.com/hooks/pobieQgMR5P2cLoevXv0/webhook-trigger/f6aac27c-5392-44ad-bfab-0aaa192d62e3',
  'lead-desarrollo':
    'https://services.leadconnectorhq.com/hooks/pobieQgMR5P2cLoevXv0/webhook-trigger/b54dcc28-e1b3-43e6-acb1-0e967356bf8d',
};

const DEFAULT_TIPO = 'contacto-general';

/**
 * Envía un lead al CRM de Bitáre.
 *
 * @param {Object} data
 * @param {string} data.nombre      - Nombre completo (se parte en firstName/lastName).
 * @param {string} data.telefono    - Teléfono.
 * @param {string} data.correo      - Email.
 * @param {string} [data.propiedad] - Nombre del desarrollo de interés (solo lead-desarrollo).
 * @param {string} [data.mensaje]   - Mensaje libre (solo contacto-general).
 * @param {string} [data.tipo]      - 'contacto-general' | 'lead-desarrollo'. Default: 'contacto-general'.
 * @param {string} [data.origen]    - Página de origen. Default: 'Bitáre Web'.
 */
export const sendToCRM = async (data) => {
  const tipo = data.tipo || DEFAULT_TIPO;
  const webhookUrl = CRM_WEBHOOKS[tipo];

  if (!webhookUrl) {
    console.error(`❌ Tipo de lead desconocido: "${tipo}". No se envió al CRM.`);
    return { success: false, error: `Tipo desconocido: ${tipo}` };
  }

  // GHL prefiere firstName y lastName separados
  const nombreCompleto = (data.nombre || '').trim();
  const partes = nombreCompleto.split(/\s+/);
  const firstName = partes[0] || '';
  const lastName = partes.slice(1).join(' ') || '';

  const payload = {
    // Campos estándar que GHL reconoce directamente
    firstName,
    lastName,
    name: nombreCompleto,
    email: data.correo || '',
    phone: data.telefono || '',
    message:
      data.mensaje ||
      (data.propiedad
        ? `Interesado en: ${data.propiedad}`
        : 'Contacto desde el sitio web'),
    source: data.origen || 'Bitáre Web',

    // Tags para segmentación en el CRM
    tags: ['bitare-web', tipo],

    // Datos personalizados (Diego los podrá mapear a campos custom)
    propiedadInteres: data.propiedad || '',
    tipoLead: tipo,
    paginaOrigen: typeof window !== 'undefined' ? window.location.href : '',
    timestamp: data.timestamp || new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`CRM respondió con estado ${response.status}`);
    }

    console.log(`✅ Lead [${tipo}] enviado al CRM:`, payload);
    return { success: true };
  } catch (error) {
    console.error(`❌ Error enviando lead [${tipo}] al CRM:`, error);
    return { success: false, error };
  }
};