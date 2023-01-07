import { A } from "@expo/html-elements";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "../../components/Cards/Card";
import { BillingYouLogo } from "../../components/Icons/BillingYouLogo";
import { GitHubIcon } from "../../components/Icons/GitHubIcon";
import { LinkedInIcon } from "../../components/Icons/LinkedInIcon";
import { RepositoryIcon } from "../../components/Icons/RepositoryIcon";
import { UserIcon } from "../../components/Icons/UserIcon";
import { Theme } from "../../theme";

export function AboutScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
        <ScrollView style={styles.content}>
          <View style={styles.logoContainer}>
            <BillingYouLogo width={180} />
          </View>
          <View style={styles.cards}>
            <View style={styles.card}>
              <Card Icon={UserIcon}>
                {
                  <A href={"https://arthurdiluz.github.io/"}>
                    {"Personal Page"}
                  </A>
                }
              </Card>
            </View>
            <View style={styles.card}>
              <Card Icon={RepositoryIcon}>
                {
                  <A href={"https://github.com/arthurdiluz/billingyou"}>
                    {"Project Repository"}
                  </A>
                }
              </Card>
            </View>
            <View style={styles.card}>
              <Card Icon={LinkedInIcon}>
                {
                  <A href={"https://www.linkedin.com/in/arthurdiluz/"}>
                    {"LinkedIn Profile"}
                  </A>
                }
              </Card>
            </View>
            <View style={styles.card}>
              <Card Icon={GitHubIcon}>
                {
                  <A href={"https://github.com/arthurdiluz"}>
                    {"GitHub Profile"}
                  </A>
                }
              </Card>
            </View>
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
  content: {
    paddingTop: 10,
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
  },
  cards: {
    paddingTop: 25,
    paddingVertical: 10,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  card: {
    padding: 25,
    marginVertical: 2,
    alignItems: "center",
    backgroundColor: Theme.colors.primary,
    borderRadius: 10,
    width: "48%",
  },
});
