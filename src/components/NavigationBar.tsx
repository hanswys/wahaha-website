import React, { useState } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-red-600">WAHAHA</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-red-600' : 'text-gray-700'
              } hover:text-red-600 transition duration-300`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`${
                isActive('/menu') ? 'text-red-600' : 'text-gray-700'
              } hover:text-red-600 transition duration-300`}
            >
              Menu
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-red-600' : 'text-gray-700'
              } hover:text-red-600 transition duration-300`}
            >
              Contact
            </Link>
            <button
              onClick={() => window.open('https://www.beyondmenu.com/25368/edmond/wahaha-express-edmond-73034.aspx', '')}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Order Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 ${
                  isActive('/') ? 'text-red-600' : 'text-gray-700'
                } hover:text-red-600 transition duration-300`}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className={`block px-3 py-2 ${
                  isActive('/menu') ? 'text-red-600' : 'text-gray-700'
                } hover:text-red-600 transition duration-300`}
              >
                Menu
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 ${
                  isActive('/contact') ? 'text-red-600' : 'text-gray-700'
                } hover:text-red-600 transition duration-300`}
              >
                Contact
              </Link>
              <button
                onClick={() => window.open('https://beyondmenu.com', '_blank')}
                className="w-full text-left px-3 py-2 text-red-600 hover:text-red-700 transition duration-300"
              >
                Order Online
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;