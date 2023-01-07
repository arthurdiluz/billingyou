import Svg, { Path } from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function BackIcon({ width = 13, height = 22, fill = "#000" }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 13 22" fill="none">
      <Path
        d="M10.688 2l-9 9 9 9"
        stroke={fill}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
