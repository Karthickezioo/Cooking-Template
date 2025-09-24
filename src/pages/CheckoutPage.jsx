import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CheckoutPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { recipeId, recipeTitle, quantity } = location.state || {
    recipeId: "",
    recipeTitle: "",
    quantity: 0,
  };

  const handleGoBack = () => {
    navigate(-1); // goes back to previous page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <p className="text-gray-700">Recipe ID: {recipeId}</p>
          <p className="text-gray-700">Recipe Title: {recipeTitle}</p>
          <p className="text-gray-700">Quantity: {quantity}</p>
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-red-900 text-white rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
