import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Theme } from "../../theme";

type Props = {
  children?: React.ReactNode;
  onPress?: VoidFunction;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon?: any;
};

export function Card({ children, Icon, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {Icon && (
        <View style={styles.icon}>
          <Icon fill={Theme.colors.secondary} />
        </View>
      )}
      <View>
        <Text style={styles.text}>{children || ""}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  icon: {
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontWeight: "900",
    color: Theme.colors.secondary,
  },
});
