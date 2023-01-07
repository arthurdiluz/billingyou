import { DateTime } from "luxon";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CurrencyHelper } from "../../helpers/CurrencyHelper";
import { Theme } from "../../theme";

type Props = {
  dueDate: string;
  description: string;
  value: string;
  onPress?: VoidFunction;
};

export function BillingCard({ dueDate, description, value, onPress }: Props) {
  const day = DateTime.fromISO(dueDate).toFormat("dd") || "";
  const month = DateTime.fromISO(dueDate).toFormat("MMM") || "";
  const currencyValue = CurrencyHelper.NumberToCurrency(Number(value)) || "";

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dayText}>{day || ""}</Text>
        <Text style={styles.monthText}>{month || ""}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{description || ""}</Text>
        <Text style={styles.priceText}>{currencyValue || ""}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateContainer: {
    backgroundColor: Theme.colors.primary,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  dayText: {
    fontFamily: Theme.fontsFamily.display.bold,
    fontSize: 24,
    color: "#fff",
  },
  monthText: {
    fontFamily: Theme.fontsFamily.display.medium,
    fontSize: 12,
    color: "#fff",
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  infoText: {
    fontFamily: Theme.fontsFamily.display.medium,
    lineHeight: 22,
    fontSize: 16,
    color: "#000",
    paddingBottom: 5,
  },
  priceText: {
    fontFamily: Theme.fontsFamily.display.light,
    fontSize: 14,
  },
});
