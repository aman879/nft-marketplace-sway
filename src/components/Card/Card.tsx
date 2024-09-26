import React from "react";

interface CardProps {
  name: string;
  price: number; 
  photo: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, price, photo, description }) => {
  return (
    <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 rounded-lg shadow-md m-4 md:mx-0 max-w-full sm:max-w-xs w-full">
      <img
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg mb-2"
        alt={name}
        src={photo}
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-800 text-base sm:text-lg font-semibold">Price: {price} ETH</p>
        </div>
        <p className="text-gray-600 text-sm md:text-base mb-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
