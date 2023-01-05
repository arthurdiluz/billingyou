import { StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "../../theme";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  isSelected?: boolean;
  onPress?: VoidFunction;
};

export function TabBarButton({
  icon: Icon,
  isSelected = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      hitSlop={{ left: 20, top: 20, right: 20, bottom: 20 }}
      style={[styles.container, isSelected && styles.active]}
      onPress={onPress}
    >
      <Icon fill={isSelected ? "#fff" : Theme.colors.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 999,
    padding: 20,
  },
  active: {
    backgroundColor: Theme.colors.primary,
  },
});
