import Svg, { Path } from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export default function MoneyIcon({
  width = 17,
  height = 29,
  fill = "#01B4C2",
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 17 29" fill="none">
      <Path
        d="M8.829 12.728c-3.657-.95-4.833-1.934-4.833-3.464 0-1.756 1.627-2.98 4.35-2.98 2.867 0 3.93 1.369 4.027 3.383h3.56c-.112-2.771-1.804-5.317-5.17-6.139V0H5.928v3.48C2.803 4.157.29 6.187.29 9.296c0 3.722 3.077 5.575 7.572 6.654 4.028.967 4.834 2.384 4.834 3.883 0 1.111-.79 2.884-4.35 2.884-3.32 0-4.624-1.483-4.802-3.384H0c.193 3.529 2.836 5.51 5.929 6.17V29h4.833v-3.464c3.142-.596 5.64-2.417 5.64-5.72 0-4.575-3.916-6.138-7.573-7.088z"
        fill={fill}
      />
    </Svg>
  );
}
