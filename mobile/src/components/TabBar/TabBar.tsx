import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChartIcon } from "../Icons/ChartIcon";
import { MoneyIcon } from "../Icons/MoneyIcon";
import { UserIcon } from "../Icons/UserIcon";
import { TabBarButton } from "./TabBarButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TabBar({ state, navigation }: any) {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.container}>
      <TabBarButton
        isSelected={state.index === 0}
        onPress={() => navigation.navigate("Dashboard")}
        icon={ChartIcon}
      ></TabBarButton>
      <TabBarButton
        isSelected={state.index === 1}
        onPress={() => navigation.navigate("Billings")}
        icon={MoneyIcon}
      ></TabBarButton>
      <TabBarButton
        isSelected={state.index === 2}
        onPress={() => navigation.navigate("Customers")}
        icon={UserIcon}
      ></TabBarButton>
      {/* <TabBarButton
        isSelected={state.index === 3}
        onPress={() => navigation.navigate("About")}
        icon={<Text>{"A"}</Text>}
      ></TabBarButton> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -5 },
  },
});
