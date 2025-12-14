import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_TEXT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-rose-50/50">
      {/* Decorative Background Circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="order-2 md:order-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-rose-100">
            <Sparkles size={16} className="text-rose-500" />
            <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Em breve loja disponível</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-800 leading-tight">
            {HERO_TEXT.title.split(' ').map((word, i) => (
              <span key={i} className={i === 2 || i === 3 ? "text-rose-500" : ""}>{word} </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
            {HERO_TEXT.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#gallery" 
              className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full hover:bg-stone-800 transition-all hover:scale-105 shadow-lg group"
            >
              <span>{HERO_TEXT.cta}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white text-stone-800 border border-stone-200 px-8 py-4 rounded-full hover:bg-stone-50 transition-colors"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        {/* Hero Image / Illustration Placeholder */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            {/* Using a placeholder that mimics the line art style of the logo provided in the prompt */}
             <div className="w-full h-full rounded-full border-8 border-white shadow-2xl overflow-hidden bg-white flex items-center justify-center relative">
                {/* This represents the Logo provided by user */}
                <img 
                  src="https://picsum.photos/id/64/800/800" 
                  alt="Woman Line Art" 
                  className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent"></div>
             </div>
             
             {/* Floating badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-50 max-w-xs hidden md:block animate-bounce" style={{animationDuration: '3s'}}>
                <p className="font-serif text-lg font-bold text-stone-800">100% Artesanal</p>
                <p className="text-stone-500 text-sm">Feito com carinho para você</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;