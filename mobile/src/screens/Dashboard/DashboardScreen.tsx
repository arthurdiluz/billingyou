import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BigCurrencyCard } from "../../components/Cards/BigCurrencyCard";
import { IconButton } from "../../components/Form/IconButton";
import { Header } from "../../components/Header/Header";
import { MenuIcon } from "../../components/Icons/MenuIcon";
import { Title } from "../../components/Title/Title";
import { HttpStatusCode } from "../../enums/HttpStatusCode.enum";
import { IBillingDashboard } from "../../interfaces/IBilling";
import { BillingService } from "../../services/BillingService";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NativeStackNavigationProp<any>;
};

export function DashboardScreen({ navigation }: Props) {
  const [dashboard, setDashboard] = useState<IBillingDashboard>({
    customers: 0,
    paid: 0,
    pending: 0,
    late: 0,
    history: [],
  });

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await BillingService.dashboard();

      if (status === HttpStatusCode.Ok) {
        setDashboard(data);
      }
    }

    navigation.addListener("focus", () => {
      fetchData();
    });

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      navigation.removeListener("focus", () => {});
    };
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
        <ScrollView style={styles.content}>
          <Header
            right={
              <IconButton onPress={() => navigation.push("Menu")}>
                <MenuIcon height={18} />
              </IconButton>
            }
          />
          <Title>Dashboard</Title>
          <BigCurrencyCard label="Currency" value={dashboard.paid} />
          <BigCurrencyCard label="Pending" value={dashboard.pending} />
          <BigCurrencyCard label="Late" value={dashboard.late} />
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
    padding: 20,
  },
});
