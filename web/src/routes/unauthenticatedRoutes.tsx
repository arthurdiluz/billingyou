import { createBrowserRouter } from "react-router-dom";
import SignInPage from "@pages/Auth/SignInPage";
import SignUpPage from "@pages/Auth/SignUpPage";
import AboutPage from "@pages/About/AboutPage";
import NotFoundPage from "@pages/Errors/NotFoundPage";

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
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <NotFoundPage />,
  },
]);
