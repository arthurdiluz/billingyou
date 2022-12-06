import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage, SignInPage, SignUpPage } from "./pages";

export const UnauthenticatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <NotFoundPage />,
  },
]);
