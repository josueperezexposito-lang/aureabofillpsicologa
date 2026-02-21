import { Button } from '@/components/ui/button';

interface HeroProps {
  backgroundImage?: string;
}

export default function Hero({ backgroundImage }: HeroProps) {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-28 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/15"></div>
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Terapia para adultos en Petrer y Elda"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          width="1920"
          height="1080"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      )}
      <div className="container relative z-10 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-xl md:text-2xl font-medium text-foreground mb-2 leading-tight">
            Psicóloga en Petrer y Elda
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            Terapia especializada para adultos
          </h2>
          <p className="text-base md:text-lg text-black mb-8 leading-relaxed min-h-fit max-w-2xl mx-auto">
            Soy <strong>Aurea Bofill</strong>, psicóloga sanitaria especializada en terapia individual para adultos. Te acompaño en el camino hacia tu bienestar emocional, ayudándote a superar ansiedad, depresión, estrés y alcanzar tu mejor versión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://wa.me/34652250697?text=Hola%20Aurea%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-3 rounded-lg shadow-lg h-12 min-w-max font-medium" style={{ lineHeight: '1.5rem' }}>
                Pedir cita
              </Button>
            </a>
            <a href="/sobre-mi">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-base px-8 py-3 rounded-lg h-12 min-w-max font-medium" style={{ lineHeight: '1.5rem' }}>
                Sobre mí
              </Button>
            </a>
          </div>
          <p className="text-sm text-black h-6">
            📍 Petrer y Elda, Alicante | 💬 Consultas presenciales y online
          </p>
        </div>
      </div>
    </section>
  );
}
