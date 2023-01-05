import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBar } from "../components/TabBar/TabBar";
import { AboutScreen } from "../screens/About/AboutScreen";
import { BillingsScreen } from "../screens/Billing/BillingsScreen";
import { CustomersScreen } from "../screens/Customer/CustomersScreen";
import { DashboardStackNavigation } from "./DashboardStackNavigation";

const Tab = createBottomTabNavigator();

export function AuthenticatedNavigation() {
  return (
    <>
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        initialRouteName="Dashboard"
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardStackNavigation}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Billings"
          component={BillingsScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Customers"
          component={CustomersScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}
