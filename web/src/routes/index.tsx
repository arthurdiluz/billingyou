import { RouterProvider } from "react-router-dom";
import { useAuthContext } from "@contexts/AuthContext";
import { AuthenticatedRoutes } from "@routes/authenticatedRoutes";
import { UnauthenticatedRoutes } from "@routes/unauthenticatedRoutes";

export function AppRoutes() {
  const { token, user } = useAuthContext();
  const isAuth = !!token && !!user;

  return (
    <RouterProvider
      router={isAuth ? AuthenticatedRoutes : UnauthenticatedRoutes}
    />
  );
}
