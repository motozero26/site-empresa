import React from 'react';
import { Info } from 'lucide-react';

interface FormTipProps {
  children: React.ReactNode;
}

export default function FormTip({ children }: FormTipProps) {
  return (
    <div className="mt-1 text-sm text-gray-600 flex items-start gap-2">
      <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
      <div>{children}</div>
    </div>
  );
}