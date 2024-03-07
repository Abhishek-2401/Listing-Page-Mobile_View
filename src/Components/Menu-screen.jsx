import React from "react";
import { FaChevronLeft, FaChevronDown, FaChevronRight } from "react-icons/fa";
import "../styles.css";

const MenuScreen = ({ isMenuOpen, setMenuOpen, handleArrowClick, activePackage, handlePackageClick, handleHeadingClick }) => {
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`menu-screen z-100 absolute inset-0 bg-white w-2/3 h-100vh p-4 overflow-y-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div className="text-gray-800 cursor-pointer absolute top-4 right-4" onClick={() => { handleArrowClick(); handleCloseMenu(); }}>
        <FaChevronLeft size={24} color="#707070" strokeWidth={1} />
      </div>

      <div className="user-card-section mt-16 h-[94px] w-auto mx-1 bg-[#f2f2f2] p-3 rounded-xl relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="3d_avatar_23.png" alt="Profile" className="w-[65px] h-[66px] rounded-full mr-3" />

            <div>
              <p className="text-sm font-medium">Hello xyz!</p>
              <p className="text-[10px] font-normal text-gray-600">xyz123@gmail.com</p>
            </div>
          </div>

          <div className="absolute bottom-4 cursor-pointer right-2 p-1 bg-white rounded-full">
            <FaChevronRight size={12} color="#157939" strokeWidth={1} />
          </div>
        </div>

      </div>

      <div className="package-section mt-4">
        <h2 className={`text-sm font-semibold ${activePackage === null ? "" : "font-bold"}`} onClick={handleHeadingClick}>
          Packages
        </h2>
        <div className="package-headings mt-4">
          <div className="package-heading flex items-center justify-between cursor-pointer" onClick={() => handlePackageClick(1)}>
            <h3 className={`text-sm mt-2 mb-1 text-[#404040] ${activePackage === 1 ? " text-[#222222] font-bold" : " font-medium"}`}>
              Honeymoon
            </h3>
            <div className={`chevron-down-icon ${activePackage === 1 ? "chevron-down-icon-green" : ""}`}>
              <FaChevronDown size={12} strokeWidth={1} className="" />
            </div>
          </div>
          <hr className="my-1 border-[#F1F0F6]" />

          <div className="package-heading flex items-center justify-between cursor-pointer" onClick={() => handlePackageClick(2)}>
            <h3 className={`text-sm mt-2 mb-1 text-[#404040] ${activePackage === 2 ? " text-[#222222] font-bold" : "font-medium"}`}>
              Family/ Friends
            </h3>
            <div className={`chevron-down-icon ${activePackage === 2 ? "chevron-down-icon-green" : ""}`}>
              <FaChevronDown size={12} strokeWidth={1} className="" />
            </div>
          </div>
          <hr className="my-1 border-[#F1F0F6]" />

          <div className="package-heading flex items-center justify-between cursor-pointer" onClick={() => handlePackageClick(3)}>
            <h3 className={`text-sm mt-2 mb-1 text-[#404040] ${activePackage === 3 ? " text-[#222222] font-bold" : "font-medium"}`}>Solo</h3>
            <div className={`chevron-down-icon ${activePackage === 3 ? "chevron-down-icon-green" : ""}`}>
              <FaChevronDown size={12} strokeWidth={1} className="" />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4 border-[#e6e6e6]" />

      <div className="menu-items mt-6">
        <div className="menu-item flex items-center justify-between cursor-pointer mb-6" onClick={handleHeadingClick}>
          <div className="flex items-center">
            <img src="my-bookings-vector.png" alt="Menu Item Icon" style={{ width: "20px", height: "15.22px", marginRight: "8px" }} />
            <h3 className="text-sm mb-1 text-[#404040] font-normal">My bookings</h3>
          </div>
          <FaChevronRight size={12} color="#404040" strokeWidth={1} className="mr-1" />
        </div>

        <div className="menu-item flex items-cen
        ter justify-between cursor-pointer mb-6" onClick={handleHeadingClick}>
          <div className="flex items-center">
            <img src="wishlist-vector.png" alt="Menu Item Icon" style={{ width: "16.67px", height: "15.29px", marginRight: "8px" }} />
            <h3 className="text-sm mb-1 text-[#404040] font-normal">Wishlist</h3>
          </div>
          <FaChevronRight size={12} color="#404040" strokeWidth={1} className="mr-1" />
        </div>

        <div className="menu-item flex items-center justify-between cursor-pointer mb-6" onClick={handleHeadingClick}>
          <div className="flex items-center">
            <img src="contactus-vector.png" alt="Menu Item Icon" style={{ width: "16.67px", height: "17.07px", marginRight: "8px" }} />
            <h3 className="text-sm mb-1 cursor-pointer text-[#404040] font-normal">Contact Us</h3>
          </div>
          <FaChevronRight size={12} color="#404040" strokeWidth={1} className="mr-1" />
        </div>

        <div className="menu-item flex items-center justify-between cursor-pointer mb-6" onClick={handleHeadingClick}>
          <div className="flex items-center">
            <img src="logout-vector.png" alt="Menu Item Icon" style={{ width: "20px", height: "18px", marginRight: "8px" }} />
            <h3 className="text-sm mb-1 text-[#404040] font-medium">Log Out</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
