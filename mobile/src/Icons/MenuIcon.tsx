import Svg, { Path } from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export default function MenuIcon({
  width = 24,
  height = 22,
  fill = "#000",
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 22" fill="none">
      <Path
        d="M23.76.425H.24a.24.24 0 00-.24.24v1.923c0 .132.108.24.24.24h23.52a.24.24 0 00.24-.24V.665a.24.24 0 00-.24-.24zm0 18.747H.24a.24.24 0 00-.24.24v1.923c0 .132.108.24.24.24h23.52a.24.24 0 00.24-.24v-1.923a.24.24 0 00-.24-.24zm0-9.374H.24a.24.24 0 00-.24.24v1.923c0 .133.108.24.24.24h23.52a.24.24 0 00.24-.24V10.04a.24.24 0 00-.24-.24z"
        fill={fill}
      />
    </Svg>
  );
}
