import * as React from "react";
import Svg, { Path, Text } from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
};

export function BillingYouLogo({ width = 150, height = 30 }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 148 30" fill="none">
      <Path
        fill="#01B4C2"
        d="M37.616 16.33a1.793 1.793 0 001.696-1.207 1.785 1.785 0 00-.596-1.993L22.595.616a1.793 1.793 0 00-2.2 0L4.274 13.13a1.788 1.788 0 001.1 3.2h7.147c-.2 9.617-2.03 14.237-4.018 16.558-1.89 2.206-4.113 2.61-6.441 3.03l-.6.11a1.792 1.792 0 00-1.459 1.867 1.786 1.786 0 001.677 1.674c4.923.306 12.055-.154 18.022-3.624 5.791-3.368 10.244-9.434 10.71-19.614h7.204z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <Text
        stroke="#000"
        fontWeight="bold"
        textAnchor="start"
        fontFamily="'Arial'"
        fontSize={24}
        strokeWidth={0}
        y={25}
        x={40}
        fill="#000"
      >
        {"BillingYou"}
      </Text>
    </Svg>
  );
}
