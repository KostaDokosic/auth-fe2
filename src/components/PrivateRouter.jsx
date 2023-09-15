import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import UserContext from "../context/UserContext";

const PrivateRouter = () => {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
