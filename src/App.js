import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Tailwind CSS stillerini içe aktardık
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import MailComponent from './components/MailComponent';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <NavbarComponent />
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/contact" element={<MailComponent />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
