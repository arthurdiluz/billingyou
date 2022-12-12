type Props = {
  width?: string | number;
  height?: string | number;
};

export default function Logo({ width = 250, height = 50 }: Props) {
  return (
    <div
      style={{ width, height }}
      className="bg-logo bg-no-repeat bg-center bg-contain"
    />
  );
}
