import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Golf Wear
          </h1>

          <p className="text-gray-600 mb-6 text-lg">
            Discover high quality golf apparel designed for comfort,
            performance, and style on the course.
          </p>

          <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
            alt="Golf"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
