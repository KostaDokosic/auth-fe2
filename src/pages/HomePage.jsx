import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

const HomePage = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, []);

  return <>Home Page</>;
};

export default HomePage;
