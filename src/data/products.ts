// src/data/products.ts
// Tipado y datos mock de productos

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Camiseta React',
    price: 25,
    image: 'https://via.placeholder.com/150?text=React',
  },
  {
    id: 2,
    title: 'Taza TypeScript',
    price: 15,
    image: 'https://via.placeholder.com/150?text=TS',
  },
  {
    id: 3,
    title: 'Sticker Vite',
    price: 5,
    image: 'https://via.placeholder.com/150?text=Vite',
  },
];
