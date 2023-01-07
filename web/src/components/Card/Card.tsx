import Container from "@components/Container/Container";

type Props = {
  Icon: React.ReactNode;
  label: string;
  value: string | number;
};

export default function Card({ Icon, label, value }: Props) {
  return (
    <Container className="w-full p-8">
      <p className="flex items-center text-gray-400 text-sm">
        {Icon}
        {label}
      </p>
      <p className="text-3xl font-semibold text-brand-primary-300">{value}</p>
    </Container>
  );
}
