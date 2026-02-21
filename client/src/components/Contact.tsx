import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground">¿Listo para comenzar tu camino hacia el bienestar?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                  placeholder="Cuéntame cómo puedo ayudarte..."
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg text-lg">
                Enviar mensaje
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Información de contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <a href="tel:+34611154333" className="text-primary hover:text-primary/80 transition-colors">
                      611 15 43 33
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:aurea@psicologia.es" className="text-primary hover:text-primary/80 transition-colors">
                      aurea@psicologia.es
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">Pl. Paco López Pina, 6, 03610 Petrer, Alicante</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a href="https://wa.me/34611154333" className="text-secondary hover:text-secondary/80 transition-colors">
                      Contactar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-bold text-foreground mb-3">Modalidad de atención</h4>
              Ofrezco sesiones presenciales en Petrer y Elda, así como consultas online para mayor flexibilidad.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section >
  );
}
