import React from 'react';
import { Instagram, Send, Mail } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-rose-900 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl overflow-hidden relative">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" 
                 style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px'}}>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold">Faça sua encomenda</h2>
                <p className="text-rose-100 text-lg md:text-xl font-light">
                    Gostou de alguma peça? Todos os pedidos são personalizados e feitos com muito carinho através do nosso Instagram.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
                    <a 
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-white text-rose-900 px-8 py-4 rounded-full font-bold hover:bg-rose-50 transition-colors shadow-lg"
                    >
                        <Instagram size={24} />
                        <span>Chamar no Direct</span>
                    </a>
                </div>

                <div className="mt-12 pt-8 border-t border-rose-800/50 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-rose-200">
                    <div className="flex items-center gap-2">
                        <Send size={16} />
                        <span>@{INSTAGRAM_HANDLE}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>Envios para todo o Brasil</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;