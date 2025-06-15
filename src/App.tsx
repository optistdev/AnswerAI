import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./pages/layout/SideBar";
import Header from "./pages/layout/Header";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <div className="flex">
        {user ? <Sidebar /> : <></>}
        <div className="w-full">
          <Header />
          <main className="w-full h-[calc(100%-87px)] ">
            <AppRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
