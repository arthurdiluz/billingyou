import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomerCard } from "../../components/Cards/CustomerCard";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { HttpStatusCode } from "../../enums/HttpStatusCode.enum";
import { ICustomer } from "../../interfaces/ICustomer";
import { CustomerService } from "../../services/CustomerService";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NativeStackNavigationProp<any>;
};

export function CustomersScreen({ navigation }: Props) {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await CustomerService.find();

      if (status === HttpStatusCode.Ok) {
        setCustomers(data);
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
              <Title>Clients</Title>
            </>
          }
          data={customers}
          keyExtractor={(item, index) => index?.toString()}
          renderItem={({ item }) => (
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            <CustomerCard {...item} onPress={() => {}} />
          )}
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
