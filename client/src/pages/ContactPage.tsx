import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Crear enlace de WhatsApp con el mensaje
    const message = `Hola Aurea, me llamo ${formData.name}. Mi email es ${formData.email} y mi teléfono es ${formData.phone}. Mi mensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/34652250697?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contacto</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes preguntas o necesitas ayuda? Ponte en contacto conmigo a través de los siguientes canales. Estoy aquí para escucharte y acompañarte en tu camino hacia el bienestar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Call Card */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Llámanos</h3>
                  <p className="text-sm text-muted-foreground mb-4">(Valoración gratuita de 30 min.)</p>
                  <a href="tel:+34652250697" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                    611 15 43 33
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Card */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Formulario de contacto</h3>
                  <p className="text-sm text-muted-foreground mb-4">Completa nuestro formulario de contacto</p>
                  <a href="#formulario" className="inline-block">
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Ir al formulario
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Card */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Sesión de valoración</h3>
                  <p className="text-sm text-muted-foreground mb-4">(Valoración gratuita de 30 min.)</p>
                  <a href="https://wa.me/34652250697?text=Hola%20Aurea%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Sesión de valoración
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Visítanos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  Una de las cosas que más me gusta como psicóloga es hablar y conectar con las personas. Y si es cara a cara, pues mejor que mejor. Esta es mi consulta...
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                      Pl. Paco López Pina, 6<br />
                      03610 Petrer, Alicante
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Horario</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Lunes a viernes:</span>
                        <span className="font-medium">09:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábados:</span>
                        <span className="font-medium">09:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingos:</span>
                        <span className="font-medium">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Teléfono</h3>
                    <a href="tel:+34652250697" className="text-primary hover:underline font-medium">
                      611 15 43 33
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@aureabofillpsicologa.es" className="text-primary hover:underline font-medium">
                      info@aureabofillpsicologa.es
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium mb-2">Pl. Paco López Pina, 6</p>
                <p className="text-muted-foreground text-sm">03610 Petrer, Alicante</p>
                <a 
                  href="https://maps.google.com/?q=Pl.+Paco+López+Pina,+6,+03610+Petrer,+Alicante" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4"
                >
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Ver en Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="formulario" className="py-16 md:py-24 bg-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Formulario de contacto</h2>
            <p className="text-lg text-muted-foreground">
              Completa el siguiente formulario y me pondré en contacto contigo lo antes posible
            </p>
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Tu teléfono"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame qué te preocupa o qué necesitas"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-secondary/10 rounded-lg p-4 text-sm text-muted-foreground">
                  <p>
                    Al enviar este formulario, aceptas que tu información será utilizada únicamente para contactarte y responder a tu consulta. Tus datos están protegidos según la política de privacidad.
                  </p>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-medium text-base">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">¿Prefieres una valoración gratuita?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Puedo ofrecerte una sesión inicial de 30 minutos sin coste para conocernos y valorar cómo puedo ayudarte.
          </p>
          <a href="https://wa.me/34652250697?text=Hola%20Aurea%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 font-medium text-base">
              Sesión de valoración
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
