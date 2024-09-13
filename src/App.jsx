import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsGrid from './components/NewsGrid';
import NewsDetail from './components/NewsDetail';
import HeroSection from './components/HeroSection';


const App = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-gray-950 to-blue-950">
        <Navbar />
        <HeroSection/>
        <Routes>
          <Route path="/" element={<NewsGrid setSelectedNews={setSelectedNews} />} />
          <Route path="/NewsGrid/:category" element={<NewsGrid setSelectedNews={setSelectedNews} />} />
        </Routes>
        {selectedNews && (
          <NewsDetail news={selectedNews} onClose={() => setSelectedNews(null)} />
        )}
      </div>
    </Router>
  );
};

export default App;
