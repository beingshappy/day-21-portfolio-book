import React from 'react';
import HeroPage from './pages/HeroPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

interface FlipBookProps {
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
}

const FlipBook: React.FC<FlipBookProps> = ({ currentPage, nextPage, prevPage }) => {
  const pages = [
    <HeroPage key="hero" />,
    <AboutPage key="about" />,
    <SkillsPage key="skills" />,
    <ProjectsPage key="projects" />,
    <ContactPage key="contact" />
  ];

  return (
    <div className="relative w-[800px] max-w-[90vw] h-[600px] max-h-[80vh] perspective-1000">
      <div className="book-container relative w-full h-full">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 w-full h-full transition-all duration-700 ease-in-out
              transform-gpu backface-hidden
              ${index === currentPage ? 'z-20 rotate-y-0' : ''}
              ${index < currentPage ? 'z-10 -rotate-y-180' : ''}
              ${index > currentPage ? 'z-10 rotate-y-0' : ''}
              ${index === currentPage - 1 ? 'z-15' : ''}
            `}
            style={{
              transformStyle: 'preserve-3d',
              transform: index < currentPage ? 'rotateY(-180deg)' : 'rotateY(0deg)',
              transformOrigin: index < currentPage ? 'left center' : 'right center',
            }}
          >
            <div className="page-content w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden">
              {page}
            </div>
          </div>
        ))}
        
        {/* Book spine shadow */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 rounded-l-sm z-30 shadow-lg" />
        
        {/* Page edge shadows */}
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-r-sm z-30" />
      </div>
    </div>
  );
};

export default FlipBook;