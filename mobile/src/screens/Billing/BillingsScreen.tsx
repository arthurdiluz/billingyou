import React, { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IBilling } from "../../interfaces/IBilling";
import { BillingService } from "../../services/BillingService";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { BillingCard } from "../../components/Cards/BillingCard";
import { HttpStatusCode } from "../../enums/HttpStatusCode.enum";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NativeStackNavigationProp<any>;
};

export function BillingsScreen({ navigation }: Props) {
  const [billings, setBillings] = useState<IBilling[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await BillingService.find();

      if (status === HttpStatusCode.Ok) {
        setBillings(data);
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
        <FlatList
          contentContainerStyle={styles.flatList}
          ListHeaderComponent={
            <>
              <Header />
              <Title>Billings</Title>
            </>
          }
          data={billings}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <BillingCard {...item} />}
        />
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
  flatList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
