import Hero from './components/Hero';
import About from './components/About';
import ProductGrid from './components/ProductGrid';
import { siteConfig } from './config/siteConfig';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ProductGrid />
      
      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-heading text-3xl font-bold mb-4">PanMas</h3>
          <p className="text-white/80 mb-2">{siteConfig.bakery.address}</p>
          <p className="text-white/80">Tel: {siteConfig.bakery.phone}</p>
          <p className="text-white/60 text-sm mt-6">
            © {new Date().getFullYear()} PanMas Bakery. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

