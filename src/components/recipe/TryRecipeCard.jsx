import React from "react";
import Timer from "../../assets/images/Timer.svg";
import Fork from "../../assets/images/ForkKnife.svg";

// Category icons mapping
const categoryIcons = {
  Healthy: Fork,
  Western: Fork,
  Snack: Fork,
  Seafood: Fork,
  Eastern: Fork,
  Japanese: Fork,
};

function TryRecipeCard({ image, title, likeIcon, time, category }) {
  const categoryIcon = categoryIcons[category] || Fork;

  return (
    <div className="relative w-[290px] h-[316px] rounded-[20px] flex flex-col overflow-visible  hover:shadow-xl transition-shadow duration-300 ">
      {/* Image container - positioned at top */}
      <div className="relative w-full h-[200px] flex justify-center -mt-6">
        {/* Recipe image - contained and centered */}
        <img
          src={image}
          draggable={false}
          alt={title}
          className="w-full max-w-[280px] h-full object-contain rounded-[15px]"
        />

        {/* Like icon  */}
        <img
          src={likeIcon}
          draggable={false}
          alt="like"
          className="absolute top-3 right-3 w-12 h-12 cursor-pointer z-20 hover:scale-110 transition-transform"
        />
      </div>

      {/* Content container - positioned below image */}
      <div className="flex-1 p-4 pt-2 mt-2">
        {/* Title */}
        <h2 className="text-[17px] font-bold leading-6 mb-4 line-clamp-2 min-h-[48px]">
          {title}
        </h2>

        {/* Metadata row */}
        <div className="flex justify-between items-center mt-auto">
          {/* Time */}
          <div className="flex items-center gap-2">
            <img src={Timer} alt="time" className="w-5 h-5" />
            <p className="text-sm text-gray-700">{time}</p>
          </div>

          {/* Category */}
          <div className="flex items-center gap-2">
            <img src={categoryIcon} alt={category} className="w-5 h-5" />
            <p className="text-sm text-gray-700">{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TryRecipeCard;
