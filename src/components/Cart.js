import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const updateQuantity = (product, quantity) => {
    setCartItems(cartItems.map(item =>
      item.name === product.name ? { ...item, quantity } : item
    ));
  };

  const removeItem = (product) => {
    setCartItems(cartItems.filter(item => item.name !== product.name));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.name} className="border-b py-4 flex justify-between items-center">
            <div>
              <h2 className="text-lg">{item.name}</h2>
              <p className="text-gray-700">${item.price}</p>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                className="border w-16 text-center"
              />
              <button
                onClick={() => removeItem(item)}
                className="ml-4 text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
