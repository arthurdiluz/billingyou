import Svg, { Path } from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function UserIcon({ width = 32, height = 32, fill = "#01B4C2" }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M14.5 14.5a7.248 7.248 0 007.25-7.25A7.248 7.248 0 0014.5 0a7.248 7.248 0 00-7.25 7.25 7.248 7.248 0 007.25 7.25zm0 3.625c-4.84 0-14.5 2.429-14.5 7.25v1.813C0 28.183.816 29 1.813 29h25.375c.996 0 1.812-.816 1.812-1.813v-1.812c0-4.821-9.66-7.25-14.5-7.25z"
        fill={fill}
      />
    </Svg>
  );
}
