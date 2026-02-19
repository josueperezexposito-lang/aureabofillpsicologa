import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'María García',
      city: 'Elda',
      rating: 5,
      text: 'Aurea es una profesional excepcional. Me ayudó a superar mi ansiedad con técnicas muy efectivas. Recomiendo sus servicios sin dudarlo.',
      verified: true
    },
    {
      name: 'Juan López',
      city: 'Petrer',
      rating: 5,
      text: 'Pasaba por un momento muy difícil. Con Aurea aprendí a gestionar mis emociones y ahora me siento mucho mejor. Muy recomendable.',
      verified: true
    },
    {
      name: 'Carmen Rodríguez',
      city: 'Elda',
      rating: 5,
      text: 'Profesional cercana y muy humana. Me sentí comprendida desde la primera sesión. Excelente terapia.',
      verified: true
    },
    {
      name: 'Pedro Martínez',
      city: 'Petrer',
      rating: 5,
      text: 'La terapia con Aurea cambió mi vida. Es una persona muy empática y profesional. Totalmente recomendable.',
      verified: true
    },
    {
      name: 'Isabel Fernández',
      city: 'Elda',
      rating: 5,
      text: 'Excelente atención. Aurea me ayudó a recuperar mi autoestima y confianza. Muy profesional y empática.',
      verified: true
    },
    {
      name: 'Antonio Sánchez',
      city: 'Petrer',
      rating: 5,
      text: 'Sesiones muy productivas. Aurea tiene un enfoque muy práctico y efectivo. Recomendado 100%.',
      verified: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, reviews.length]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Lo que dicen nuestros pacientes</h2>
          <p className="text-lg text-black">Valoración 4.9/5 basada en reseñas verificadas</p>
        </div>

        {/* Carrusel Desktop - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {reviews.slice(0, 2).map((review, idx) => (
            <Card key={idx} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-black mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-black">{review.city}</p>
                  </div>
                  {review.verified && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verificada</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Carrusel Mobile - Único */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div className="transition-transform duration-500 ease-out" style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
              <div className="flex">
                {reviews.map((review, idx) => (
                  <div key={idx} className="w-full flex-shrink-0">
                    <Card className="border-border mx-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-black mb-4 italic">"{review.text}"</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-foreground">{review.name}</p>
                            <p className="text-sm text-black">{review.city}</p>
                          </div>
                          {review.verified && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verificada</span>}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controles Carrusel */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-primary hover:bg-primary/90 text-white p-2 rounded-full transition-colors"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-primary hover:bg-primary/90 text-white p-2 rounded-full transition-colors"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicadores de Puntos */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Vista Desktop - Todos los testimonios en grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {reviews.slice(2).map((review, idx) => (
            <Card key={idx + 2} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-black mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-black">{review.city}</p>
                  </div>
                  {review.verified && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verificada</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
