import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilterPage from './pages/FilterPage/FilterPage';
import ResultPage from './pages/ResultPage/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<FilterPage />}
        />
        <Route
          path="/result/:makeId/:year"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ResultPage />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
