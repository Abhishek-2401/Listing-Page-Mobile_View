import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MenuScreen from "./Menu-screen";
import "../styles.css";

const Menu-Section = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activePackage, setActivePackage] = useState(null);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleArrowClick = () => {
    setMenuOpen(false);
    setActivePackage(null); 
  };

  const handlePackageClick = (index) => {
    setActivePackage(index === activePackage ? null : index);
  };

  const handleHeadingClick = () => {
    console.log("Heading Clicked!");
  };

  return (
    <div className="mobile-container bg-cover bg-center h-[160px] w-100% relative overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 100%), url('bagpacker-bg.png')" }}>
      <div className="absolute text-white">
        <FaBars
          size={48}
          style={{
            margin: "10px",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "8px",
            transition: "transform 0.3s ease",
            transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
          onClick={handleMenuClick}
        />
      </div>

      <div className="absolute bottom-4 left-5 text-white">
        <h1 className="text-lg font-bold">Munnar</h1>
        <p className="text-xs font-normal">Plan your dream trip with campfly</p>
      </div>

      {isMenuOpen && (
        <MenuScreen
          isMenuOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
          handleArrowClick={handleArrowClick}
          activePackage={activePackage}
          handlePackageClick={handlePackageClick}
          handleHeadingClick={handleHeadingClick}
        />
      )}
    </div>
  );
};

export default Menu-Section;
