import AuthenticatedNavigation from "./AuthenticatedNavigation";
import UnauthenticatedNavigation from "./UnauthenticatedNavigation";

export default function AppNavigations() {
  const isAuth = true;

  return isAuth ? <AuthenticatedNavigation /> : <UnauthenticatedNavigation />;
}
