import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { isAuthenticated } from './auth'; 
import './App.css';

const ProtectedRoute = ({ element, guard, ...rest }) => {
  return guard() ? element : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} guard={isAuthenticated} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
