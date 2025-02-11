import React from 'react';
import { Heart, Share2, Star } from 'lucide-react';

interface GameCardProps {
  title: string;
  image: string;
  genre: string;
  rating: number;
  price: string;
}

export function GameCard({ title, image, genre, rating, price }: GameCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <span className="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2">
          {genre}
        </span>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
              }`}
            />
          ))}
          {/* <Star
          key={rating}
          /> */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">{price}</span>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <Heart className="w-5 h-5 text-red-500" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full">
              <Share2 className="w-5 h-5 text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}