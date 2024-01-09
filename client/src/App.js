import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobListingsPage from './components/JobListingsPage';
import JobDetailPage from './components/JobDetailPage';
import EmployerDashboard from './components/EmployerDashboard';
import CandidateDashboard from './components/CandidateDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job-listings" element={<JobListingsPage />} />
        <Route path="/job/:id" element={<JobDetailPage />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
