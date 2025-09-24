import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Recipe1 from "../assets/images/Mask-Group.svg";
import Recipe2 from "../assets/images/Mask-Group-2.svg";
import Recipe3 from "../assets/images/Mask-Group-3.svg";
import Recipe4 from "../assets/images/Mask-Group-4.svg";
import Recipe5 from "../assets/images/Mask-Group-5.svg";
import Recipe6 from "../assets/images/Mask-Group-6.svg";
import Recipe7 from "../assets/images/Mask-Group-7.svg";
import Recipe8 from "../assets/images/Mask-Group-8.svg";

import React from "react";

import LikeUnChecked from "../assets/images/Group-852-1.svg";
import LikeChecked from "../assets/images/Group-852.svg";

const recipes = [
  { id: "1", image: Recipe1, title: "Big and Juicy Wagyu Beef Cheeseburger" },
  {
    id: "2",
    image: Recipe2,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
  },
  {
    id: "3",
    image: Recipe3,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
  },
  {
    id: "4",
    image: Recipe4,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
  },
  { id: "5", image: Recipe5, title: "Chicken Meat balls with Cream Cheese" },
  { id: "6", image: Recipe6, title: "Fruity Pancake with Orange & Blueberry" },
  { id: "7", image: Recipe7, title: "The Best Easy One Pot Chicken and Rice" },
  {
    id: "8",
    image: Recipe8,
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
  },
];

function RecipeDetail() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [count, setCount] = React.useState(0);
  const handleClickAdd = () => setCount(count + 1);
  const handleClickDelete = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleGoToCheckout = () => {
    if (count > 0) {
      navigate("/checkout", {
        state: {
          recipeId: recipe.id,
          recipeTitle: recipe.title,
          quantity: count,
        },
      });
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the recipe by ID
  const recipe = recipes.find((r) => r.id === id);

  return (
    <div className="flex items-start justify-center gap-10 p-12">
      {/* Left content */}
      <div className="-translate-x-70 text-center">
        <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="mx-auto mb-6 w-[800px] h-auto rounded-[20px]"
        />
        <p className="text-lg text-gray-700">You opened recipe ID: {id}</p>
      </div>

      <div className="flex flex-col">
        {/* Right button */}
        <div className="flex items-start  -translate-x-60 -translate-y-60 mt-[475px]">
          <button
            onClick={handleClickAdd}
            className=" bg-neutral-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            +
          </button>
          <div className=" bg-neutral-500 text-white px-6 py-3 rounded-lg ml-5 ">
            {count}
          </div>
          <button
            onClick={handleClickDelete}
            className=" bg-neutral-500 text-white px-6 py-3 rounded-lg ml-5 hover:bg-blue-600 transition"
          >
            -
          </button>
        </div>
        <button
          onClick={handleGoToCheckout}
          className="bg-neutral-500 text-white px-6 py-3 -translate-y-50 -translate-x-60 rounded-lg hover:bg-green-700 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
