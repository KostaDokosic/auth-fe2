import { Route, Routes } from "react-router";
import PrivateRouter from "./components/PrivateRouter";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRouter />}>
        <Route index path="/" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default Router;
