// import TryRecipeCard from "../../components/recipe/TryRecipeCard";
// import LikeUnChecked from "../../assets/images/Group-852-1.svg";
// import LikeChecked from "../../assets/images/Group-852.svg";
// import TryRecipe1 from "../../assets/images/Mask-Group-5-1.svg";
// import TryRecipe2 from "../../assets/images/Mask-Group-6-1.svg";
// import TryRecipe3 from "../../assets/images/Mask-Group-7-1.svg";
// import TryRecipe4 from "../../assets/images/Mask-Group-8-1.svg";
// import TryRecipe5 from "../../assets/images/Mask-Group-5-2.svg";
// import TryRecipe6 from "../../assets/images/Mask-Group-6-2.svg";
// import TryRecipe7 from "../../assets/images/Mask-Group-7-2.svg";
// import TryRecipe8 from "../../assets/images/Mask-Group-8-2.svg";

// function TryRecipe() {
//   return (
//     <div className="mb-40">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left mb-24 px-4 md:px-20">
//         <h1 className="text-4xl md:text-5xl font-bold">
//           Try this delicious recipe <br /> to make your day
//         </h1>
//         <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-md">
//           Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
//           tempor <br /> incididunt ut labore et dolore magna aliqut enim ad
//           minim
//         </p>
//       </div>

//       {/* Recipe Rows */}
//       <div className="flex flex-col gap-10  px-4 md:px-20">
//         {/* First row */}
//         <div className="flex  gap-30 px-4 md:px-20">
//           <TryRecipeCard
//             image={TryRecipe1}
//             title="Mixed Tropical Fruit Salad with Superfood Boosts"
//             likeIcon={LikeChecked}
//             time="30 Minutes"
//             category="Healthy"
//           />
//           <TryRecipeCard
//             image={TryRecipe2}
//             title="Big and Juicy Wagyu Beef Cheeseburger"
//             likeIcon={LikeUnChecked}
//             time="30 Minutes"
//             category="Western"
//           />
//           <TryRecipeCard
//             image={TryRecipe3}
//             title="Healthy Japanese Fried Rice with Asparagus"
//             likeIcon={LikeChecked}
//             time="30 Minutes"
//             category="Healthy"
//           />
//           <TryRecipeCard
//             image={TryRecipe4}
//             title="Cauliflower Walnut Vegetarian Taco Meat"
//             likeIcon={LikeUnChecked}
//             time="30 Minutes"
//             category="Eastern"
//           />
//         </div>

//         {/* Second row */}
//         <div className="flex  justify-start gap-10">
//           <TryRecipeCard
//             image={TryRecipe5}
//             title="Rainbow Chicken Salad with Almond Honey Mustard Dressing"
//             likeIcon={LikeChecked}
//             time="30 Minutes"
//             category="Healthy"
//           />
//           <TryRecipeCard
//             image={TryRecipe6}
//             title="Barbeque Spicy Sandwiches with Chips"
//             likeIcon={LikeUnChecked}
//             time="30 Minutes"
//             category="Snacks"
//           />
//           <TryRecipeCard
//             image={TryRecipe7}
//             title="Firecracker Vegan Lettuce Wraps - Spicy!"
//             likeIcon={LikeUnChecked}
//             time="30 Minutes"
//             category="Seafood"
//           />
//           <TryRecipeCard
//             image={TryRecipe8}
//             title="Chicken Ramen Soup with Mushroom"
//             likeIcon={LikeChecked}
//             time="30 Minutes"
//             category="Japanese"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TryRecipe;
import TryRecipeCard from "../../components/recipe/TryRecipeCard";
import LikeUnChecked from "../../assets/images/Group-852-1.svg";
import LikeChecked from "../../assets/images/Group-852.svg";
import TryRecipe1 from "../../assets/images/Mask-Group-5-1.svg";
import TryRecipe2 from "../../assets/images/Mask-Group-6-1.svg";
import TryRecipe3 from "../../assets/images/Mask-Group-7-1.svg";
import TryRecipe4 from "../../assets/images/Mask-Group-8-1.svg";
import TryRecipe5 from "../../assets/images/Mask-Group-5-2.svg";
import TryRecipe6 from "../../assets/images/Mask-Group-6-2.svg";
import TryRecipe7 from "../../assets/images/Mask-Group-7-2.svg";
import TryRecipe8 from "../../assets/images/Mask-Group-8-2.svg";

function TryRecipe() {
  // Recipe data array for better maintainability
  const recipes = [
    {
      id: 1,
      image: TryRecipe1,
      title: "Mixed Tropical Fruit Salad with Superfood Boosts",
      likeIcon: LikeChecked,
      time: "30 Minutes",
      category: "Healthy",
    },
    {
      id: 2,
      image: TryRecipe2,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      likeIcon: LikeUnChecked,
      time: "30 Minutes",
      category: "Western",
    },
    {
      id: 3,
      image: TryRecipe3,
      title: "Healthy Japanese Fried Rice with Asparagus",
      likeIcon: LikeChecked,
      time: "30 Minutes",
      category: "Healthy",
    },
    {
      id: 4,
      image: TryRecipe4,
      title: "Cauliflower Walnut Vegetarian Taco Meat",
      likeIcon: LikeUnChecked,
      time: "30 Minutes",
      category: "Eastern",
    },
    {
      id: 5,
      image: TryRecipe5,
      title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
      likeIcon: LikeChecked,
      time: "30 Minutes",
      category: "Healthy",
    },
    {
      id: 6,
      image: TryRecipe6,
      title: "Barbeque Spicy Sandwiches with Chips",
      likeIcon: LikeUnChecked,
      time: "30 Minutes",
      category: "Snack",
    },
    {
      id: 7,
      image: TryRecipe7,
      title: "Firecracker Vegan Lettuce Wraps - Spicy!",
      likeIcon: LikeUnChecked,
      time: "30 Minutes",
      category: "Seafood",
    },
    {
      id: 8,
      image: TryRecipe8,
      title: "Chicken Ramen Soup with Mushroom",
      likeIcon: LikeChecked,
      time: "30 Minutes",
      category: "Japanese",
    },
  ];

  return (
    <div className="">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 lg:mb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left leading-tight">
            Try this delicious recipe <br /> to make your day
          </h1>
          <p className="text-lg lg:text-[17px] text-gray-600 leading-relaxed max-w-2xl text-center lg:text-left opacity-70">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor <br /> incididunt ut labore et dolore magna aliqut enim ad
            minim
          </p>
        </div>
      </div>

      {/* Recipe Cards Section */}
      <div className="max-w-7xl mx-auto mb-16 lg:mb-32">
        {/* Grid Layout for better responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10 justify-center items-start">
          {recipes.map((recipe) => (
            <TryRecipeCard
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              likeIcon={recipe.likeIcon}
              time={recipe.time}
              category={recipe.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TryRecipe;
