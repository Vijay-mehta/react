import React from 'react';

const Popup = ({ isOpen, onClose, onApplyFilters, selectedFilters, handleSort }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-50">
      <div className="p-4 relative">
        <h2 className="text-lg font-bold mb-2 flex justify-between items-center">
          <span>Filter & Sort</span>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 9.293l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707A1 1 0 015.707 4.293L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </h2>

        <h3 className="font-semibold">Filter by Category</h3>
        <div className="flex flex-col mb-4">
          {Object.keys(selectedFilters).map((category) => (
            <label key={category} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={selectedFilters[category]}
                onChange={() => onApplyFilters(category)}
                className="mr-2"
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>

        <h3 className="font-semibold">Sort By</h3>
        <select onChange={(e) => handleSort(e.target.value)} className="border rounded p-2 mb-4">
          <option value="default">Default</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>

        <div className="flex justify-end">
          <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
