import React from 'react';
import { useCart } from '../../context/CartContext';
import formatToIDRCurrency from '../../utils/formatToIDRCurrency';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="py-2 px-4 border-b">Product</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.quantity}</td>
                  <td className="py-2 px-4 border-b">{formatToIDRCurrency(item.price * item.quantity)}</td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between items-center">
            <button onClick={clearCart} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Clear Cart</button>
            <span className="text-lg font-semibold">Total: {formatToIDRCurrency(cart.reduce((total, item) => total + item.price * item.quantity, 0))}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;