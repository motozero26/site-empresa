import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="https://api.whatsapp.com/send?phone=5584987993324" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Phone size={16} />
              <span>(84) 98799-3324</span>
            </a>
            <div className="flex items-center space-x-1 text-gray-600">
              <Mail size={16} />
              <span>assistencia.mwtechs@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <MapPin size={16} />
              <span>Natal, RN</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}