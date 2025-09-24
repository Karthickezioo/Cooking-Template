import ChefInfo from "../../assets/images/Group-880.svg";

function RecipeInfo() {
  return (
    <section className="flex flex-col lg:flex-row items-center my-36 w-full">
      {/* Left Side: Text */}
      <div className="flex-1 h-[600px] flex flex-col justify-center px-10 lg:px-20">
        <h1 className="font-bold text-[50px] mb-8">
          Everyone can be a <br /> chef in their own kitchen
        </h1>
        <p className="text-[17px] leading-relaxed opacity-50 mb-10">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br />
          ad minim
        </p>
        <div className="bg-black text-white text-center w-[150px] py-3 rounded-[15px] cursor-pointer">
          Learn More
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 h-[600px] bg-gradient-to-t from-[#E7FAFE] to-white rounded-[50px] flex justify-center items-center">
        <img
          src={ChefInfo}
          alt="Chef Info"
          draggable={false}
          className="w-full max-w-[900px] h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default RecipeInfo;
