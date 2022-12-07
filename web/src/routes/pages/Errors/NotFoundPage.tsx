import { useLocation } from "react-router-dom";
import { Logo } from "../../../components";

export function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
      {/* <div className="py-10">
        <Logo />
      </div> */}
      <h1 className="text-3xl text-gray-600 text-center py-4">
        Page not found {":("}
      </h1>
      <p className="text-gray-500 text-center">
        Requested page with path '{pathname}' does not exist
      </p>
    </div>
  );
}
