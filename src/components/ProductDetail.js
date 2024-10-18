import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, description: 'This is Product 1.' },
  { id: 2, name: 'Product 2', price: 39.99, description: 'This is Product 2.' },
  // Add more products as needed
];

const ProductDetail = ({ addToCart }) => {
  const { productId } = useParams();
  const product = products.find((prod) => prod.id === parseInt(productId));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
