
import React, { useState } from "react";
import "../styles.css";

const SortingScreenA = ({ onClose }) => {
  const titles = ["Guest Rating", "Popularity", "Price High-Low", "Price Low-High"];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="fixed z-20 bottom-0 left-0 right-0 h-full w-full">
      <div className="fixed z-30 bottom-0 left-0 right-0 bg-white p-4">
        <button className="text-[#4F55E4] text-sm font-medium cursor-pointer px-4 py-2 rounded absolute top-4 right-4">
          Reset all
        </button>

        <div className="flex flex-col gap-10 relative">
          <div className="top-border"></div>

          <div className="flex flex-col gap-5 ml-6">
            {titles.map((title, index) => (
              <label
                key={index}
                className={`flex items-center gap-2 ${selectedOption === index ? 'text-black' : 'text-gray-500'}`}
              >
                <input
                  type="radio"
                  name="sortingOption"
                  className="radio-button mr-3"
                  onChange={() => handleRadioChange(index)}
                  checked={selectedOption === index}
                />
                <span className="title-text text-base font-normal">{title}</span>
              </label>
            ))}
          </div>

          <button className="bg-[#157939] text-lg font-medium items-center text-white w-[300px] h-[43px] rounded-full mx-auto mt-auto">
            Apply
          </button>
        </div>
      </div>

      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-25"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default SortingScreenA;
