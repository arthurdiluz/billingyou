import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Theme } from "../../theme";

type Props = {
  label: string;
  type?: "primary" | "secondary";
  onPress?: VoidFunction;
};

export function Button({ label, type = "primary", onPress }: Props) {
  return (
    <TouchableOpacity style={getButtonStyle(type).container} onPress={onPress}>
      <Text style={getButtonStyle(type).text}>{label || ""}</Text>
    </TouchableOpacity>
  );
}

function getButtonStyle(type: string = "primary") {
  return StyleSheet.create({
    container: {
      width: "100%",
      padding: 15,
      borderRadius: 4,
      backgroundColor:
        type === "primary" ? Theme.colors.primary : Theme.colors.secondary,
    },
    text: {
      textAlign: "center",
      fontFamily: Theme.fontsFamily.display.bold,
      fontSize: 16,
      color: type === "primary" ? Theme.colors.secondary : Theme.colors.primary,
    },
  });
}
