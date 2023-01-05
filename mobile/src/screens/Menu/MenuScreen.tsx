import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Form/Button";
import { IconButton } from "../../components/Form/IconButton";
import { Header } from "../../components/Header/Header";
import { BackIcon } from "../../components/Icons/BackIcon";
import { Title } from "../../components/Title/Title";
import { useAuthContext } from "../../contexts/AuthContext";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: NativeStackNavigationProp<any>;
};

export function MenuScreen({ navigation }: Props) {
  const { logout } = useAuthContext();
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
        <ScrollView style={styles.content}>
          <Header
            left={
              <IconButton onPress={() => navigation.goBack()}>
                <BackIcon height={18} />
              </IconButton>
            }
          />
          <Title>Settings</Title>
          <Button label="Sair" onPress={logout} />
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
