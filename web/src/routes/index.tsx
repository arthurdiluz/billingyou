import { RouterProvider } from "react-router-dom";
import { AuthenticatedRoutes } from "./authenticatedRoutes";
import { UnauthenticatedRoutes } from "./unauthenticatedRoutes";

export function AppRoutes() {
  const isAuthenticated: boolean = false;

  return (
    <RouterProvider
      router={isAuthenticated ? AuthenticatedRoutes : UnauthenticatedRoutes}
    ></RouterProvider>
  );
}
