import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Header() {
  const [, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div onClick={() => setLocation("/")} className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
            AB
          </div>
          <div>
            <p className="font-bold text-foreground">Aurea Bofill</p>
            <p className="text-xs text-muted-foreground">Psicóloga</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => setLocation("/")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Inicio
          </button>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
              Servicios
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute left-0 mt-0 w-80 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4">
              <div className="grid grid-cols-2 gap-6 px-6">
                <div>
                  <p className="font-bold text-sm text-foreground mb-4">Terapia individual</p>
                  <div className="space-y-3">
                    <button
                      onClick={() => setLocation("/servicios/ansiedad")}
                      className="block text-sm text-black hover:text-primary transition-colors"
                    >
                      Ansiedad
                    </button>
                    <button
                      onClick={() => setLocation("/servicios/depresion")}
                      className="block text-sm text-black hover:text-primary transition-colors"
                    >
                      Depresión
                    </button>
                    <button
                      onClick={() => setLocation("/servicios/estres")}
                      className="block text-sm text-black hover:text-primary transition-colors"
                    >
                      Estrés
                    </button>
                    <button
                      onClick={() => setLocation("/servicios/autoestima")}
                      className="block text-sm text-black hover:text-primary transition-colors"
                    >
                      Autoestima
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <button
            onClick={() => setLocation("/sobre-mi")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Sobre mí
          </button>

          <button
            onClick={() => setLocation("/contacto")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contacto
          </button>
        </nav>

        {/* CTA Button */}
        <a href="https://wa.me/34652250697?text=Hola%20Aurea%2C%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n%20de%20valoraci%C3%B3n" target="_blank" rel="noopener noreferrer">
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Pedir cita
          </Button>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border p-4 space-y-4">
          <button
            onClick={() => { setLocation("/"); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-foreground hover:text-primary cursor-pointer font-medium"
          >
            Inicio
          </button>

          <div className="border-t border-border pt-4">
            <p className="font-bold text-sm text-foreground mb-3">Servicios</p>
            <div className="space-y-2 ml-4">
              <button
                onClick={() => { setLocation("/servicios/ansiedad"); setMobileMenuOpen(false); }}
                className="block w-full text-left py-2 text-black hover:text-primary cursor-pointer text-sm"
              >
                Ansiedad
              </button>
              <button
                onClick={() => { setLocation("/servicios/depresion"); setMobileMenuOpen(false); }}
                className="block w-full text-left py-2 text-black hover:text-primary cursor-pointer text-sm"
              >
                Depresión
              </button>
              <button
                onClick={() => { setLocation("/servicios/estres"); setMobileMenuOpen(false); }}
                className="block w-full text-left py-2 text-black hover:text-primary cursor-pointer text-sm"
              >
                Estrés
              </button>
              <button
                onClick={() => { setLocation("/servicios/autoestima"); setMobileMenuOpen(false); }}
                className="block w-full text-left py-2 text-black hover:text-primary cursor-pointer text-sm"
              >
                Autoestima
              </button>

            </div>
          </div>

          <button
            onClick={() => { setLocation("/sobre-mi"); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-foreground hover:text-primary cursor-pointer font-medium"
          >
            Sobre mí
          </button>

          <button
            onClick={() => { setLocation("/contacto"); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-foreground hover:text-primary cursor-pointer font-medium"
          >
            Contacto
          </button>

          <a href="https://wa.me/34652250697?text=Hola%20Aurea%2C%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n%20de%20valoraci%C3%B3n" target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full mt-4">
              Pedir cita
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
