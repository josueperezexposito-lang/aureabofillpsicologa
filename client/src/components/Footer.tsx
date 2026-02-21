import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">
                AB
              </div>
              <div>
                <p className="font-bold">Aurea Bofill</p>
                <p className="text-xs text-gray-400">Psicóloga sanitaria</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Terapia especializada para adultos en Petrer y Elda.
            </p>
          </div>

          {/* Services Silo */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <p onClick={() => setLocation("/servicios/ansiedad")} className="hover:text-primary cursor-pointer transition-colors">Terapia Ansiedad</p>
              </li>
              <li>
                <p onClick={() => setLocation("/servicios/depresion")} className="hover:text-primary cursor-pointer transition-colors">Terapia Depresión</p>
              </li>
              <li>
                <p onClick={() => setLocation("/servicios/estres")} className="hover:text-primary cursor-pointer transition-colors">Gestión Estrés</p>
              </li>
              <li>
                <p onClick={() => setLocation("/servicios/autoestima")} className="hover:text-primary cursor-pointer transition-colors">Mejora Autoestima</p>
              </li>
            </ul>
          </div>



          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-primary" />
                <a href="tel:+34611154333" className="hover:text-primary">611 15 43 33</a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-primary" />
                <a href="mailto:info@" className="hover:text-primary">info@aureabofill.es</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
                <p>Pl. Paco López Pina, 6, 03610 Petrer, Alicante</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0 text-primary" />
                <p>Lunes-Viernes 9:00-20:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links for SEO */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-400">
            <p onClick={() => setLocation("/")} className="hover:text-primary cursor-pointer">Inicio</p>
            <p onClick={() => setLocation("/#sobre-mi")} className="hover:text-primary cursor-pointer">Sobre Mí</p>
            <p onClick={() => setLocation("/#blog")} className="hover:text-primary cursor-pointer">Blog</p>
            <p onClick={() => setLocation("/#faq")} className="hover:text-primary cursor-pointer">Preguntas Frecuentes</p>
            <p onClick={() => setLocation("/#testimonios")} className="hover:text-primary cursor-pointer">Testimonios</p>
            <p onClick={() => setLocation("/#precios")} className="hover:text-primary cursor-pointer">Precios</p>
            <p onClick={() => setLocation("/#contacto")} className="hover:text-primary cursor-pointer">Contacto</p>
            <p className="hover:text-primary cursor-pointer">Política Privacidad</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Aurea Bofill - Psicóloga en Petrer y Elda. Todos los derechos reservados.</p>
          <p className="mt-2">Optimizado para SEO Local | Terapia Cognitivo-Conductual</p>
        </div>
      </div>
    </footer>
  );
}
