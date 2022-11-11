// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@typescript-eslint/ban-ts-comment
// @ts-ignore
// import React from "react";
import * as React from 'react';
import { useParams } from "react-router-dom";
import { TrendingMovie, useGetTrendingMovies } from "~/support/services/movies";
import { MovieImage } from "./MovieImage";
import { MovieDetail } from "./MovieDetail";
import { MovieCard } from "~/layouts/MovieCard";
import styles from "./MovieDetailsPage.module.css";


const MovieDetailsPage = () => {

  const { trendingMovies } = useGetTrendingMovies();
    const parems = useParams();
    console.log(parems.movieID)
    // console.log(trendingMovies[0].backdrop_path)

    // for (let i = 0; i < trendingMovies.length; i++) {
    //   console.log(trendingMovies[i])
    //   if (parems.movieID.toString() == trendingMovies[i].id.toString()) {
    //     return(
    //       <div className={styles.movieDetailsPage}>
    //         <MovieCard>
    //           <MovieImage image={trendingMovies[i].poster_path.toString()}>
    //           </MovieImage>
    //         </MovieCard>
    //         <MovieCard>
    //            <MovieDetail details={trendingMovies[i]}></MovieDetail>
    //         </MovieCard>    
    //       </div>
    //      )
    //   }
    // }

      return(
        <div className={styles.movieDetailsPage}>
          <MovieCard>
             <MovieImage  >
             </MovieImage>
          </MovieCard>
              <MovieCard>
                <MovieDetail></MovieDetail>
              </MovieCard>
        </div>
       )
}

export default MovieDetailsPage;