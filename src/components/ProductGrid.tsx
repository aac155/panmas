import { ShoppingBag } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useState } from 'react';
import DigitalTicket from './DigitalTicket';

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<typeof siteConfig.products[0] | null>(null);
  const [isTicketOpen, setIsTicketOpen] = useState(false);

  const handlePurchase = (product: typeof siteConfig.products[0]) => {
    setSelectedProduct(product);
    setIsTicketOpen(true);
  };

  return (
    <>
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Nuestros Productos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.nameEs}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    {product.nameEs}
                  </h3>
                  <p className="text-primary/70 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl font-bold text-accent">
                      ${product.price} {product.currency}
                    </span>
                    <button
                      onClick={() => handlePurchase(product)}
                      className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors duration-200 font-medium"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <DigitalTicket
          product={selectedProduct}
          isOpen={isTicketOpen}
          onClose={() => setIsTicketOpen(false)}
        />
      )}
    </>
  );
}

