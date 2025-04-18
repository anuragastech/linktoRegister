import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import AdminView from './components/AdminView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/admin/symphonyonchiyam/data" element={<AdminView />} />
      </Routes>
    </Router>
  );
}

export default App;
