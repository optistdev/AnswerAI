import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "sonner";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./pages/layout/SideBar";
import Header from "./pages/layout/Header";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster richColors position="top-right" />
        <div className="flex">
          <Sidebar />
          <div className="w-full">
            <Header />
            <AppRoutes />
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
