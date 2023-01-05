import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AppNavigation } from "./src/navigations";
import { AuthProvider } from "./src/contexts/AuthContext";
import { LoadingScreen } from "./src/screens/Loading/LoadingScreen";

export function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
