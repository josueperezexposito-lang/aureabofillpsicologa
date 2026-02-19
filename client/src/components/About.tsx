import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre mí</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Soy <a href="/sobre-mi" className="font-bold text-foreground hover:text-primary transition-colors cursor-pointer">Aurea Bofill</a>, psicóloga sanitaria colegiada con más de 10 años de experiencia en terapia individual para adultos.
              </p>
              <p>
                Mi especialidad es acompañar a personas adultas en el manejo de ansiedad, depresión, estrés y en su camino hacia el crecimiento personal y emocional.
              </p>
              <p>
                Utilizo enfoques terapéuticos basados en evidencia, principalmente la Terapia Cognitivo-Conductual (TCC), adaptando cada sesión a las necesidades únicas de cada persona.
              </p>
              <p>
                Trabajo en Petrer y Elda, ofreciendo tanto sesiones presenciales como consultas online para mayor flexibilidad.
              </p>
            </div>
          </div>
          <div>
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Formación</h3>
                    <p className="text-sm text-muted-foreground">Licenciatura en Psicología + Máster en Psicología Clínica y de la Salud</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Especialidades</h3>
                    <p className="text-sm text-muted-foreground">Terapia Cognitivo-Conductual, Ansiedad, Depresión, Estrés, Crecimiento Personal</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Ubicación</h3>
                    <p className="text-sm text-muted-foreground">Petrer y Elda, Alicante</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Modalidad</h3>
                    <p className="text-sm text-muted-foreground">Presencial y Online</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
