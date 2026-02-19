import { X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface DigitalTicketProps {
  product: typeof siteConfig.products[0];
  isOpen: boolean;
  onClose: () => void;
}

export default function DigitalTicket({ product, isOpen, onClose }: DigitalTicketProps) {
  if (!isOpen) return null;

  // Generate random order ID
  const orderId = `PM-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ticket Header */}
        <div className="bg-primary text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-2">
                {siteConfig.bakery.name}
              </h2>
              <p className="text-white/90 text-sm">{siteConfig.bakery.address}</p>
              <p className="text-white/90 text-sm">Tel: {siteConfig.bakery.phone}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-accent transition-colors"
              aria-label="Close ticket"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Ticket Body */}
        <div className="p-8">
          {/* Order Info */}
          <div className="mb-6 pb-6 border-b-2 border-dashed border-primary/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-primary/70 text-sm">Orden ID:</span>
              <span className="font-bold text-primary">{orderId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-primary/70 text-sm">Fecha:</span>
              <span className="text-primary">
                {new Date().toLocaleDateString('es-MX', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="mb-6">
            <div className="flex gap-6 mb-4">
              <img
                src={product.image}
                alt={product.nameEs}
                className="w-32 h-32 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  {product.nameEs}
                </h3>
                <p className="text-primary/70 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary/70">Cantidad:</span>
                  <span className="font-bold text-primary">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="pt-6 border-t-2 border-primary/20">
            <div className="flex justify-between items-center mb-4">
              <span className="font-heading text-xl font-semibold text-primary">
                Total:
              </span>
              <span className="font-heading text-3xl font-bold text-accent">
                ${product.price} {product.currency}
              </span>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-primary/10">
            <p className="text-center text-primary/60 text-sm italic">
              Gracias por tu compra. Presenta este ticket al recoger tu pedido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

