import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "../screens/About/AboutScreen";
import BillingsScreen from "../screens/Billing/BillingsScreen";
import CustomersScreen from "../screens/Customer/CustomersScreen";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";

const Tab = createBottomTabNavigator();

export default function AuthenticatedNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Dashboard">
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Billings" component={BillingsScreen} />
        <Tab.Screen name="Customers" component={CustomersScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
