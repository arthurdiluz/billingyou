import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Form/Button";
import { BillingYouLogo } from "../../components/Icons/BillingYouLogo";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NativeStackNavigationProp<any>;
};

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
        <ScrollView style={styles.content}>
          <View style={styles.logoContainer}>
            <BillingYouLogo width={180} />
          </View>
          <View style={styles.button}>
            <Button
              label="Sign In"
              onPress={() => navigation.navigate("SignIn")}
            />
          </View>
          <View style={styles.button}>
            <Button
              label="Sign Up"
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
          <View style={styles.AboutButton}>
            <Button
              label="About Project"
              type="secondary"
              onPress={() => navigation.navigate("About")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: "25%",
  },
  content: {
    padding: 20,
  },
  button: {
    paddingVertical: 4,
  },
  AboutButton: {
    paddingVertical: 4,
  },
});
