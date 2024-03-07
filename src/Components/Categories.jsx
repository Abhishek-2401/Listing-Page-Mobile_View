import React, { useState } from "react";
import "../styles.css";

const LocationCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <div className="flex justify-between shadow-md mx-0 my-0">
      
      <div
        className={`location-category flex flex-col items-center justify-center cursor-pointer ${selectedCategory === 1 ? 'selected-category' : ''}`}
        onClick={() => handleCategoryClick(1)}
        style={{ width: "80px", height: "80px" }}
      >
        
        <img src="all.png" alt="Local Icon 1" className="local-icon w-[22px] h-[21px]" />
       
        <p className={`category-text text-xs  ${selectedCategory === 1 ? 'text-[#157939]' : ''}`}>All</p>
      </div>

     
      <div
        className={`location-category flex flex-col items-center justify-center cursor-pointer ${selectedCategory === 2 ? 'selected-category' : ''}`}
        onClick={() => handleCategoryClick(2)}
        style={{ width: "80px", height: "80px" }}
      >
        
        <img src="mountains-vector.png" alt="Local Icon 2" className="local-icon justify-center w-[32px] h-[17.45px]" />
        
        <p className={`category-text text-xs ${selectedCategory === 2 ? 'text-[#157939]' : ''}`}>Mountain</p>
      </div>

      
      <div
        className={`location-category flex flex-col items-center justify-center cursor-pointer ${selectedCategory === 3 ? 'selected-category' : ''}`}
        onClick={() => handleCategoryClick(3)}
        style={{ width: "80px", height: "80px" }}
      >
        
        <img src="adventure-vector.png" alt="Local Icon 3" className="local-icon   w-[17.51px] h-[25.98px]" />
    
        <p className={`category-text text-xs ${selectedCategory === 3 ? 'text-[#157939]' : ''}`}>Adventure</p>
      </div>

      
      <div
        className={`location-category flex flex-col items-center justify-center cursor-pointer  ${selectedCategory === 4 ? 'selected-category' : ''}`}
        onClick={() => handleCategoryClick(4)}
        style={{ width: "80px", height: "80px" }}
      >
        
        <img src="homestay-vector.png" alt="Local Icon 4" className="local-icon  w-[26.58px] h-[18.13px]" />
       
        <p className={`category-text text-xs ${selectedCategory === 4 ? 'text-[#157939]' : ''}`}>Home stay</p>
      </div>
    </div>
  );
};

export default LocationCategories;
