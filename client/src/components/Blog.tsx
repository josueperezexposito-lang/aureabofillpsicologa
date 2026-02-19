import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: '5 técnicas de terapia cognitivo-conductual para la ansiedad',
      excerpt: 'Descubre estrategias prácticas para gestionar la ansiedad en tu día a día. Técnicas basadas en TCC que funcionan.',
      date: '15 Feb 2026',
      author: 'Aurea Bofill',
      category: 'Ansiedad',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Señales de depresión: Cuándo buscar ayuda profesional',
      excerpt: 'Señales de alerta y cuándo es el momento de buscar apoyo psicológico. Guía práctica para identificar la depresión.',
      date: '12 Feb 2026',
      author: 'Aurea Bofill',
      category: 'Depresión',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Estrés crónico: Impacto en tu salud mental y física',
      excerpt: 'Entiende cómo el estrés afecta tu cuerpo y mente. Estrategias para reducir el estrés y mejorar tu bienestar.',
      date: '10 Feb 2026',
      author: 'Aurea Bofill',
      category: 'Estrés',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Autoestima y confianza: Cómo construir una imagen positiva',
      excerpt: 'Trabaja en tu autoestima con ejercicios prácticos. Mejora tu relación contigo mismo y con los demás.',
      date: '8 Feb 2026',
      author: 'Aurea Bofill',
      category: 'Crecimiento Personal',
      readTime: '5 min'
    }
  ];

  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog de Psicología</h2>
          <p className="text-lg text-muted-foreground">Artículos sobre salud mental, bienestar y crecimiento personal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {articles.map((article) => (
            <Card key={article.id} className="border-border hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{article.category}</span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {article.author}
                  </div>
                </div>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Leer más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full">
            Ver todos los artículos
          </Button>
        </div>
      </div>
    </section>
  );
}
