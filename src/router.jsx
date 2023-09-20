import { Route, Routes } from "react-router";
import LoginPage from "./pages/Auth/LoginPage";
import MoviesPage from "./pages/Movies/MoviesPage";
import SingleMoviePage from "./pages/Movies/SingleMoviePage";
import RegisterPage from "./pages/Auth/RegisterPage";
import CreateMoviePage from "./pages/Movies/CreateMoviePage";
import EditMoviePage from "./pages/Movies/EditMoviePage";

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<PrivateRouter />}>
        <Route index path="/" element={<MoviesPage />} />
      </Route> */}

      <Route index path="/" element={<MoviesPage />} />
      <Route index path="/movies/:movieId" element={<SingleMoviePage />} />
      <Route index path="/createmovie" element={<CreateMoviePage />} />
      <Route index path="/editmovie/:movieId" element={<EditMoviePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default Router;
