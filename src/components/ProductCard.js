import React from 'react';

const ProductCard = ({ name, price, imgUrl }) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:border-gray-800 hover:shadow-lg">
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-700">${price.toFixed(2)}</p>
      <button className="mt-4 bg-black text-white rounded-md px-4 py-2 hover:bg-gray-800 transition-colors duration-200 ease-in-out">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
