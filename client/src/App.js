
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Placeholder components - will be created in next phase
const Dashboard = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">🍽️ Meal Planner</h1>
      <p className="text-xl text-gray-600 mb-8">Welcome to your meal planning assistant!</p>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">✅ Setup Complete!</h2>
          <p className="text-gray-600">Your meal planner app is ready for development.</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800">
            Next: Authentication system, recipe management, and pantry tracking will be added in the following phases.
          </p>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
