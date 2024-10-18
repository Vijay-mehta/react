import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Adidas Running Shoes', price: 79.99, imgUrl: 'https://via.placeholder.com/200?text=Running+Shoes' },
  { id: 2, name: 'Adidas Soccer Cleats', price: 99.99, imgUrl: 'https://via.placeholder.com/200?text=Soccer+Cleats' },
  { id: 3, name: 'Adidas Originals Hoodie', price: 59.99, imgUrl: 'https://via.placeholder.com/200?text=Originals+Hoodie' },
  { id: 4, name: 'Adidas Track Jacket', price: 69.99, imgUrl: 'https://via.placeholder.com/200?text=Track+Jacket' },
  { id: 5, name: 'Adidas Sweatpants', price: 49.99, imgUrl: 'https://via.placeholder.com/200?text=Sweatpants' },
  { id: 6, name: 'Adidas Graphic T-Shirt', price: 29.99, imgUrl: 'https://via.placeholder.com/200?text=Graphic+T-Shirt' },
  { id: 7, name: 'Adidas Ultraboost Shoes', price: 179.99, imgUrl: 'https://via.placeholder.com/200?text=Ultraboost+Shoes' },
  { id: 8, name: 'Adidas Beanie', price: 24.99, imgUrl: 'https://via.placeholder.com/200?text=Beanie' },
  { id: 9, name: 'Adidas Backpack', price: 54.99, imgUrl: 'https://via.placeholder.com/200?text=Backpack' },
  { id: 10, name: 'Adidas Sport Bottle', price: 19.99, imgUrl: 'https://via.placeholder.com/200?text=Sport+Bottle' },
];

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Adidas Outlet</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} addToCart={addToCart} />
        ))}
      </div>

   
    </div>
  );
};

export default Home;
