import Featured from "../../assets/images/baked-chicken.svg";
import hotRecipe from "../../assets/images/Group-828.svg";
import timeImg from "../../assets/images/Group-831.svg";
import chicken from "../../assets/images/Group-832.svg";
import profileImg from "../../assets/images/Group-825.svg";
import viewRecipe from "../../assets/images/Group-826.svg";

function FeaturedRecipe() {
  return (
    <div className="relative overflow-hidden rounded-[50px] bg-[#E7FAFE] p-[30px] mt-[40px] mb-[75px] w-full max-w-[1450px] h-[620px] mx-auto">
      {/* Hot Recipe Icon */}
      <img
        src={hotRecipe}
        alt="Hot Recipe"
        draggable={false}
        className="absolute top-[5%] left-[2%] cursor-pointer z-20"
      />

      {/* Text Container */}
      <div className="relative max-w-[50%] z-10">
        <h1 className="font-bold text-[60px] mt-[100px] ml-[30px] mb-[30px]">
          Spicy delicious chicken wings
        </h1>
        <p className="text-[16px] ml-[30px] mb-0 opacity-50">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        </p>
        <p className="text-[16px] ml-[30px] mt-[5px] opacity-50">
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>

        {/* Small icons */}
        <div className="flex mt-5 ml-[30px] gap-5">
          <img src={timeImg} draggable={false} alt="time" />
          <img src={chicken} draggable={false} alt="chicken" />
        </div>

        {/* Profile and view icons */}
        <div className="flex items-center mt-[70px] ml-[25px] gap-[140px]">
          <img
            src={profileImg}
            draggable={false}
            alt="profileImg"
            className="cursor-pointer"
          />
          <img
            src={viewRecipe}
            draggable={false}
            alt="viewRecipe"
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Featured Image */}
      <img
        src={Featured}
        draggable={false}
        alt="Featured Recipe"
        className="absolute top-0 right-0 h-full w-[50%] object-cover z-0"
      />
    </div>
  );
}

export default FeaturedRecipe;
