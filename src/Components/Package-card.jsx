import React from "react";
import "../styles.css";


const PackageCard = () => {
  const cards = [
    {
      id: 1,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-1.png",
      rating: "4.5/5",
      ratingsCount: "(1k+ ratings)",
      memberPriceAvailable: true,
      tag1: "Premium",
      tag1Img: "premium.png", 
      tag1bg: "#53E80D", 
      tag2: "Member Price Available",
      cuttedIndianPrice: "10,000",
      currentPrice: "7,500",
    },
    {
      id: 2,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-2.png",
      rating: "4.5/5",
      ratingsCount: "(1K+ ratings)",
      memberPriceAvailable: true,
      tag1: "Premium",
      tag1Img: "premium.png", 
      tag1bg: "#53E80D", 
      tag2: "Member Price Available",
      cuttedIndianPrice: "10,000",
      currentPrice: "7,500",
    },
    {
      id: 3,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-3.png",
      rating: "4.5/5",
      ratingsCount: "(1k+ ratings)",
      memberPriceAvailable: true,
      tag1: "Budget",
      tag1Img: "midrange.png", 
      tag1bg: "#E8AB0D9C", 
      tag2: "Member Price Available",
      cuttedIndianPrice: "10,000",
      currentPrice: "7,500",
    },
    {
      id: 4,
      title: "Munnar : Honeymoon Package",
      imageUrl: "card-4.png",
      rating: "4.5/5",
      ratingsCount: "(1K+ ratings)",
      memberPriceAvailable: true,
      tag1: "MidRange",
      tag1Img: "budget.png", 
      tag1bg: "#0DC1E859", 
      tag2: "Member Price Available",
      cuttedIndianPrice: "10,000",
      currentPrice: "7,500",
    },
  ];

  return (
    <div className="bg-[#F2F2F2] flex justify-center items-center">
      <div className="max-w-screen-xl z-1 mx-auto py-4">
        <div className="flex cards static flex-col w-[350px] items-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-white m-4 rounded-3xl relative flex flex-col items-center w-full overflow-hidden`}
            >
              <div className="relative w-full">
                <img
                  src={card.imageUrl}
                  alt={`Package ${card.id}`}
                  className="object-cover w-full h-48 rounded-t-3xl"
                />

                <div className="absolute top-6 right-4 flex items-center space-x-2">
                  <div className="bg-white p-1 rounded-full">
                    <img
                      src="bookmark-icon.png"
                      alt="Bookmark Icon"
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="bg-white p-1 rounded-full">
                    <img
                      src="share-icon.png"
                      alt="Share Icon"
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>

              <div className="p-2 ml-4  w-full">
                <h3 className="text-sm font-medium mb-2">{card.title}</h3>

                <div className="flex items-center mb-2">
                  <img
                    src="ratings-vector.png"
                    alt="Ratings Icon"
                    className="w-4 h-4 mr-1"
                  />
                  <span className="font-medium text-xs text-black mr-1">
                    {card.rating}
                  </span>{" "}
                  <span className="text-[#787878] text-xs font-normal">
                    {card.ratingsCount}
                  </span>{" "}
                  <div className="bg-white border border-[#222222] rounded-full w-4 h-4 flex items-center justify-center ml-1">
                    <span className="text-black text-xs font-thin">i</span>
                  </div>
                </div>

                <div className="flex mt-6 justify-between w-full">
                  <div className="flex flex-col items-center">
                    <img
                      src="tickets-vector.png"
                      alt="Icon 1"
                      className="w-4 h-4 mb-2"
                    />
                    <span className="text-[8px] font-normal text-[#808080]">All Tickets</span>
                  </div>

                  {index < cards.length - 1 && (
                    <div className="bg-gray-300 w-[0.5px] h-6 my-2"></div>
                  )}

                  <div className="flex flex-col items-center">
                    <img
                      src="transportation-vector.png"
                      alt="Icon 2"
                      className="w-4 h-4 mb-2"
                    />
                    <span className="text-[8px] font-normal text-[#808080]">Transportation</span>
                  </div>

                  {index < cards.length - 1 && (
                    <div className="bg-gray-300 w-[0.5px] h-6 my-2"></div>
                  )}

                  <div className="flex flex-col items-center">
                    <img
                      src="days-night-vector.png"
                      alt="Icon 3"
                      className="w-4 h-4 mb-2"
                    />
                    <span className="text-[8px] font-normal text-[#808080]">6 days or 6 nights</span>
                  </div>

                  {index < cards.length - 1 && (
                    <div className="bg-gray-300 w-[0.5px] h-6 my-2"></div>
                  )}

                  <div className="flex flex-col items-center mr-4">
                    <img
                      src="food-vector.png"
                      alt="Icon 4"
                      className="w-4 h-4 mb-2"
                    />
                    <span className="text-[8px] font-normal text-[#808080] ">Food Included</span>
                  </div>
                </div>

                <div className="flex flex-col items-start w-[190px] mt-4">
                  <div className="flex items-center mb-2">
  <div style={{ backgroundColor: card.tag1bg }} className="rounded-full w-6 h-6 flex items-center justify-center mr-2">
    <img
      src={card.tag1Img}
      alt={`Tag Icon 1 for ${card.tag1}`}
      className="w-4 h-4"
    />
  </div>
  <span className="text-xs font-normal text-[#787878]">{card.tag1}</span>
</div>

                  <div className="flex items-center">
                    <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                      <img
                        src="member-price.png"
                        alt={`Tag Icon 2`}
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-xs font-normal text-[#787878]">{card.tag2}</span>
                  </div>
                </div>
               <div className="flex flex-col items-end mt-[-20px] mr-4  ">
                  <div className="bg-[#FF0000] px-4 py-0 text-white rounded-md p-1 mr-2">
                    <img
                      src="discount-vector.png"
                      alt="Discount Icon"
                      className="w-3 h-3 inline-block mr-2"
                    />
                    <span className="text-xs font-medium text-[#F9F9F9]">25% Off</span>
                  </div>

                  <div className="flex flex-row  items-start mt-2">
                    <span className="text-sm font-normal text-[#787878] mr-2 mt-1 line-through">
                      ₹{card.cuttedIndianPrice}
                    </span>

                    <span className="text-[#FF0000] text-lg  font-semibold">
                      ₹{card.currentPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageCard;