import AllRecipesPage from "./pages/AllRecipesPage";
import ContactPage from "./components/ContactPage";
import FavoritesPage from "./components/FavoritesPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import SingleRecipePage from "./components/SingleRecipePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // Home page route - this is the default page when someone visits our app
        index: true,
        element: <HomePage />,
      },
      {
        // All recipes page - shows a list of all recipes
        path: "recipes",
        element: <AllRecipesPage />,
      },
      {
        // All recipes page - shows a list of all recipes
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        // Single recipe page - shows details of one specific recipe
        // The :id part is a URL parameter that will contain the recipe ID
        path: "recipes/:id",
        element: <SingleRecipePage />,
      },
      {
        // Contact page - shows contact information
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);
