import AdCard from "../../assets/images/Ads-1.svg";
import RecipeCard from "../../components/recipe/RecipeCard";
import { recipes } from "../../utils/RecipeData";
import { Link } from "react-router-dom";

function RecipesView() {
  return (
    <section className="py-20 mt-20">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <h1 className="text-4xl md:text-5xl mb-4 font-bold">
            Simple and tasty recipes
          </h1>
          <p className="opacity-50 max-w-[700px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 justify-items-center">
          {recipes.slice(0, 3).map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="hover:scale-105 transition-transform duration-200"
            >
              <RecipeCard {...recipe} />
            </Link>
          ))}
        </div>

        {/* Second Row: 2 recipes + ad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 mt-10 justify-items-center items-center">
          {recipes.slice(3, 5).map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="hover:scale-105 transition-transform duration-200"
            >
              <RecipeCard {...recipe} />
            </Link>
          ))}
          {/* Ad Card */}
          <img
            src={AdCard}
            alt="adCard"
            className="max-w-[400px] h-[420px] object-cover "
          />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 mt-10 justify-items-center">
          {recipes.slice(5, 8).map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="hover:scale-105 transition-transform duration-200"
            >
              <RecipeCard {...recipe} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecipesView;
