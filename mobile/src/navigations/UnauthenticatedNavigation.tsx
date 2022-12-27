import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "../screens/About/AboutScreen";
import SignInScreen from "../screens/SignIn/SignInScreen";
import SignUpScreen from "../screens/SignUp/SignUpScreen";

const Tab = createBottomTabNavigator();

export default function UnauthenticatedNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="SignIn">
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="SignIn" component={SignInScreen} />
        <Tab.Screen name="SignUp" component={SignUpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
