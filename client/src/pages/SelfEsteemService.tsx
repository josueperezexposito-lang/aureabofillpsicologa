import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star, Heart } from 'lucide-react';

export default function SelfEsteemService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Mejora tu autoestima en Petrer y Elda
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Construye una relación positiva contigo mismo y aumenta tu confianza personal.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
              Pedir Cita Gratuita
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold text-foreground mb-6">¿Por qué es importante la autoestima?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              La autoestima es la base de tu bienestar emocional. Una autoestima saludable te permite tomar decisiones mejores, establecer límites sanos y disfrutar de relaciones más satisfactorias.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Beneficios de una autoestima fuerte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                'Mayor confianza en tus capacidades',
                'Mejores relaciones interpersonales',
                'Mayor resiliencia ante adversidades',
                'Mejor salud mental y emocional',
                'Mayor éxito en metas personales',
                'Mejor toma de decisiones'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Empieza tu transformación hoy</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Mereces sentirte bien contigo mismo. Juntos trabajaremos para construir una autoestima sólida y duradera.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
              Solicitar Consulta
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
