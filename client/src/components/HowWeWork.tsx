import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      number: 1,
      title: 'Primera entrevista gratuita',
      description: 'Sesión de 30 minutos sin coste para conocernos, evaluar tu situación y determinar el mejor enfoque terapéutico.',
      icon: '📋'
    },
    {
      number: 2,
      title: 'Evaluación y plan de tratamiento',
      description: 'Análisis profundo de tu caso, identificación de factores clave y diseño de un plan personalizado.',
      icon: '🔍'
    },
    {
      number: 3,
      title: 'Inicio de la terapia',
      description: 'Sesiones de 45 minutos donde trabajamos activamente en tu bienestar con herramientas prácticas.',
      icon: '💪'
    },
    {
      number: 4,
      title: 'Seguimiento y progreso',
      description: 'Acompañamiento continuo, ajuste del tratamiento y espaciamiento de sesiones conforme mejoras.',
      icon: '📈'
    }
  ];

  return (
    <section id="como-trabajamos" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Cómo trabajamos</h2>
          <p className="text-lg text-muted-foreground">Un proceso terapéutico estructurado y personalizado para tu bienestar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <Card key={idx} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-3">{step.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6">¿Por qué confiar en Aurea Bofill?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-foreground mb-1">Psicóloga Sanitaria Colegiada</h4>
                <p className="text-muted-foreground text-sm">Especializada en terapia para adultos con formación en TCC</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-foreground mb-1">Experiencia Contrastada</h4>
                <p className="text-muted-foreground text-sm">Más de 10 años acompañando a pacientes en Petrer y Elda</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-foreground mb-1">Enfoque Basado en Evidencia</h4>
                <p className="text-muted-foreground text-sm">Terapias cognitivo-conductuales avaladas científicamente</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-foreground mb-1">Modalidad Flexible</h4>
                <p className="text-muted-foreground text-sm">Sesiones presenciales en Petrer/Elda y consultas online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
