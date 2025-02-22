import React from 'react';
import { Menu, MapPin, Phone, Clock, ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FeaturedDish from '../components/FeaturedDish';
import backgroundImage from '../assets/indoor.jpg'; // Adjust path as needed
import imageOne from '../assets/cr.jpg'; // Adjust path as needed
import imageTwo from '../assets/hsnd.jpg'; // Adjust path as needed
import imageThree from '../assets/mongbf.jpg'; // Adjust path as needed


function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-6xl font-bold text-white mb-6" style={{ fontFamily: '"Ma Shan Zheng", cursive' }}>
              WAHAHA
            </h1>
            <p className="text-xl text-white mb-8">Experience Authentic Chinese Cuisine</p>
            <div className="space-x-4">
            <button 
                onClick={() => navigate('/menu')}
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300"
              >
                View Menu
              </button>
              <button 
                onClick={() => window.open('https://beyondmenu.com', '_blank')}
                className="bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition duration-300"
              >
                Order Online
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Dishes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center font-bold text-red-800 mb-12">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedDish
              image={imageOne}
              name="Crab Rangoons"
              description="Freshly steamed or pan-fried with savory fillings"
              price="$12.99"
            />
            <FeaturedDish
              image={imageTwo}
              name="Hot Spicy Noodles"
              description="Spicy diced chicken with peanuts and vegetables"
              price="$15.99"
            />
            <FeaturedDish
              image={imageThree}
              name="Mongolian Beef"
              description="Silken tofu in spicy Sichuan sauce"
              price="$13.99"
            />
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p>Mon-Sat: 11AM - 9PM</p>
              <p>Sun: Closed</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p>801 S Broadway</p>
              <p>Edmond, OK 73034</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p>(405) 285-8888</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;