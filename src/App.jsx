import Navigaton from "./components/Navigation";
import UserProvider from "./providers/UserProvider";
import Router from "./router";

const App = () => {
  return (
    <UserProvider>
      <Navigaton />
      <Router />
    </UserProvider>
  );
};

export default App;
