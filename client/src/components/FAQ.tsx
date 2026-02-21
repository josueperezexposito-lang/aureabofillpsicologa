import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      answer: 'La primera sesión de valoración es para conocernos y evaluar tu situación. Las sesiones posteriores tienen una duración de 45 minutos y un costo de 50€ a 80€ según el tipo de intervención.'
    },
    {
      question: '¿Puedo recibir terapia online?',
      answer: 'Sí, ofrezco sesiones tanto presenciales en Petrer y Elda como consultas online por videollamada para mayor flexibilidad.'
    },
    {
      question: '¿Cuántas sesiones necesitaré?',
      answer: 'Depende de tu situación particular. En la primera entrevista evaluaré tu caso y te daré una estimación. Generalmente, los procesos terapéuticos oscilan entre 8 y 20 sesiones.'
    },
    {
      question: '¿Qué especialidades tiene Aurea?',
      answer: 'Me especializo en terapia para adultos, con experiencia en ansiedad, depresión, estrés, problemas de autoestima y crecimiento personal.'
    },
    {
      question: '¿Cómo puedo pedir cita?',
      answer: 'Puedes contactarme por teléfono, WhatsApp o mediante el formulario de contacto en la web. Te responderé en máximo 24 horas.'
    },
    {
      question: '¿Qué métodos de pago aceptas?',
      answer: 'Aceptamos transferencia bancaria, tarjeta de crédito y efectivo. Envía un email para más detalles sobre opciones de pago.'
    }
  ];

  return (
    <section id="preguntas-frecuentes" className="py-16 md:py-24 bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-muted-foreground">Resuelve tus dudas sobre la terapia y el proceso</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="border-border cursor-pointer hover:shadow-md transition-shadow" onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  <ChevronDown size={20} className={`transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                </div>
              </CardHeader>
              {openIndex === idx && (
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
