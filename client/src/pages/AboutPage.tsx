import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container">
          <div className="text-center">
            <p className="text-sm text-primary font-medium mb-2">Nº colegiada: CV12847</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Áurea Bofill Montesinos</h1>
            <p className="text-lg text-muted-foreground mt-2">Psicóloga sanitaria especializada en terapia para adultos</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column - Photo and Contact */}
            <div className="md:col-span-1">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-6xl">👩‍⚕️</div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-4 text-lg">Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Ubicación</p>
                        <p className="text-sm text-muted-foreground">Petrer y Elda, Alicante</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Teléfono</p>
                        <a href="tel:+34652250697" className="text-sm text-primary hover:underline">
                          +34 652 25 06 97
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <a href="mailto:aurea@psicologia-petrer-elda.com" className="text-sm text-primary hover:underline">
                          aurea@psicologia-petrer-elda.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Button */}
              <a href="https://wa.me/34652250697?text=Hola%20Aurea%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer" className="block mt-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-medium">
                  Pedir cita
                </Button>
              </a>
            </div>

            {/* Right Column - Bio and Info */}
            <div className="md:col-span-2 space-y-8">
              {/* Bio */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Sobre mí</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Hola, soy <strong>Áurea Bofill Montesinos</strong>, psicóloga sanitaria colegiada (CV12847) del Colegio Oficial de Psicología de la Comunidad Valenciana, aunque todos me llaman simplemente Áurea.
                  </p>
                  <p>
                    Mi licenciatura en Psicología y mis especializaciones en <strong>Psicología General Sanitaria y Terapia Cognitivo-Conductual</strong>, combinadas con más de 12 años de experiencia clínica, me han permitido acompañar a cientos de adultos en su camino hacia el bienestar emocional.
                  </p>
                  <p>
                    En mi práctica diaria en Petrer y Elda, <strong>ayudo a mis pacientes a gestionar sus emociones</strong> en casos de ansiedad, depresión, estrés, problemas de autoestima, transiciones vitales y otras manifestaciones de malestar emocional.
                  </p>
                  <p>
                    Para mí, la <strong>alianza terapéutica es fundamental</strong>. Creo firmemente que es necesario que el paciente confíe en su psicólogo y se sienta cómodo, y eso es lo que me diferencia. Mi vocación por esta profesión y mi compromiso genuino con el bienestar de mis pacientes nos permite construir una relación terapéutica sólida y efectiva.
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Especialidades</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Ansiedad y ataques de pánico',
                    'Depresión y bajo estado de ánimo',
                    'Estrés y burnout',
                    'Problemas de autoestima',
                    'Terapia de pareja',
                    'Transiciones vitales',
                    'Gestión emocional',
                    'Crecimiento personal'
                  ].map((specialty, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="text-foreground">{specialty}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Therapeutic Approach */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Mi enfoque terapéutico</h3>
                <div className="space-y-3 text-foreground">
                  <p>
                    Utilizo principalmente la <strong>Terapia Cognitivo-Conductual (TCC)</strong>, un enfoque basado en evidencia científica que ha demostrado ser altamente efectivo para una amplia variedad de problemas emocionales y psicológicos.
                  </p>
                  <p>
                    Adapto cada sesión a las necesidades únicas de cada persona, combinando técnicas de TCC con herramientas de mindfulness, regulación emocional y técnicas de resolución de problemas. Mi objetivo es que mis pacientes no solo se sientan mejor, sino que adquieran herramientas para gestionar sus emociones de forma autónoma.
                  </p>
                </div>
              </div>

              {/* Formation and Experience */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Formación y experiencia</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-primary font-medium">2012 - Actualidad</p>
                    <p className="font-bold text-foreground">Psicóloga sanitaria en consulta privada</p>
                    <p className="text-muted-foreground text-sm">Petrer y Elda. Especializada en terapia individual para adultos, con modalidades presencial y online.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-primary font-medium">2018</p>
                    <p className="font-bold text-foreground">Máster en Psicología Clínica y de la Salud</p>
                    <p className="text-muted-foreground text-sm">Universidad de Alicante. Especialización en terapia cognitivo-conductual y psicología del adulto.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-primary font-medium">2015</p>
                    <p className="font-bold text-foreground">Postgrado en Terapia Cognitivo-Conductual Avanzada</p>
                    <p className="text-muted-foreground text-sm">Instituto de Psicología Aplicada. Formación especializada en TCC para trastornos de ansiedad y depresión.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-primary font-medium">2012</p>
                    <p className="font-bold text-foreground">Licenciatura en Psicología</p>
                    <p className="text-muted-foreground text-sm">Universidad de Valencia. Formación integral en psicología clínica y de la salud.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-primary font-medium">2012 - 2014</p>
                    <p className="font-bold text-foreground">Prácticas clínicas supervisadas</p>
                    <p className="text-muted-foreground text-sm">Centro de Salud Mental de Elda. Experiencia clínica bajo supervisión en atención a adultos con diversos trastornos mentales.</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-secondary/10 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">¿Por qué elegirme?</h3>
                <ul className="space-y-2 text-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Más de 12 años de experiencia clínica con adultos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Formación continua en técnicas terapéuticas basadas en evidencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Enfoque personalizado adaptado a tus necesidades específicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Disponibilidad en modalidades presencial y online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Sesión inicial para conocernos mutuamente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para comenzar tu camino hacia el bienestar?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Te acompaño en cada paso. Primera sesión de evaluación previa, por teléfono o videollamada.
          </p>
          <a href="https://wa.me/34652250697?text=Hola%20Aurea%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 font-medium text-base">
              Pedir cita ahora
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
