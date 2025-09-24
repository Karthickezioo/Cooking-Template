// import Breakfast from "../../assets/images/Group-836.svg";
// import Vegan from "../../assets/images/Group-837.svg";
// import Meat from "../../assets/images/Group-838.svg";
// import Dessert from "../../assets/images/Group-839.svg";
// import Lunch from "../../assets/images/Group-840.svg";
// import Chocolate from "../../assets/images/Group-841.svg";

// function CategoriesView() {
//   const categories = [
//     { img: Breakfast, alt: "Breakfast" },
//     { img: Vegan, alt: "Vegan" },
//     { img: Meat, alt: "Meat" },
//     { img: Dessert, alt: "Dessert" },
//     { img: Lunch, alt: "Lunch" },
//     { img: Chocolate, alt: "Chocolate" },
//   ];

//   return (
//     <div className="my-10 ">
//       {/* Header */}
//       <div className="flex items-center px-20">
//         <h1 className="text-[50px] font-bold">Categories</h1>
//         <div className="ml-auto bg-[#E7FAFE] px-5 py-3 rounded-[15px] font-bold cursor-pointer">
//           View All Categories
//         </div>
//       </div>

//       {/* Categories Images */}
//       <div className="flex gap-10 mt-8 px-20">
//         {categories.map((cat, idx) => (
//           <img
//             key={idx}
//             src={cat.img}
//             alt={cat.alt}
//             draggable={false}
//             className="cursor-pointer"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoriesView;

import Breakfast from "../../assets/images/Group-836.svg";
import Vegan from "../../assets/images/Group-837.svg";
import Meat from "../../assets/images/Group-838.svg";
import Dessert from "../../assets/images/Group-839.svg";
import Lunch from "../../assets/images/Group-840.svg";
import Chocolate from "../../assets/images/Group-841.svg";

function CategoriesView() {
  const categories = [
    { img: Breakfast, alt: "Breakfast" },
    { img: Vegan, alt: "Vegan" },
    { img: Meat, alt: "Meat" },
    { img: Dessert, alt: "Dessert" },
    { img: Lunch, alt: "Lunch" },
    { img: Chocolate, alt: "Chocolate" },
  ];

  return (
    <div className="my-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold">Categories</h1>
          <button className="ml-auto bg-[#E7FAFE] px-6 py-3 rounded-[15px] font-bold cursor-pointer hover:bg-[#d0f0f8] transition">
            View All Categories
          </button>
        </div>

        {/* Categories Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 mt-10">
          {categories.map((cat, idx) => (
            <img
              key={idx}
              src={cat.img}
              alt={cat.alt}
              draggable={false}
              className="cursor-pointer transition-transform hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesView;
