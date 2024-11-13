import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import BandList from './BandList';
import LoadingSpinner from './LoadingSpinner';
import { fetchUserLocation, searchBands } from '../services/api';

const BandFinder = () => {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [city, setCity] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {
    const initializeLocation = async () => {
      try {
        setLoading(true);
        const detectedCity = await fetchUserLocation();
        setCurrentLocation(detectedCity);
        setCity(detectedCity);
        const bandsData = await searchBands(detectedCity);
        setBands(bandsData);
      } catch (err) {
        setError('Unable to detect your location. Please enter a city manually.');
      } finally {
        setLoading(false);
      }
    };

    initializeLocation();
  }, []);

  const handleSearch = async (searchCity) => {
    try {
      setLoading(true);
      setError('');
      const bandsData = await searchBands(searchCity);
      setBands(bandsData);
      setCurrentLocation(searchCity);
    } catch (err) {
      setError('Failed to fetch bands. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Music Band Finder
        </h1>
        <p className="text-gray-600">
          Discover recently founded bands in your area
        </p>
      </header>

      <SearchBar 
        onSearch={handleSearch} 
        initialCity={city} 
        disabled={loading}
      />

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {currentLocation && !error && (
        <div className="text-center text-gray-600 mb-6">
          Showing results for: {currentLocation}
        </div>
      )}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <BandList bands={bands} />
      )}
    </div>
  );
};

export default BandFinder;