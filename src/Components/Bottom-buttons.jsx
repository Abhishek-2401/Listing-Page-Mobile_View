
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SortingScreenA from "./Sorting-screen-A";
import FilterScreenA from "./Filters-screen";
import "../styles.css";


const BottomButtons = () => {
  const navigate = useNavigate();
  const [isSortingScreenOpen, setSortingScreenOpen] = useState(false);
  const [isFilterScreenOpen, setFilterScreenOpen] = useState(false);

  const handleSortingClick = () => {
    setSortingScreenOpen(true);
  };

  const handleFiltersClick = () => {
    setFilterScreenOpen(true);
  };

  const closeSortingScreen = () => {
    setSortingScreenOpen(false);
  };

  const closeFilterScreen = () => {
    setFilterScreenOpen(false);
  };

  return (
    <div className="fixed z-10 bottom-0 left-0 right-0 bg-[#F2F2F2] p-4 flex justify-around">
    
      <div className="button flex items-center cursor-pointer" onClick={handleSortingClick}>
        <img src="sorting-vector.png" alt="Sorting Icon" className="w-[15px] h-[17.64] mr-1" />
        <p className="text-[#222222]">Sorting</p>
      </div>

      
      <div className="button flex items-center cursor-pointer" onClick={handleFiltersClick}>
        <img src="filters-vector.png" alt="Filters Icon" className="w-[16px] h-[16px] mr-1" />
        <p className="text-[#222222]">Filters</p>
      </div>

     
      {isSortingScreenOpen && <SortingScreenA onClose={closeSortingScreen} />}

      
      {isFilterScreenOpen && <FilterScreenA onClose={closeFilterScreen} />}
        
      
    </div>
  );
};

export default BottomButtons;
