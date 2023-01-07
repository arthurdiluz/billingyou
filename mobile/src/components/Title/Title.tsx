import { StyleSheet, Text } from "react-native";
import { Theme } from "../../theme";

type Props = {
  children: string;
};

export function Title({ children }: Props) {
  return <Text style={styles.title}>{children || ""}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Theme.fontsFamily.display.bold,
    fontSize: 22,
    color: "#000",
    paddingVertical: 10,
  },
});
