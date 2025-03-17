// import { useEffect, useState } from "react";
// import axios from "axios";

// interface Movie {
//   id: number;
//   title: string;
//   poster_path: string;
// }

// const Home = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
//         );
//         setMovies(response.data.results);
//       } catch (err) {
//         setError("Failed to fetch movies. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);

//   if (loading) return <p>Loading movies...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Trending Movies</h1>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect } from 'react'; 
// import { useDispatch, useSelector } from 'react-redux'; 
// import { fetchPopularMovies, fetchTrendingMovies } from '../redux/movieSlice'; 
// import { RootState, AppDispatch } from '../redux/store'; 

// const MovieList: React.FC = () => { 
//   const dispatch = useDispatch<AppDispatch>(); 
//   const { popularMovies, trendingMovies, loading, error } = useSelector( 
//     (state: RootState) => state.movies 
//   ); 

//   useEffect(() => { 
//     dispatch(fetchPopularMovies());
//     dispatch(fetchTrendingMovies()); 
//   }, [dispatch]); 

//   if (loading) return <p>Loading...</p>; 
//   if (error) return <p>{error}</p>; 

//   return ( 
//     <div> 
//       <h2>Popular Movies</h2> 
//       <div> 
//         {popularMovies.map((movie: any) => ( 
//           <div key={movie.id}>{movie.title}</div> 
//         ))} 
//       </div> 

//       <h2>Trending Movies</h2> 
//       <div> 
//         {trendingMovies.map((movie: any) => ( 
//           <div key={movie.id}>{movie.title}</div> 
//         ))} 
//       </div> 
//     </div> 
//   ); 
// }; 

// export default MovieList;

import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchPopularMovies, fetchTrendingMovies } from '../redux/movieSlice'; 
import { RootState, AppDispatch } from '../redux/store'; 
import MovieCard from '../components/MovieCard'; 


const Home: React.FC = () => { 
  const dispatch = useDispatch<AppDispatch>(); 
  const { popularMovies, trendingMovies, loading, error } = useSelector( 
    (state: RootState) => state.movies 
  );
  useEffect(() => { 
    dispatch(fetchPopularMovies()); 
    dispatch(fetchTrendingMovies()); 
  }, [dispatch]); 
  if (loading) return <p>Loading...</p>; 
  if (error) return <p>{error}</p>; 
  return ( 
    <div> 
      <h2>Popular Movies</h2> 
      <div style={gridStyle}> 
        {popularMovies.map((movie: any) => ( 
          <MovieCard key={movie.id} movie={movie} /> 
        ))} 
      </div> 
      <h2>Trending Movies</h2> 
      <div style={gridStyle}> 
        {trendingMovies.map((movie: any) => ( 
          <MovieCard key={movie.id} movie={movie} /> 
        ))} 
      </div> 
    </div> 
  );
}; 
const gridStyle = { 
  display: 'grid', 
  gridTemplateColumns: 'repeat(4, 1fr)', 
  gap: '16px', 
  padding: '0 16px', 
};

export default Home;