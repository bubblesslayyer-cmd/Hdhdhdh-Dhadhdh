import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Heart, Search } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');

  const filteredProducts = filter === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const categories = ['Todos', 'Colar', 'Brinco', 'Bracelete', 'Conjunto'];

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-rose-500 font-bold tracking-widest text-sm uppercase">Nossa Coleção</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 mt-2">Destaques</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? 'bg-rose-500 text-white shadow-lg scale-105' 
                  : 'bg-white text-stone-600 hover:bg-rose-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button className="bg-white p-3 rounded-full text-rose-500 hover:bg-rose-500 hover:text-white transition-colors" title="Ver Detalhes">
                <Search size={20} />
            </button>
             <button className="bg-white p-3 rounded-full text-rose-500 hover:bg-rose-500 hover:text-white transition-colors" title="Favoritar">
                <Heart size={20} />
            </button>
        </div>
        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-stone-800 uppercase tracking-wide backdrop-blur-sm">
            {product.category}
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="font-serif font-bold text-xl text-stone-800 mb-2">{product.name}</h3>
        <p className="text-sm text-stone-500 mb-4">{product.description}</p>
        <button className="text-rose-500 font-bold text-sm uppercase tracking-wider hover:text-rose-700 transition-colors border-b-2 border-transparent hover:border-rose-500 pb-1">
            Encomendar via Direct
        </button>
      </div>
    </div>
  );
};

export default Gallery;