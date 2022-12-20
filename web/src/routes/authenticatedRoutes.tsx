import AboutPage from "@pages/About/AboutPage";
import BillingAddPage from "@pages/Billings/BillingAddPage";
import BillingEditPage from "@pages/Billings/BillingEditPage";
import BillingsPage from "@pages/Billings/BillingsPage";
import CustomerAddPage from "@pages/Customers/CustomerAddPage";
import CustomerEditPage from "@pages/Customers/CustomerEditPage";
import CustomersPage from "@pages/Customers/CustomersPage";
import DashboardPage from "@pages/Dashboard/DashboardPage";
import NotFoundPage from "@pages/Errors/NotFoundPage";
import { createBrowserRouter } from "react-router-dom";

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
    path: "/customer/create",
    element: <CustomerAddPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/customer/update",
    element: <CustomerEditPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/billings",
    element: <BillingsPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/billing/create",
    element: <BillingAddPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/billing/update",
    element: <BillingEditPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <NotFoundPage />,
  },
]);
