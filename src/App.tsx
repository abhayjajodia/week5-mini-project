import React from 'react';
import { Navbar } from './components/Navbar';
import { GameCard } from './components/GameCard';
import { ArrowRight, TrendingUp, Zap, Star } from 'lucide-react';

const featuredGames = [
  {
    title: "Cyber Odyssey 2077",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800",
    genre: "RPG",
    rating: 4,
    price: "$59.99"
  },
  {
    title: "Galaxy Warriors",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800",
    genre: "Action",
    rating: 5,
    price: "$49.99"
  },
  {
    title: "Racing Legends",
    image: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?auto=format&fit=crop&w=800",
    genre: "Racing",
    rating: 4,
    price: "$39.99"
  },
  {
    title: "Medieval Quest",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800",
    genre: "Adventure",
    rating: 4,
    price: "$44.99"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="h-[500px] w-full relative">
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2000"
            alt="Hero"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4">Welcome to GameHub</h1>
              <p className="text-xl text-gray-300 mb-8">Discover and play the best games</p>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors">
                Browse Games
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <TrendingUp className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Trending Games</h3>
            <p className="text-gray-400">Discover what's popular in the gaming community</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Zap className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Instant Access</h3>
            <p className="text-gray-400">Play your favorite games instantly</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Star className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Top Rated</h3>
            <p className="text-gray-400">Experience the highest rated games</p>
          </div>
        </div>
      </div>

      {/* Featured Games */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Games</h2>
          <button className="flex items-center text-purple-500 hover:text-purple-400">
            View All <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredGames.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-8">Subscribe to our newsletter for the latest gaming news and updates</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 text-white px-6 py-2 rounded-r-full hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;