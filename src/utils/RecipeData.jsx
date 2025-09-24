import { Link } from "react-router-dom";
import Recipe1 from "../assets/images/Mask-Group.svg";
import Recipe2 from "../assets/images/Mask-Group-2.svg";
import Recipe3 from "../assets/images/Mask-Group-3.svg";
import Recipe4 from "../assets/images/Mask-Group-4.svg";
import Recipe5 from "../assets/images/Mask-Group-5.svg";
import Recipe6 from "../assets/images/Mask-Group-6.svg";
import Recipe7 from "../assets/images/Mask-Group-7.svg";
import Recipe8 from "../assets/images/Mask-Group-8.svg";

import LikeUnChecked from "../assets/images/Group-852-1.svg";
import LikeChecked from "../assets/images/Group-852.svg";

export const recipes = [
  {
    id: 1,
    image: Recipe1,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    likeIcon: LikeChecked,
    time: "30 Minutes",
    category: "Snacks",
  },
  {
    id: 2,
    image: Recipe2,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    likeIcon: LikeUnChecked,
    time: "30 Minutes",
    category: "Fish",
  },
  {
    id: 3,
    image: Recipe3,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    likeIcon: LikeUnChecked,
    time: "30 Minutes",
    category: "Snacks",
  },
  {
    id: 4,
    image: Recipe4,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    likeIcon: LikeChecked,
    time: "30 Minutes",
    category: "Snacks",
  },
  {
    id: 5,
    image: Recipe5,
    title: "Chicken Meat balls with Cream Cheese",
    likeIcon: LikeUnChecked,
    time: "30 Minutes",
    category: "Fish",
  },
  {
    id: 6,
    image: Recipe6,
    title: "Fruity Pancake with Orange & Blueberry",
    likeIcon: LikeChecked,
    time: "30 Minutes",
    category: "Snacks",
  },
  {
    id: 7,
    image: Recipe7,
    title: "The Best Easy One Pot Chicken and Rice",
    likeIcon: LikeUnChecked,
    time: "30 Minutes",
    category: "Fish",
  },
  {
    id: 8,
    image: Recipe8,
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    likeIcon: LikeUnChecked,
    time: "30 Minutes",
    category: "Snacks",
  },
];

function RecipeData() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <img
                src={recipe.likeIcon}
                alt="Like Icon"
                className="absolute top-2 right-2 w-6 h-6"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
              <p className="text-sm text-gray-500">{recipe.time}</p>
              <p className="text-sm text-gray-400 mt-1">{recipe.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecipeData;
