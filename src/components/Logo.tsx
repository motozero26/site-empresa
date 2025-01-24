import React from 'react';
import { Monitor } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-800">
        <Monitor className="w-6 h-6 text-white" />
      </div>
      <span className="text-xl font-bold text-blue-600 ml-2">MWTechs</span>
    </div>
  );
}