import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import Movie from "../../components/Movie";
import Pagination from "../../components/Pagination";
import MovieService from "../../services/movie.service";
import { CONFIG } from "../../utils/static";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [metaData, setMetaData] = useState(undefined);
  const [page, setPage] = useState(1);
  const params = useLocation();

  const getPage = useCallback(() => {
    const pageNumber = Number(params.search.replace("?page=", ""));
    !isNaN(pageNumber) && pageNumber > 0 && setPage(pageNumber);
  }, [params.search]);

  useEffect(() => {
    getPage();
  }, [getPage, params]);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await MovieService.getAll(
        CONFIG.moviesPerPage,
        (page - 1) * CONFIG.moviesPerPage
      );
      data?.metadata && setMetaData(data.metadata);
      data?.data && setMovies(data.data);
    };
    getMovies();
  }, [page]);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {movies?.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
      {metaData && <Pagination page={page} total={metaData.total} />}
    </div>
  );
};

export default MoviesPage;
