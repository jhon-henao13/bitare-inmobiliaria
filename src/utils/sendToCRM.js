const CRM_WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/pobieQgMR5P2cLoevXv0/webhook-trigger/f6aac27c-5392-44ad-bfab-0aaa192d62e3';

/**
 * Envía un lead al CRM de Bitáre.
 *
 * @param {Object} data - Datos del lead.
 * @param {string} data.nombre      - Nombre completo (se parte en firstName/lastName).
 * @param {string} data.telefono    - Teléfono.
 * @param {string} data.correo      - Email.
 * @param {string} [data.propiedad] - Nombre del desarrollo de interés (opcional).
 * @param {string} [data.mensaje]   - Mensaje libre (opcional).
 * @param {string} [data.tipo]      - 'lead-desarrollo' | 'contacto-general'. Default: 'lead'.
 * @param {string} [data.origen]    - Página de origen. Default: 'Bitáre Web'.
 */
export const sendToCRM = async (data) => {
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
    message: data.mensaje || (data.propiedad ? `Interesado en: ${data.propiedad}` : 'Contacto desde el sitio web'),
    source: data.origen || 'Bitáre Web',

    // Tags para segmentación en el CRM
    tags: ['bitare-web', data.tipo || 'lead'],

    // Datos personalizados (Diego los podrá mapear a campos custom)
    propiedadInteres: data.propiedad || '',
    tipoLead: data.tipo || 'lead',
    paginaOrigen: typeof window !== 'undefined' ? window.location.href : '',
    timestamp: data.timestamp || new Date().toISOString(),
  };

  try {
    const response = await fetch(CRM_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`CRM respondió con estado ${response.status}`);
    }

    console.log('✅ Lead enviado al CRM:', payload);
    return { success: true };
  } catch (error) {
    // No lanzamos el error para no bloquear la redirección a WhatsApp.
    // Logueamos y devolvemos false para que el caller sepa que falló.
    console.error('❌ Error enviando lead al CRM:', error);
    return { success: false, error };
  }
};