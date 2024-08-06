import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import StampPage from './pages/StampPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/stamp/:id" element={<StampPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;