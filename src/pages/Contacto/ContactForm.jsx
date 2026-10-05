import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar la API de envío o cliente de email
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="bg-[#1b1c1e] border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl space-y-8">
      <div>
        <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-2">
          Contacto Directo
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Escríbenos un mensaje
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">Nombre</label>
          <input
            type="text"
            required
            placeholder="Tu nombre completo"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full bg-[#121315] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">E-mail</label>
            <input
              type="email"
              required
              placeholder="correo@ejemplo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#121315] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">WhatsApp</label>
            <input
              type="tel"
              required
              placeholder="+52 33 0000 0000"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full bg-[#121315] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">Mensaje</label>
          <textarea
            rows="4"
            required
            placeholder="¿En qué desarrollo o propiedad estás interesado?"
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            className="w-full bg-[#121315] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red transition-colors text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] uppercase tracking-wider text-sm"
        >
          Enviar
        </button>
      </form>

      {/* Separador y Botón de WhatsApp */}
      <div className="pt-4 border-t border-white/10 text-center">
        <p className="text-xs text-gray-400 mb-3">¿Prefieres atención inmediata?</p>
        <a
          href="https://wa.me/523300000000?text=Hola,%20quisiera%20recibir%20información%20sobre%20sus%20proyectos."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-bold py-3 px-6 rounded-xl transition-all text-sm"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          Chatea en WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactForm;