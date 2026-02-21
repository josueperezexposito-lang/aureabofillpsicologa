import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Heart } from 'lucide-react';

export default function AnxietyService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Terapia para la ansiedad en Petrer y Elda
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Aprende a gestionar la ansiedad con técnicas cognitivo-conductuales efectivas. Sesiones presenciales y online.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
              Pedir Cita
            </Button>
          </div>
        </section>

        {/* What is Anxiety */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold text-foreground mb-6">¿Qué es la ansiedad?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés o peligro percibido. Sin embargo, cuando se vuelve crónica o desproporcionada, puede afectar significativamente tu calidad de vida.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              En Petrer y Elda, muchas personas sufren de ansiedad sin saber que existe ayuda profesional efectiva. Con la terapia cognitivo-conductual, podemos trabajar juntos para reducir estos síntomas y recuperar tu bienestar.
            </p>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Síntomas de la ansiedad</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="border-border">
                <CardHeader>
                  <AlertCircle className="text-primary mb-2" size={28} />
                  <CardTitle>Síntomas físicos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Palpitaciones y aceleración del corazón</p>
                  <p>• Dificultad para respirar</p>
                  <p>• Tensión muscular y dolor</p>
                  <p>• Sudoración excesiva</p>
                  <p>• Problemas de sueño</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <Heart className="text-secondary mb-2" size={28} />
                  <CardTitle>Síntomas emocionales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Preocupación constante</p>
                  <p>• Miedo irracional</p>
                  <p>• Irritabilidad</p>
                  <p>• Dificultad para concentrarse</p>
                  <p>• Sensación de pérdida de control</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold text-foreground mb-12">Cómo tratamos la ansiedad</h2>
            <div className="space-y-8">
              {[
                {
                  num: 1,
                  title: 'Evaluación inicial',
                  desc: 'Identificamos los desencadenantes de tu ansiedad y evaluamos su impacto en tu vida.'
                },
                {
                  num: 2,
                  title: 'Técnicas de relajación',
                  desc: 'Enseñamos técnicas de respiración, mindfulness y relajación muscular progresiva.'
                },
                {
                  num: 3,
                  title: 'Reestructuración cognitiva',
                  desc: 'Trabajamos en cambiar patrones de pensamiento negativo que alimentan la ansiedad.'
                },
                {
                  num: 4,
                  title: 'Exposición gradual',
                  desc: 'Enfrentamos progresivamente las situaciones que generan ansiedad.'
                }
              ].map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Beneficios de la terapia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                'Reducción significativa de síntomas de ansiedad',
                'Mejor control emocional en situaciones difíciles',
                'Mejora en la calidad del sueño',
                'Aumento de la confianza y autoestima',
                'Mejores relaciones personales',
                'Mayor productividad y rendimiento'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">¿Listo para superar tu ansiedad?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              La sesión inicial es para conocer tu situación y diseñar un plan personalizado para ti.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
                Pedir Cita
              </Button>
              <Button variant="outline" className="border-primary text-primary px-8 py-3 rounded-full text-lg">
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
