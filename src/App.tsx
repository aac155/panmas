import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import ProductGrid from './components/ProductGrid';
import Location from './components/Location';
import Footer from './components/Footer';
import DigitalTicket from './components/DigitalTicket';
import { siteConfig } from './config/siteConfig';

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

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isTicketOpen, setIsTicketOpen] = useState(false);

  const addToCart = (product: typeof siteConfig.products[0]) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            nameEs: product.nameEs,
            description: product.description,
            price: product.price,
            currency: product.currency,
            image: product.image,
            quantity: 1,
          },
        ];
      }
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    if (cart.length > 0) {
      setIsTicketOpen(true);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar cartCount={cartCount} onCartClick={handleCartClick} />
      
      <div id="home">
        <Hero />
      </div>

      <Categories
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div id="about">
        <About />
      </div>

      <ProductGrid
        selectedCategory={selectedCategory}
        onAddToCart={addToCart}
      />

      <Location />

      <Footer />

      <DigitalTicket
        cartItems={cart}
        isOpen={isTicketOpen}
        onClose={() => setIsTicketOpen(false)}
      />
    </div>
  );
}

export default App;
