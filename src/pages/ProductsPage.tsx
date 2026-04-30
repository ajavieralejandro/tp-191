// src/pages/ProductsPage.tsx
import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductsPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
