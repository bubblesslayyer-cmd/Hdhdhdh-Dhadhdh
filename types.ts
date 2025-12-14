export interface Product {
  id: number;
  name: string;
  category: 'Brinco' | 'Colar' | 'Bracelete' | 'Conjunto';
  price?: string; // Optional since it's customizable/contact for price
  image: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}