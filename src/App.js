import React from 'react';
import BandFinder from './components/BandFinder';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <BandFinder />
      </div>
    </div>
  );
}

export default App;