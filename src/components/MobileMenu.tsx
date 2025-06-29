
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  
  const navigationItems = [
    { name: 'Learn', path: '/learn' },
    { name: 'Research', path: '/research' },
    { name: 'Legal', path: '/legal' },
    { name: 'About', path: '/about' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-64 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="space-y-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={cn(
                "block px-4 py-2 text-sm font-medium transition-colors hover:text-gray-600",
                location.pathname === item.path ? "text-black bg-gray-100 rounded" : "text-gray-500"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
