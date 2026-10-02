/**
 * Envía los datos del lead al CRM de Bitáre.
 * Cuando tengan el endpoint real, reemplaza el contenido de esta función.
 */
export const sendToCRM = async (data) => {
  // ---------------------------------------------------------
  //  TODO: Reemplazar con la URL del CRM de Bitáre
  //  Ejemplo:
  //  const response = await fetch('https://crm.bitare.com/api/leads', {
  //    method: 'POST',
  //    headers: { 'Content-Type': 'application/json' },
  //    body: JSON.stringify(data),
  //  });
  //  if (!response.ok) throw new Error('Error al enviar al CRM');
  // ---------------------------------------------------------

  // Por ahora solo registramos en consola para no romper el flujo
  console.log('📩 Lead enviado al CRM:', data);

  // Simulamos éxito
  return { success: true };
};