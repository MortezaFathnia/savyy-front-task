import Dashboard from './pages/dashboard/page';
import Products from './pages/products/page';
import ErrorPage from './pages/error/page';
import {
  createBrowserRouter,
} from "react-router-dom";
import ProductSetup from './pages/create/ProductSetup';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/products",
        element: <Products />,
      },
      {
        path: "/dashboard/create",
        element: <ProductSetup />,
      },
    ],
  }
]);