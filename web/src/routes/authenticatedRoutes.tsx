import { createBrowserRouter } from "react-router-dom";
import CustomersAddPage from "./pages/Customers/CustomerAddPage";
import CustomersEditPage from "./pages/Customers/CustomerEditPage";
import CustomersPage from "./pages/Customers/CustomersPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import NotFoundPage from "./pages/Errors/NotFoundPage";

export const AuthenticatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/customers",
    element: <CustomersPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/customers/create",
    element: <CustomersAddPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/customers/update",
    element: <CustomersEditPage />,
    errorElement: <NotFoundPage />,
  },
]);
