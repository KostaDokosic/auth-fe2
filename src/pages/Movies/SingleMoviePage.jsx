import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieService from "../../services/movie.service";

const SingleMoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(undefined);

  const getMovie = useCallback(async () => {
    if (!movieId) return;

    const { data } = await MovieService.get(movieId);
    data?.data && setMovie(data.data);
  }, [movieId]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <>
      {movie ? (
        <>
          <div classNam="p-5 mb-4 bg-body-tertiary rounded-3">
            <img src={movie.image_url} alt="film slika" />
            <div classNam="container-fluid py-5">
              <h1 classNam="display-5 fw-bold">{movie.title}</h1>
              <p classNam="col-md-8 fs-4">Director: {movie.director}</p>
              <p classNam="col-md-8 fs-4">Genre: {movie.genre}</p>
              <p classNam="col-md-8 fs-4">Duration: {movie.duration}</p>
            </div>
          </div>
        </>
      ) : (
        <h4>Loading ...</h4>
      )}
    </>
  );
};

export default SingleMoviePage;
