import React, { useState, useRef } from "react";
import "../styles.css";

const FilterScreenA = ({ onClose }) => {
  const filterHeadings = [
    "Package Type",
    "Budget",
    "Price Range",
    "Days",
    "What's Included",
    "One Key Benefits"
  ];

  const filterOptions = {
    "Package Type": ["All", "Family/Friends", "Honeymoon", "Solo"],
    "Budget": ["Any", "Mid Range", "Premium", "Low Budget"],
    "Price Range": ["0-10k", "10k-20k", "20k-30k", "30k-40k", "40k-50k", "50k+"],
    "Days": [ "1", "2", "3", "4", "5", "5+ Days"],
    "What's Included": ["Any", "Food", "Transportation", "Guide", "Pick Up", "All Tickets"],
    "One Key Benefits": ["Any", "Member Prices"] 
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedFilterHeading, setSelectedFilterHeading] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [headingWidths, setHeadingWidths] = useState([]);

  const headingRefs = useRef(filterHeadings.map(() => React.createRef()));

  const handleRadioChange = (index) => {
    setSelectedOption(index);
  };

  const handleCheckboxChange = (index) => {
    setSelectedCheckboxes((prevSelectedCheckboxes) => {
      const updatedCheckboxes = [...prevSelectedCheckboxes];
      const selectedIndex = updatedCheckboxes.indexOf(index);

      if (selectedIndex === -1) {
        updatedCheckboxes.push(index);
      } else {
        updatedCheckboxes.splice(selectedIndex, 1);
      }

      return updatedCheckboxes;
    });
  };

  const handleClick = (index) => {
    setSelectedFilterHeading((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleApplyClick = () => {
    console.log("Selected Option:", selectedOption);
    console.log("Selected Checkboxes:", selectedCheckboxes);
    
  };

  return (
    <div className="fixed z-10 bottom-0 left-0 right-0 h-5/6 w-full bg-white p-4" style={{ borderRadius: '20px 20px 0 0' }}>
      <div className="flex flex-row gap-4 relative h-full">
        <button className="text-[#4F55E4] text-sm font-medium cursor-pointer px-4 py-2 rounded absolute top-4 right-4">
          Reset All
        </button>

        <div className="flex flex-col gap-5 ml-6">
          <h2 className="text-xl font-semibold mt-6 text-[#22222]">Filters</h2>

          <div className="filter-headings-container">
            {filterHeadings.map((heading, index) => (
              <div key={index}>
                <div
                  className={`flex items-center gap-2 mt-2 cursor-pointer`}
                  onClick={() => handleClick(index)}
                  style={{
                    backgroundColor: selectedFilterHeading === index ? '#DDFACF' : 'transparent',
                    color: selectedFilterHeading === index ? '#222222' : '#707070',
                    padding: '8px',
                    borderRadius: '8px',
                    width: `${headingWidths[index]}px`,
                    whiteSpace: 'nowrap' 
                  }}
                  ref={headingRefs.current[index]}
                >
                  <span className={`filter-heading text-sm font-medium ${selectedFilterHeading === index ? 'text-[#222222]' : 'text-[#707070]'}`}>{heading}</span>
                </div>
                <hr className="border-gray-300 mt-2 mb-3" /> 
              </div>
            ))}
          </div>
        </div>

        <div className="border-l h-3/4 mt-16 mx-4 border-gray-300"></div>

        <div className="flex flex-col gap-5 ml-">
          {selectedFilterHeading !== null && (
            <div className="flex flex-col mt-20 gap-2">
              {filterHeadings[selectedFilterHeading] === "Days" ? (
                <label className="flex items-center gap-2">
                  <span className="text-xs font-medium text-[#707070]">Enter Days</span>
                  <select
                    className="rounded border border-gray-300 py-1 focus:outline-none focus:border-[#4F55E4]"
                    onChange={(e) => handleRadioChange(e.target.value)}
                    value={selectedOption || ""}
                  >
                    {filterOptions["Days"].map((day, index) => (
                      <option key={index} value={index}>
                        {day}
                      </option>
                    ))}
                  </select>
                </label>
              ) : (
                filterOptions[filterHeadings[selectedFilterHeading]].map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center gap-2 ${filterHeadings[selectedFilterHeading] === "What's Included" ? 'text-[#222222]'  : selectedOption === index ? 'text-[#222222]' : 'text-[#666666]'}`}
                    style={{
                      whiteSpace: 'nowrap', 
                      width: `${headingWidths[selectedFilterHeading]}px`, 
                      padding: '8px', 
                      borderRadius: '8px', 
                      backgroundColor: filterHeadings[selectedFilterHeading] === "What's Included" ? selectedCheckboxes.includes(index) ? '' : 'transparent' : selectedOption === index ? '' : 'transparent', 
                    }}
                  >
                    {filterHeadings[selectedFilterHeading] === "What's Included" ? (
                      <input
                        type="checkbox"
                        className="checkbox"
                        onChange={() => handleCheckboxChange(index)}
                        checked={selectedCheckboxes.includes(index)}
                      />
                    ) : (
                      <input
                        type="radio"
                        name="filterOption"
                        className="radio-button"
                        onChange={() => handleRadioChange(index)}
                        checked={selectedOption === index}
                      />
                    )}
                    <span className="title-text text-sm font-normal">{option}</span>
                  </label>
                ))
              )}
            </div>
          )}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
  <button
    className="bg-[#157939] text-lg font-medium text-white w-[300px] h-[43px] rounded-full"
    onClick={handleApplyClick}
  >
    Apply
  </button>
</div>
        <div className="top-border"></div>
      </div>
      
    </div>
  );
};

export default FilterScreenA;
