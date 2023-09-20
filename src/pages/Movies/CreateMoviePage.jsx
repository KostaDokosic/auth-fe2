import { useState } from "react";
import { useNavigate } from "react-router";
import "../../styles/auth.styles.css";
import MovieService from "../../services/movie.service";

const CreateMoviePage = () => {
  const [data, setData] = useState({
    title: "",
    director: "",
    image_url: "",
    duration: 0,
    release_date: "",
    genre: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      setError("");

      const { data: movieData } = await MovieService.create(data);
      navigation(`/movies/${movieData.data.id}`);
    } catch (err) {
      setError(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Create New Movie</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            required
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <label>Title</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            required
            value={data.director}
            onChange={(e) => setData({ ...data, director: e.target.value })}
          />
          <label>Director</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            required
            value={data.image_url}
            onChange={(e) => setData({ ...data, image_url: e.target.value })}
          />
          <label>Image URL</label>
        </div>
        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            required
            value={data.duration}
            onChange={(e) => setData({ ...data, duration: e.target.value })}
          />
          <label>Duration</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            required
            value={data.genre}
            onChange={(e) => setData({ ...data, genre: e.target.value })}
          />
          <label>Genre</label>
        </div>
        <div className="form-floating">
          <input
            type="date"
            className="form-control"
            required
            value={data.release_date}
            onChange={(e) => setData({ ...data, release_date: e.target.value })}
          />
          <label>Release Date</label>
        </div>

        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          disabled={isLoading}
        >
          Create Movie
        </button>
        {error && <div className="alert alert-danger mt-5">{error}</div>}
        <p className="mt-5 mb-3 text-body-secondary">
          &copy; Copyright Vivify Academy
        </p>
      </form>
    </main>
  );
};

export default CreateMoviePage;
