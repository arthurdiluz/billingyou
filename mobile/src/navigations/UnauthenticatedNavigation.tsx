import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from "../screens/About/AboutScreen";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { SignInScreen } from "../screens/SignIn/SignInScreen";
import { SignUpScreen } from "../screens/SignUp/SignUpScreen";

const Stack = createNativeStackNavigator();

export function UnauthenticatedNavigation() {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </>
  );
}
