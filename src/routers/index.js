import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';  // Ensure these paths are correct
import About from './pages/About';  // Ensure these paths are correct
import ExplorePage from './pages/ExplorePage';  // Ensure these paths are correct
import SearchPage from './pages/SearchPage';  // Ensure these paths are correct

// Define your router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "explore",
        element: <ExplorePage />,
      },
      {
        path: "explore/:Id",
        element: <DetailPage />,  // Make sure this component is imported
      },
      {
        path: "search",
        element: <SearchPage />,  // Make sure this component is imported
      },
    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
