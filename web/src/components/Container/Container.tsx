import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={classNames("bg-white rounded-md shadow-lg p-4", className)}>
      {children}
    </div>
  );
}
