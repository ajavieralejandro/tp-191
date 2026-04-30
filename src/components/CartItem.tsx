// src/components/CartItem.tsx
import React from 'react';
import type { CartItem as CartItemType } from '../features/cart/cartSlice';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/cart/cartSlice';
import { useAppDispatch } from '../hooks';

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid #eee', padding: 8 }}>
      <span style={{ flex: 1 }}>{item.title}</span>
      <span>${item.price}</span>
      <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
    </div>
  );
};

export default CartItem;
