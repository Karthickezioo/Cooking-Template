// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import CategoriesView from "./features/categories/CategoriesView";
// import FeaturedRecipe from "./components/recipe/FeaturedRecipe";
// import Footer from "./components/common/Footer";
// import Header from "./components/common/Header";
// import RecipeInbox from "./features/recipes/RecipeInbox";
// import RecipeInfo from "./features/recipes/RecipeInfo";
// import RecipesView from "./features/recipes/RecipesView";
// import SocialInfo from "./features/social/SocialInfo";
// import TryRecipe from "./features/recipes/TryRecipe.jsx";
// import RecipeDetail from "./pages/RecipeDetails";

// function App() {
//   return (
//     <Router>
//       {/* Header */}
//       <header className="bg-white shadow-md sticky top-0 z-50">
//         <Header />
//       </header>

//       {/* Main content */}
//       <main className="pt-6 bg-gray-50 min-h-screen">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
//                 <FeaturedRecipe />
//                 <CategoriesView />
//                 <RecipesView />
//                 <RecipeInfo />
//                 <SocialInfo />
//                 <TryRecipe />
//                 <RecipeInbox />
//               </div>
//             }
//           />

//           <Route
//             path="/recipe/:id"
//             element={
//               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <RecipeDetail />
//               </div>
//             }
//           />
//         </Routes>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-100 mt-12">
//         <Footer />
//       </footer>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CategoriesView from "./features/categories/CategoriesView";
import FeaturedRecipe from "./components/recipe/FeaturedRecipe";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import RecipeInbox from "./features/recipes/RecipeInbox";
import RecipeInfo from "./features/recipes/RecipeInfo";
import RecipesView from "./features/recipes/RecipesView";
import SocialInfo from "./features/social/SocialInfo";
import TryRecipe from "./features/recipes/TryRecipe.jsx";
import RecipeDetail from "./pages/RecipeDetails";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Router>
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <Header />
        </header>

        {/* Main content */}
        <main className="pt-6 bg-gray-50 min-h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  <FeaturedRecipe />
                  <CategoriesView />
                  <RecipesView />
                  <RecipeInfo />
                  <SocialInfo />
                  <TryRecipe />
                  <RecipeInbox />
                </div>
              }
            />
            <Route
              path="/recipe/:id"
              element={
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <RecipeDetail />
                </div>
              }
            />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 mt-12">
          <Footer />
        </footer>
      </Router>
    </div>
  );
}
export default App;
