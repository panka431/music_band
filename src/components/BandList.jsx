import React, { useState } from 'react';
import BandCard from './BandCard';
import Pagination from './Pagination';

const BandList = ({ bands }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const bandsPerPage = 9;

  const indexOfLastBand = currentPage * bandsPerPage;
  const indexOfFirstBand = indexOfLastBand - bandsPerPage;
  const currentBands = bands.slice(indexOfFirstBand, indexOfLastBand);
  const totalPages = Math.ceil(bands.length / bandsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  if (bands.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-8">
        No bands found for this location.
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentBands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default BandList;