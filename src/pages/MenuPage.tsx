import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Steamed Dumplings",
    description: "Handmade dumplings with pork and chive filling",
    price: "12.99",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d",
    category: "Appetizers"
  },
  {
    id: 2,
    name: "Hot & Sour Soup",
    description: "Traditional spicy and sour soup with tofu and mushrooms",
    price: "8.99",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43",
    category: "Soups",
    spicy: true
  },
  {
    id: 3,
    name: "Kung Pao Chicken",
    description: "Spicy chicken with peanuts and vegetables",
    price: "15.99",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
    category: "Entree",
    spicy: true
  },
  // Add more menu items as needed
];

const categories = [
  "All",
  "Appetizers",
  "Soups",
  "Entree",
  "Chef's Specials",
  "Healthy Diet Food",
  "Authentic Chinese Food",
  "Drinks & Boba Tea"
];

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-red-800 mb-8">Our Menu</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search menu..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-red-100'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.spicy && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    Spicy
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-red-600 font-bold">${item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button
                  className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
                  onClick={() => window.open('https://beyondmenu.com', '_blank')}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;