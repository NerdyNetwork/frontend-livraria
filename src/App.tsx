import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./sass/global.scss";
import { Header } from "./components/Header";
import { AuthContextProvider } from "./contexts/authContext";

export const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <div className="header-margin"></div>
        <Routes />
      </BrowserRouter>
    </AuthContextProvider>
  );
}
