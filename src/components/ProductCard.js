import React from 'react';

const ProductCard = ({ name, price, imgUrl, addToCart }) => {
  return (
    <div className="border rounded-md p-4 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg">
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-700">${price.toFixed(2)}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart({ name, price });
        }}
        className="mt-4 w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
