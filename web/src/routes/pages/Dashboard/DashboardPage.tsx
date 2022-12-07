import { Sidebar } from "../../../components";

export function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-gray-200 grid grid-cols-[350px, 1fr]">
      <Sidebar />
      <div className="ml-[350px] w-[calc(100vw-350px)] p-10 border-[10px]">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}
