import React from 'react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">{BRAND_NAME}</h3>
          <p className="text-sm">Feito à mão com amor.</p>
        </div>
        
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs text-stone-600">Imagens ilustrativas.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;