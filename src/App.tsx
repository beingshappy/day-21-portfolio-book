import React, { useState } from 'react';
import FlipBook from './components/FlipBook';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <div className="relative">
        <FlipBook 
          currentPage={currentPage} 
          nextPage={nextPage}
          prevPage={prevPage}
        />
        <Navigation
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </div>
  );
}

export default App;