import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from "../screens/About/AboutScreen";
import { SignInScreen } from "../screens/SignIn/SignInScreen";
import { SignUpScreen } from "../screens/SignUp/SignUpScreen";

const Stack = createNativeStackNavigator();

export function UnauthenticatedNavigation() {
  return (
    <>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
