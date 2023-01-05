import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Theme } from "../../theme";

type Props = {
  label: string;
  onPress?: VoidFunction;
};

export function Button({ label, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label || ""}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    borderRadius: 4,
    backgroundColor: Theme.colors.primary,
  },
  text: {
    textAlign: "center",
    fontFamily: Theme.fontsFamily.display.bold,
    fontSize: 16,
    color: "#fff",
  },
});
