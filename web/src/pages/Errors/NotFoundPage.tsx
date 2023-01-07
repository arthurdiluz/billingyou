import { useLocation } from "react-router-dom";
import Logo from "@components/Logo/Logo";

export default function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="py-10">{/* <Logo /> */}</div>
      <h1 className="text-3xl text-gray-600 text-center py-4">
        Page not found {":("}
      </h1>
      <p className="text-gray-500 text-center">
        The requested page with path '{pathname}' either doesn't exist or you do
        not have access to it
      </p>
    </div>
  );
}
