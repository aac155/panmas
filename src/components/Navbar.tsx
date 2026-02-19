import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nosotrosLinks = [
    { label: 'Misión', href: '#mision' },
    { label: 'Visión', href: '#vision' },
    { label: 'Valores', href: '#valores' },
    { label: 'Diferenciador', href: '#diferenciador' },
    { label: 'Certificaciones', href: '#certificaciones' },
  ];

  const navLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Tienda', href: '#products' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Comentario', href: '#comentarios' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDF5E6] shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO - Espacio preparado para tu imagen */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="PanMas Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.insertAdjacentHTML('afterbegin', `<span class="font-heading text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}">${siteConfig.branding.name}</span>`);
                }}
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className={`font-body text-sm font-medium transition-colors ${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent`}>
              Inicio
            </a>
            <a href="#products" className={`font-body text-sm font-medium transition-colors ${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent`}>
              Tienda
            </a>

            {/* Dropdown Nosotros */}
            <div 
              className="relative"
              onMouseEnter={() => setIsNosotrosOpen(true)}
              onMouseLeave={() => setIsNosotrosOpen(false)}
            >
              <button className={`flex items-center gap-1 font-body text-sm font-medium transition-colors ${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent`}>
                Nosotros <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isNosotrosOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 z-50"
                  >
                    {nosotrosLinks.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#proceso" className={`font-body text-sm font-medium transition-colors ${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent`}>
              Proceso
            </a>
            <a href="#comentarios" className={`font-body text-sm font-medium transition-colors ${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent`}>
              Comentario
            </a>
          </div>

          {/* Iconos Derecha */}
          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className={`relative p-2 rounded-full transition-colors ${
                isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-primary text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white rounded-b-xl px-4 pb-6 shadow-xl"
            >
              <div className="flex flex-col space-y-4 pt-4 text-primary">
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
                <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Tienda</a>
                <div className="font-bold border-b pb-1">Nosotros:</div>
                {nosotrosLinks.map(link => (
                  <a key={link.href} href={link.href} className="pl-4 text-sm" onClick={() => setIsMobileMenuOpen(false)}>{link.label}</a>
                ))}
                <a href="#proceso" onClick={() => setIsMobileMenuOpen(false)}>Proceso</a>
                <a href="#comentarios" onClick={() => setIsMobileMenuOpen(false)}>Comentario</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}