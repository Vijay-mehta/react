import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';

const products = [
  { id: 1, name: 'Adidas Running Shoes', price: 79.99, imgUrl: 'https://via.placeholder.com/200?text=Running+Shoes', category: 'shoes' },
  { id: 2, name: 'Adidas Soccer Cleats', price: 99.99, imgUrl: 'https://via.placeholder.com/200?text=Soccer+Cleats', category: 'shoes' },
  { id: 3, name: 'Adidas Originals Hoodie', price: 59.99, imgUrl: 'https://via.placeholder.com/200?text=Originals+Hoodie', category: 'clothing' },
  { id: 4, name: 'Adidas Track Jacket', price: 69.99, imgUrl: 'https://via.placeholder.com/200?text=Track+Jacket', category: 'clothing' },
  { id: 5, name: 'Adidas Sweatpants', price: 49.99, imgUrl: 'https://via.placeholder.com/200?text=Sweatpants', category: 'clothing' },
  { id: 6, name: 'Adidas Graphic T-Shirt', price: 29.99, imgUrl: 'https://via.placeholder.com/200?text=Graphic+T-Shirt', category: 'clothing' },
  { id: 7, name: 'Adidas Ultraboost Shoes', price: 179.99, imgUrl: 'https://via.placeholder.com/200?text=Ultraboost+Shoes', category: 'shoes' },
  { id: 8, name: 'Adidas Beanie', price: 24.99, imgUrl: 'https://via.placeholder.com/200?text=Beanie', category: 'clothing' },
  { id: 9, name: 'Adidas Backpack', price: 54.99, imgUrl: 'https://via.placeholder.com/200?text=Backpack', category: 'accessories' },
  { id: 10, name: 'Adidas Sport Bottle', price: 19.99, imgUrl: 'https://via.placeholder.com/200?text=Sport+Bottle', category: 'accessories' },
];

const Home = () => {
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    shoes: false,
    clothing: false,
    accessories: false,
  });

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleApplyFilters = (category) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: !prevFilters[category],
    }));
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const filteredProducts = products.filter(product => 
    !Object.values(selectedFilters).some(selected => selected) ? true : selectedFilters[product.category]
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">ALL PRODUCTS</h1>

      <div className="flex justify-end mb-4">
        <button
          className="flex items-center  bg-black text-white rounded px-4 py-2"
          onClick={handleOpenModal}
        >
          <span className="mr-2">Filter & Sort</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 18a1 1 0 01-.707-.293l-6-6a1 1 0 011.414-1.414L10 15.586l5.293-5.293a1 1 0 011.414 1.414l-6 6A1 1 0 0110 18z" />
          </svg>
        </button>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onApplyFilters={handleApplyFilters}
        selectedFilters={selectedFilters}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
