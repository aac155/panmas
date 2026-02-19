import { Wheat, Croissant, Coffee } from 'lucide-react';

interface CategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'Todos', icon: Wheat },
  { id: 'sourdough', label: 'Masa Madre', icon: Wheat },
  { id: 'pastry', label: 'Pastelería', icon: Croissant },
  { id: 'special', label: 'Blends Especiales', icon: Coffee },
];

export default function Categories({ selectedCategory, onCategoryChange }: CategoriesProps) {
  return (
    <section className="py-12 px-4 bg-[#FDF5E6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-full transition-all duration-300 ${
                  isSelected
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-primary hover:bg-primary/10 hover:scale-105'
                }`}
              >
                <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-accent'}`} />
                <span className="font-body text-sm font-medium whitespace-nowrap">
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

