import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./pages";
import { DashboardPage } from "./pages/Dashboard";

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
]);
