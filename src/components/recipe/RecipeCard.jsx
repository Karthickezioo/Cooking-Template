import React from "react";
import Timer from "../../assets/images/Timer.svg";
import Fork from "../../assets/images/ForkKnife.svg";

function RecipeCard({ image, title, likeIcon, time, category }) {
  return (
    <div className="relative w-[400px] h-[420px] rounded-[20px] bg-gradient-to-t from-[#E7FAFE] to-white overflow-hidden flex flex-col items-center pt-4">
      {/* Recipe Image  */}
      <img
        src={image}
        alt="recipe"
        draggable={false}
        className="w-[90%] h-auto object-contain"
      />

      {/* Like Icon */}
      <img
        src={likeIcon}
        alt="likeIcon"
        draggable={false}
        className="absolute top-5 right-6 w-12 h-12 cursor-pointer hover:scale-110 transition-transform"
      />

      {/* Title  */}
      <div className="mt-4 w-[90%] mx-auto">
        <h2 className="text-left text-[25px] font-semibold break-words">
          {title}
        </h2>
      </div>

      {/* Time */}
      <div className="absolute bottom-10 left-5 flex items-center gap-2">
        <img src={Timer} alt="time" className="w-6 h-6" draggable={false} />
        <p className="m-0">{time}</p>
      </div>

      {/* Category */}
      <div className="absolute bottom-10 right-[40%] flex items-center gap-2">
        <img src={Fork} alt="category" className="w-6 h-6" draggable={false} />
        <p className="m-0">{category}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
