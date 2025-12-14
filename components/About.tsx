import React from 'react';
import { ABOUT_TEXT, FEATURES } from '../constants';
import { Gem, Hand, Package, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Gem': <Gem size={32} />,
  'Hand': <Hand size={32} />,
  'Package': <Package size={32} />,
  'Sparkles': <Sparkles size={32} />
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
              Sobre a <span className="text-rose-500">Bijuday</span>
            </h2>
            <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
          </div>

          <div className="bg-rose-50 rounded-3xl p-8 md:p-12 shadow-sm border border-rose-100">
            <div className="prose prose-lg text-stone-700 mx-auto font-light leading-relaxed whitespace-pre-line text-center md:text-justify">
              {ABOUT_TEXT}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3 group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-md group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="font-bold text-stone-800">{feature.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;