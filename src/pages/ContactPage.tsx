import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-red-800 mb-12">Contact Us</h1>
  
      {/* Center the container and expand width */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl w-full mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full">
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
                  <p className="text-gray-600">801 S Broadway</p>
                  <p className="text-gray-600">Edmond, OK 73034</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=801%20S%20Broadway%2C%20Edmond%2C%20OK%2073034"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 font-medium inline-block mt-2"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
  
              {/* Hours */}
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Saturday</span>
                      <span className="text-gray-800 font-medium">11:00 AM - 09:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Contact */}
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact</h3>
                  <p className="text-gray-600">Phone: (405) 285-8888</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Add an empty div to force a second column if needed */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ContactPage;