import React from "react";
import { Link } from "react-router-dom";

import styles from "./MoviesList.module.css";

import { TrendingMovie, useGetTrendingMovies } from "~/support/services/movies";


import MovieDetailsPage from "~/components/MovieDetails/MovieDetailsPage";

export const MoviesList: React.FC = () => {
  const { trendingMovies } = useGetTrendingMovies();

  return (
    <div className={styles.moviesList}>
      {trendingMovies?.map((movie: TrendingMovie) => (
        <div className={styles.movie} key={movie.id} aria-label={movie.title} >
          <h1>
            {movie.title}
          </h1>
          <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            title="movie.title"
          />
            <MovieDetailsPage ></MovieDetailsPage>
          <li >
            // <Link to={`/details${movie.id}`} state={{ from: "occupation" }}>More Details...</Link> 
          </li>
        </div>
      ))}
    </div>

  );
};
