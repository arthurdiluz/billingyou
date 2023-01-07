import { StyleSheet, Text, View } from "react-native";
import { BillingYouLogo } from "../../components/Icons/BillingYouLogo";

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <BillingYouLogo />
      <Text style={styles.text}>{"Loading..."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingVertical: 5,
    fontSize: 16,
    color: "#999",
  },
});
