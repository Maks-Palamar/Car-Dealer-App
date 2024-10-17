import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ResultPage = () => {
  const { makeId, year } = useParams();
  const [models, setModels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
        const data = await response.json();
        setModels(data.Results);
      } catch (error) {
        setError('Error fetching vehicle models');
      }
    };
    fetchModels();
  }, [makeId, year]);

  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <h1 className="result-header text-2xl font-bold mb-4 text-center text-gray-800">Vehicle Models for {year}</h1>
        {models.length > 0 ? (
          <ul className="models-list list-disc list-inside">
            {models.map((model) => (
              <li key={model.Model_ID} className="models-item mb-2 text-gray-700">
                {model.Model_Name}
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-models text-gray-500">No models available for this make and year.</div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
