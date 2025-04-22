import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import AdminView from './components/AdminView';
import Contact from './components/contact'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/admin/symphonyonchiyam/data" element={<AdminView />} />
        <Route path="/contact" element={< Contact/>} />


      </Routes>
    </Router>
  );
}

export default App;
