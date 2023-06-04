import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Spurs Gallery
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md mx-2"
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md mx-2"
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;