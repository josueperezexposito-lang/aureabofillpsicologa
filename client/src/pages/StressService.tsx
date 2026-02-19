import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Shield } from 'lucide-react';

export default function StressService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Gestión del Estrés en Petrer y Elda
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Aprende técnicas efectivas para manejar el estrés y recuperar el equilibrio en tu vida.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
              Pedir Cita Gratuita
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold text-foreground mb-6">¿Cómo el estrés afecta tu salud?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              El estrés crónico puede afectar tu salud física, mental y emocional. Desde problemas de sueño hasta enfermedades cardiovasculares, el estrés no tratado puede tener consecuencias graves.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Estrategias de Manejo del Estrés</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="border-border">
                <CardHeader>
                  <Zap className="text-primary mb-2" size={28} />
                  <CardTitle>Técnicas de Relajación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Respiración, meditación y relajación muscular</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <Shield className="text-secondary mb-2" size={28} />
                  <CardTitle>Habilidades de Afrontamiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Estrategias prácticas para situaciones estresantes</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <CheckCircle className="text-primary mb-2" size={28} />
                  <CardTitle>Planificación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Gestión del tiempo y priorización</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Recupera tu Calma Interior</h2>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg">
              Reservar Sesión
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
