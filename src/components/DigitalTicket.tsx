import { X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface CartItem {
  id: string;
  name: string;
  nameEs: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  quantity: number;
}

interface DigitalTicketProps {
  cartItems: CartItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function DigitalTicket({ cartItems, isOpen, onClose }: DigitalTicketProps) {
  if (!isOpen) return null;

  // Generate random order ID
  const orderId = `PM-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
  
  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

          {/* Cart Items */}
          <div className="mb-6 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 pb-4 border-b border-primary/10">
                <img
                  src={item.image}
                  alt={item.nameEs}
                  className="w-32 h-32 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    {item.nameEs}
                  </h3>
                  <p className="text-primary/70 text-sm mb-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary/70 text-sm">
                      Cantidad: <span className="font-bold text-primary">{item.quantity}</span>
                    </span>
                    <span className="font-heading text-xl font-bold text-accent">
                      ${item.price * item.quantity} {item.currency}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="pt-6 border-t-2 border-primary/20">
            <div className="flex justify-between items-center mb-4">
              <span className="font-heading text-xl font-semibold text-primary">
                Total:
              </span>
              <span className="font-heading text-3xl font-bold text-accent">
                ${total} {cartItems[0]?.currency || 'MXN'}
              </span>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-primary/10">
            <p className="text-center text-primary/60 text-sm italic font-body">
              Gracias por tu compra. Presenta este ticket al recoger tu pedido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
