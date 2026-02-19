import { Instagram, Facebook, Twitter } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-primary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl font-bold mb-4">PanMas</h3>
            <p className="text-white/80 font-body mb-4">
              El arte de la paciencia en cada hogaza. Panadería artesanal con tradición y sabor.
            </p>
            <div className="inline-block bg-accent/20 px-4 py-2 rounded-full">
              <span className="text-accent font-body text-sm font-semibold">
                ✨ Calidad Artesanal
              </span>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-4">Horarios</h4>
            <div className="space-y-2 text-white/80 font-body text-sm">
              <p>Lunes - Viernes: 7:00 AM - 8:00 PM</p>
              <p>Sábado: 6:00 AM - 9:00 PM</p>
              <p>Domingo: 7:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-4">Contacto</h4>
            <p className="text-white/80 font-body text-sm mb-4">
              {siteConfig.bakery.address}
            </p>
            <p className="text-white/80 font-body text-sm mb-6">
              Tel: {siteConfig.bakery.phone}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 font-body text-sm">
            © {new Date().getFullYear()} PanMas Bakery. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

