import React from 'react';
import { ChevronLeft, ChevronRight, Home, User, Code, FolderOpen, Mail } from 'lucide-react';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (pageIndex: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentPage, 
  totalPages, 
  goToPage, 
  nextPage, 
  prevPage 
}) => {
  const pageIcons = [Home, User, Code, FolderOpen, Mail];
  const pageLabels = ['Hero', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      {/* Page Navigation Dots */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        {Array.from({ length: totalPages }).map((_, index) => {
          const Icon = pageIcons[index];
          return (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`
                flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300
                ${currentPage === index 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white/20 text-white/70 hover:bg-white/30 hover:text-white'
                }
              `}
              title={pageLabels[index]}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:block">{pageLabels[index]}</span>
            </button>
          );
        })}
      </div>

      {/* Previous/Next Buttons */}
      <button
        onClick={prevPage}
        disabled={currentPage === 0}
        className={`
          absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full
          transition-all duration-300 z-30
          ${currentPage === 0 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg hover:shadow-xl'
          }
        `}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages - 1}
        className={`
          absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full
          transition-all duration-300 z-30
          ${currentPage === totalPages - 1 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg hover:shadow-xl'
          }
        `}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
};

export default Navigation;