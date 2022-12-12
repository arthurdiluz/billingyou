import Sidebar from "@components/Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function SidebarLayout({ children }: Props) {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <Sidebar />
      <div className="ml-[350px] w-[calc(100vw-350px)] p-10">{children}</div>
    </div>
  );
}
