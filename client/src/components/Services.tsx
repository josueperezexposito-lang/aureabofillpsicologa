import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Terapia Individual',
    description: 'Espacio personalizado para trabajar en tus emociones, patrones de comportamiento y alcanzar tus objetivos de bienestar.',
    icon: '🧠',
  },
  {
    title: 'Ansiedad y Estrés',
    description: 'Técnicas efectivas para gestionar la ansiedad, ataques de pánico y estrés crónico en tu día a día.',
    icon: '😌',
  },
  {
    title: 'Depresión',
    description: 'Acompañamiento profesional para superar episodios depresivos y recuperar tu calidad de vida.',
    icon: '💪',
  },
  {
    title: 'Crecimiento Personal',
    description: 'Desarrollo personal, autoestima, habilidades sociales y comunicación efectiva.',
    icon: '🌱',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Mis servicios</h2>
          <p className="text-lg text-muted-foreground">Terapia especializada para adultos en Petrer y Elda</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="border-border hover:shadow-lg hover:border-primary transition-all">
              <CardHeader>
                <div className="text-4xl mb-3">{service.icon}</div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
