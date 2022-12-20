import Sidebar from "@components/Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function SidebarLayout({ children }: Props) {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <Sidebar />
      <div className="ml-[350px] mr-0 w-[calc(100vw-380px)] p-10">
        {children}
      </div>
    </div>
  );
}
