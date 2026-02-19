import { Plus } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface Product {
  id: string;
  name: string;
  nameEs: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category?: string;
}

interface ProductGridProps {
  selectedCategory: string;
  onAddToCart: (product: Product) => void;
}

// Map products to categories (since we can't modify siteConfig)
const getProductCategory = (productId: string): string => {
  if (productId.includes('sourdough')) return 'sourdough';
  if (productId.includes('baguette')) return 'sourdough';
  if (productId.includes('focaccia')) return 'sourdough';
  return 'all';
};

export default function ProductGrid({ selectedCategory, onAddToCart }: ProductGridProps) {
  // Add category to products
  const productsWithCategory = siteConfig.products.map((product) => ({
    ...product,
    category: getProductCategory(product.id),
  }));

  // Filter products by category
  const filteredProducts =
    selectedCategory === 'all'
      ? productsWithCategory
      : productsWithCategory.filter((product) => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Nuestros Productos
        </h2>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="font-body text-primary/70 text-lg">
              No hay productos en esta categoría.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                  <p className="text-primary/70 mb-4 text-sm leading-relaxed font-body">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl font-bold text-accent">
                      ${product.price} {product.currency}
                    </span>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors duration-200 font-medium font-body"
                    >
                      <Plus className="w-5 h-5" />
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
