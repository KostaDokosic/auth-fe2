import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          src={movie.image_url}
          className="card-img-top"
          width="100%"
          height="225"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />

        <div className="card-body">
          <p className="card-text">{movie.title}</p>
          <small className="card-text mb-2">{movie.genre}</small>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link
                to={`/movies/${movie.id}`}
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </Link>
              <Link
                to={`/editmovie/${movie.id}`}
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </Link>
            </div>
            <small className="text-body-secondary">
              {new Date(movie.release_date).toDateString()}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
