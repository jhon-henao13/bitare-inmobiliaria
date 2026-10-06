import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { sendToCRM } from '../utils/sendToCRM';

const LeadFormModal = ({ isOpen, onClose, propiedad, whatsappNumber }) => {
  const [form, setForm] = useState({ nombre: '', telefono: '', correo: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Bloquear scroll del body cuando está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ESC para cerrar
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    // 1. Enviar al CRM (no lanzamos error si falla, para no bloquear WhatsApp)
    const result = await sendToCRM({
      nombre: form.nombre,
      telefono: form.telefono,
      correo: form.correo,
      propiedad,
      tipo: 'lead-desarrollo',
      origen: 'Bitáre Web · Detalle de Desarrollo',
      timestamp: new Date().toISOString(),
    });

    if (!result.success) {
      console.warn('El lead no se guardó en el CRM, pero continuamos a WhatsApp.');
    }

    // 2. Redirigir a WhatsApp con mensaje prellenado
    const mensaje = encodeURIComponent(
      `Hola, soy ${form.nombre}.\n` +
      `Me interesa el desarrollo *${propiedad}*.\n\n` +
      `Teléfono: ${form.telefono}\n` +
      `Correo: ${form.correo}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, '_blank');

    // 3. Limpiar y cerrar
    setForm({ nombre: '', telefono: '', correo: '' });
    setSubmitting(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#1b1c1e] border border-white/10 rounded-2xl shadow-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-extrabold text-white mb-2">Solicita información</h2>
        <p className="text-gray-400 text-sm mb-6">Un asesor te contactará a la brevedad.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Nombre</label>
            <input
              type="text" name="nombre" value={form.nombre} onChange={handleChange} required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Teléfono</label>
            <input
              type="tel" name="telefono" value={form.telefono} onChange={handleChange} required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Correo</label>
            <input
              type="email" name="correo" value={form.correo} onChange={handleChange} required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Propiedad de Interés</label>
            <input
              type="text" value={propiedad} readOnly
              className="w-full bg-black/60 border border-white/5 rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit" disabled={submitting}
            className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] uppercase tracking-wider text-sm disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {submitting ? <><Loader2 className="animate-spin" size={18} /> Enviando...</> : 'Enviar y continuar en WhatsApp'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadFormModal;