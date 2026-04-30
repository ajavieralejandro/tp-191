// src/pages/CartPage.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import CartItem from '../components/CartItem';
import { clearCart } from '../features/cart/cartSlice';

const CartPage: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 16 }}>
      <h2>Carrito de compras</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <hr />
          <p>Total de ítems: {totalItems}</p>
          <p>Total a pagar: ${total}</p>
          <button onClick={() => dispatch(clearCart())}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
