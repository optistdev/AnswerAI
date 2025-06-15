import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./pages/layout/SideBar";
import Header from "./pages/layout/Header";
import { useAuth } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const { user } = useAuth();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster richColors position="top-right" />
        <div className="flex">
          {user ? <Sidebar /> : <></>}
          <div className="w-full">
            <Header />
            <main className="w-full minh-[calc(100vh-87px)]">
              <AppRoutes />
            </main>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
