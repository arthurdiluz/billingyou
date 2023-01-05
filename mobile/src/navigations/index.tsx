import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../contexts/AuthContext";
import { AuthenticatedNavigation } from "./AuthenticatedNavigation";
import { UnauthenticatedNavigation } from "./UnauthenticatedNavigation";

export function AppNavigation() {
  const { isAuth, checkExpiresIn } = useAuthContext();

  return (
    <NavigationContainer onStateChange={() => checkExpiresIn()}>
      {isAuth ? <AuthenticatedNavigation /> : <UnauthenticatedNavigation />}
    </NavigationContainer>
  );
}
