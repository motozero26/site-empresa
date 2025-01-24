import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5584987993324"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] p-6 rounded-full shadow-lg hover:bg-[#1da851] transition-all duration-300 z-50 
                 animate-bounce hover:animate-none
                 hover:scale-110
                 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute -inset-2 bg-[#25D366] rounded-full opacity-40 animate-ping group-hover:animate-none" />
      <svg
        className="w-10 h-10 text-white relative z-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.043L.789 23.456l4.5-1.422A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.484 0-4.789-.78-6.682-2.108l-.479-.279-3.091.976.995-3.034-.303-.494A9.942 9.942 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
      </svg>
    </a>
  );
}