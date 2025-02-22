import React from 'react';

interface FeaturedDishProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

const FeaturedDish: React.FC<FeaturedDishProps> = ({ image, name, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-red-600 font-bold">{price}</span>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDish;