import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Rules from './Rules';
import Botstatus from './Botstatus';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/Botstatus" element={<Botstatus />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
