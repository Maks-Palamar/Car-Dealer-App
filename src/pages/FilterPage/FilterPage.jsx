import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FilterPage = () => {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
        const data = await response.json();
        setMakes(data.Results);
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
      }
    };
    fetchMakes();
  }, []);

  useEffect(() => {
    setIsButtonEnabled(!!selectedMake && !!selectedYear);
  }, [selectedMake, selectedYear]);

  const years = Array.from({ length: new Date().getFullYear() - 2014 }, (_, i) => 2015 + i);

  return (
    <div className="container mx-auto p-4">
      <div className="filters-container bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <h1 className="filter-header text-2xl font-bold mb-4 text-center text-gray-800">Select a Vehicle Make and Year</h1>
        <div className="make-filter mb-4">
          <label className="make-label block mb-2 text-gray-700 font-medium">Vehicle Make:</label>
          <select
            className="make-filter-selector block w-full p-2 border border-gray-300 rounded-lg"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="">Select a make</option>
            {makes.map((make) => (
              <option key={make.MakeId} value={make.MakeId}>
                {make.MakeName}
              </option>
            ))}
          </select>
        </div>
        <div className="year-filter mb-4">
          <label className="year-label block mb-2 text-gray-700 font-medium">Model Year:</label>
          <select
            className="year-filter-selector block w-full p-2 border border-gray-300 rounded-lg"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select a year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        
            <Link to={`/result/${selectedMake}/${selectedYear}`} className='link'>
            <button
            className={`p-2 bg-blue-500 text-white ${!isButtonEnabled ? 'opacity-50' : ''}`}
            disabled={!isButtonEnabled}
            >
                Next
</button>
            </Link>
      </div>
    </div>
  );
};

export default FilterPage;
