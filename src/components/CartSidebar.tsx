import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
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

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: CartSidebarProps) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sidebarVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200,
      },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                <h2 className="font-heading text-2xl font-bold">Carrito</h2>
                {cartItems.length > 0 && (
                  <span className="bg-accent text-primary text-sm font-bold px-2 py-1 rounded-full">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-full"
                aria-label="Cerrar carrito"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-primary/30 mb-4" />
                  <p className="font-body text-primary/70 text-lg mb-2">
                    Tu carrito está vacío
                  </p>
                  <p className="font-body text-primary/50 text-sm">
                    Agrega productos para comenzar
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-background rounded-xl p-4 flex gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.nameEs}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-lg font-bold text-primary mb-1 truncate">
                          {item.nameEs}
                        </h3>
                        <p className="font-heading text-xl font-bold text-accent mb-3">
                          ${item.price} {item.currency}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-white rounded-lg border border-primary/20">
                            <button
                              onClick={() => {
                                if (item.quantity > 1) {
                                  onUpdateQuantity(item.id, item.quantity - 1);
                                } else {
                                  onRemoveItem(item.id);
                                }
                              }}
                              className="p-1.5 hover:bg-primary/10 rounded transition-colors"
                              aria-label="Disminuir cantidad"
                            >
                              <Minus className="w-4 h-4 text-primary" />
                            </button>
                            <span className="font-body font-semibold text-primary w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-primary/10 rounded transition-colors"
                              aria-label="Aumentar cantidad"
                            >
                              <Plus className="w-4 h-4 text-primary" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                            aria-label="Eliminar producto"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <p className="font-body text-sm text-primary/70 mt-2">
                          Subtotal: ${item.price * item.quantity} {item.currency}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with Total and Checkout */}
            {cartItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-primary/20 p-6 bg-background"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-heading text-xl font-semibold text-primary">
                    Total:
                  </span>
                  <span className="font-heading text-3xl font-bold text-accent">
                    ${total} {cartItems[0]?.currency || 'MXN'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    // Generate ticket and show it
                    const orderId = `PM-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
                    alert(`Orden ${orderId} generada. Total: $${total} ${cartItems[0]?.currency || 'MXN'}`);
                  }}
                  className="w-full bg-primary text-white py-4 rounded-xl font-body font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Finalizar Compra
                </button>
                <p className="text-center text-primary/60 text-xs mt-3 font-body">
                  {siteConfig.bakery.address}
                </p>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

