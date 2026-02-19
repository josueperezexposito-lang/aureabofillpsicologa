import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Sesión inicial',
      price: '30€',
      duration: '45 min',
      description: 'Valoración y conocimiento mutuo',
      features: [
        'Evaluación inicial',
        'Orientación terapéutica',
        'Plan de tratamiento',
        'Presencial u online'
      ]
    },
    {
      name: 'Terapia individual',
      price: '50€',
      duration: '60 min',
      description: 'Sesiones de terapia regular',
      features: [
        'Sesiones de 60 minutos',
        'Terapia cognitivo-conductual',
        'Pautas y tareas entre sesiones',
        'Presencial u online'
      ],
      highlighted: true
    }
  ];

  return (
    <section id="precios" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros precios</h2>
          <p className="text-lg text-muted-foreground">Inversión en tu salud mental y bienestar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {plans.map((plan, idx) => (
            <Card key={idx} className={`border-2 ${plan.highlighted ? 'border-primary shadow-lg' : 'border-border'}`}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-1">{plan.price}</div>
                  <p className="text-muted-foreground text-sm">{plan.duration}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={18} className="text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/34652250697?text=Hola%20Aurea%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Sesión de valoración
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
