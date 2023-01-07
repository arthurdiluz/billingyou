import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@contexts/AuthContext";
import { AppRoutes } from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <Toaster toastOptions={{ duration: 2000 }} />
      <AppRoutes />
    </AuthProvider>
  );
}
