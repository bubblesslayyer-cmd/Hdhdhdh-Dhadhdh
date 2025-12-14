import { Product } from './types';

export const BRAND_NAME = "Bijuday";
export const INSTAGRAM_HANDLE = "_bijuday_";
export const INSTAGRAM_URL = "https://instagram.com/_bijuday_";

export const HERO_TEXT = {
  title: "Descubra seu novo acessório favorito!",
  subtitle: "Semijoias e peças únicas feitas à mão com amor e criatividade.",
  cta: "Ver Coleção"
};

export const ABOUT_TEXT = `Olá! Bem-vindo à minha loja online de bijuterias artesanais! 💎

Quando a inspiração bate, a criatividade flui! Cada peça é feita à mão com amor e criatividade, sendo uma expressão única da minha paixão por criar algo especial. 💞

Sou uma empresária iniciante, começando esse projeto com muito carinho e dedicação. Em breve, a loja on-line estará aberta para que você possa adquirir suas bijuterias exclusivas! 📦

Os pedidos são feitos on-line pelo direct e tudo é personalizado, para que você tenha uma peça única e especial, feita especialmente para você! 👩🏻‍💻

Espero que você encontre algo que faça seu coração brilhar! 😊`;

export const FEATURES = [
  { icon: 'Gem', text: 'Semijoias Exclusivas' },
  { icon: 'Hand', text: 'Feito à Mão' },
  { icon: 'Package', text: 'Encomendas via Direct' },
  { icon: 'Sparkles', text: 'Peças Personalizadas' }
];

// Mock Products - Using placeholder images that look somewhat like jewelry contexts
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Colar Delicado Pérola",
    category: "Colar",
    image: "https://picsum.photos/id/1011/400/400", 
    description: "Um colar minimalista para o dia a dia."
  },
  {
    id: 2,
    name: "Brincos Cascata de Cristal",
    category: "Brinco",
    image: "https://picsum.photos/id/338/400/400",
    description: "Brilho intenso para ocasiões especiais."
  },
  {
    id: 3,
    name: "Bracelete Boho Chic",
    category: "Bracelete",
    image: "https://picsum.photos/id/342/400/400",
    description: "Feito à mão com pedras naturais."
  },
  {
    id: 4,
    name: "Conjunto Amor Eterno",
    category: "Conjunto",
    image: "https://picsum.photos/id/103/400/400",
    description: "A combinação perfeita para presentear."
  }
];