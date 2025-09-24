import Salad from "../../assets/images/salad.svg";
import Salad2 from "../../assets/images/Photo.svg";

function RecipeInbox() {
  return (
    <div className="flex justify-center mb-40 px-4 md:px-0">
      <div className="relative flex items-center justify-center bg-[#E7FAFE] rounded-[60px] h-[442px] w-full max-w-[1280px] overflow-hidden p-5">
        {/* Background Images */}
        <img
          src={Salad}
          alt="Salad"
          className="absolute top-[100%] left-0 -translate-y-full"
        />
        <img
          src={Salad2}
          alt="Salad2"
          className="absolute top-[100%] right-0 -translate-y-full"
        />

        {/* Text and Form */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Deliciousness to your inbox
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor
          </p>
          <p className="text-gray-500">
            incididunt ut labore et dolore magna aliqut enim ad minim
          </p>

          {/* Email input */}
          <div className="relative flex items-center justify-center mt-8 w-[480px] h-20 bg-white rounded-2xl">
            <p className="absolute left-5 text-gray-400">
              Your email address...
            </p>
            <button className="absolute right-2 h-[60px] w-[160px] bg-black text-white font-bold rounded-2xl flex items-center justify-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeInbox;
