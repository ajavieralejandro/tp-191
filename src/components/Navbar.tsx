// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

const Navbar: React.FC = () => {
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  return (
    <nav style={{ display: 'flex', gap: 16, padding: 16, background: '#f5f5f5', alignItems: 'center' }}>
      <Link to="/">Productos</Link>
      <Link to="/cart">Carrito ({totalItems})</Link>
    </nav>
  );
};

export default Navbar;
