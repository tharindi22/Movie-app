import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home.jsx'; // Ensure Home is properly exported in its file

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    children: [
      {
        path: "",
        element: <Home />, // Maps to the Home component
      },
    ],
  },
]);

export default router;
