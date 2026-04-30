// src/components/ProductCard.tsx
import React from 'react';
import type { Product } from '../data/products';
import { useAppDispatch } from '../hooks';
import { addToCart } from '../features/cart/cartSlice';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, margin: 8, width: 200 }}>
      <img src={product.image} alt={product.title} style={{ width: '100%' }} />
      <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
