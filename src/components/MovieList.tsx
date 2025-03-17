import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, fetchTrendingMovies } from "../redux/movieSlice";
import { RootState, AppDispatch } from "../redux/store";
import MovieCard from "./MovieCard";

const MovieList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { popularMovies, trendingMovies, loading, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="movie-container">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h2>Trending Movies</h2>
      <div className="movie-container">
        {trendingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
