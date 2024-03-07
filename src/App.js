import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListingPage from './Components/ListingPage.js';
import MenuSection from './Components/Menu-Section.jsx';
import LocationCategories from './Components/Categories.jsx';
import BottomButtons from './Components/Bottom-buttons.jsx';
import SortingScreenA from './Components/Sorting-screen-A.jsx';
import FilterScreenA from './Components/Filters-screen.jsx'; 
import PackageCard from './Components/Package-card.jsx';// Adjust the path accordingly

const App = () => {
  return (
    <Router>
      <div>
        <MenuSection />
        
        <LocationCategories />
        <BottomButtons />

        <Routes>
          <Route path="/sorting-screen-A" element={<SortingScreenA />} />
          <Route path="/Filters-screen" element={<FilterScreenA />} />
          </Routes>
          <PackageCard />

        <ListingPage />
      </div>
    </Router>
  );
};

export default App;
