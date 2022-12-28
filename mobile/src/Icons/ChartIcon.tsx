import Svg, { Path } from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export default function ChartIcon({
  width = 29,
  height = 29,
  fill = "#01B4C2",
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 29 29" fill="none">
      <Path
        d="M3.625 29a3.636 3.636 0 003.625-3.625V12.687a3.636 3.636 0 00-3.625-3.624A3.636 3.636 0 000 12.687v12.688A3.636 3.636 0 003.625 29zm18.125-9.063v5.438A3.636 3.636 0 0025.375 29 3.636 3.636 0 0029 25.375v-5.438a3.636 3.636 0 00-3.625-3.625 3.636 3.636 0 00-3.625 3.625zM14.5 29a3.636 3.636 0 003.625-3.625V3.625A3.636 3.636 0 0014.5 0a3.636 3.636 0 00-3.625 3.625v21.75A3.636 3.636 0 0014.5 29z"
        fill={fill}
      />
    </Svg>
  );
}
