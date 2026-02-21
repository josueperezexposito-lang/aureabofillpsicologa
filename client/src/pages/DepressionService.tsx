import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Cloud, Lightbulb } from 'lucide-react';

export default function DepressionService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Terapia para la depresión en Elda y Petrer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Recupera tu motivación y alegría de vivir. Tratamiento profesional basado en evidencia científica.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
              Pedir Cita Gratuita
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold text-foreground mb-6">¿Qué es la depresión?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              La depresión es más que tristeza. Es un trastorno del estado de ánimo que afecta cómo te sientes, piensas y realizas actividades diarias.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Si experimentas una tristeza persistente, falta de motivación o pérdida de interés en actividades que antes disfrutabas, es importante buscar ayuda profesional. En Elda y Petrer, ofrezco tratamiento efectivo para la depresión.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Señales de depresión</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="border-border">
                <CardHeader>
                  <Cloud className="text-primary mb-2" size={28} />
                  <CardTitle>Síntomas emocionales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Tristeza persistente</p>
                  <p>• Falta de motivación</p>
                  <p>• Pérdida de interés en actividades</p>
                  <p>• Sentimientos de culpa</p>
                  <p>• Baja autoestima</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <Lightbulb className="text-secondary mb-2" size={28} />
                  <CardTitle>Síntomas físicos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Cambios en el apetito</p>
                  <p>• Problemas de sueño</p>
                  <p>• Fatiga y falta de energía</p>
                  <p>• Dolores corporales</p>
                  <p>• Dificultad para concentrarse</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Recupera tu bienestar</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              No estás solo. Con el tratamiento adecuado, puedes superar la depresión y disfrutar nuevamente de la vida.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
              Solicitar Consulta Gratuita
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
