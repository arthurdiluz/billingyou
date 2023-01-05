import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  onPress?: VoidFunction;
  children: React.ReactNode;
};

export function IconButton({ onPress, children }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    padding: 20,
  },
});
