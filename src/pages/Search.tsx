// import React, { useEffect } from 'react';//[pause]Import React and useEffect hook
// import { useDispatch, useSelector } from 'react-redux';//[pause]Import Redux hooks for state management
// import { useLocation } from 'react-router-dom';//[pause]Import useLocation to read URL query parameters
// import { Container, Typography, Grid } from '@mui/material';//[pause]Import UI components from MUI
// import { searchMoviesAsync } from '../redux/movieSlice';//[pause]Import async action to fetch search results
// import MovieCard from '../components/MovieCard';//[pause]Import MovieCard component to display each movie
// import Loading from '../pages/Loading';//[pause]Import Loading component for displaying a loading indicator
// import { AppDispatch } from '../redux/store';//[pause]Import AppDispatch type to correctly type useDispatch

// // Define Movie type to structure the movie data
// interface Movie {
//   id: number;//[pause]Unique identifier for each movie
//   title: string;//[pause]Movie title
//   poster_path: string;//[pause]Path to the movie poster image
//   vote_average: number | null;//[pause]Movie rating, nullable if not available
// }

// // Define RootState to structure the state shape from Redux store
// interface RootState {
//   movies: {
//     searchResults: Movie[];//[pause]Stores search results in an array of Movie objects
//     loading: boolean;//[pause]Indicates whether search is in progress
//   };
// }

// // Custom hook to get query parameters from the URL
// function useQuery() {
//   return new URLSearchParams(useLocation().search);//[pause]Extract search query parameters from URL
// }

// const Search: React.FC = () => {
//   const query = useQuery();//[pause]Get URL search parameters
//   const searchQuery = query.get('q');//[pause]Extract 'q' parameter from the URL
//   const dispatch = useDispatch<AppDispatch>();//[pause]Get Redux dispatch function with correct type
//   const { searchResults, loading } = useSelector((state: RootState) => state.movies);//[pause]Select search results and loading state from Redux store

//   // Fetch search results whenever searchQuery changes
//   useEffect(() => {
//     if (searchQuery) {
//       dispatch(searchMoviesAsync(searchQuery));//[pause]Dispatch action to search for movies
//     }
//   }, [dispatch, searchQuery]);//[pause]Dependency array ensures effect runs when searchQuery changes

//   // Show loading indicator if movies are being searched
//   if (loading) {
//     return <Loading message="Searching movies..." />;//[pause]Display loading component with message
//   }

//   return (
//     <Container sx={{ py: 4 }}>//[pause]
//       <Typography variant="h4" gutterBottom>//[pause]
//         Search Results for "{searchQuery}"
//       </Typography>
//       <Grid container spacing={3}>//[pause]
//         {searchResults.map((movie) => (//[pause]Map over searchResults and render MovieCard for each movie
//           <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>//[pause]
//             <MovieCard movie={movie} />//[pause]
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Search;//[pause]Export Search component


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Container, Typography, Grid } from "@mui/material";
import { searchMoviesAsync } from "../redux/movieSlice";
import MovieCard from "../components/MovieCard";
import Loading from "../pages/Loading";
import { AppDispatch } from "../redux/store";


interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number | null;
}

interface RootState {
  movies: {
    searchResults: Movie[];
    loading: boolean;
  };
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search: React.FC = () => {
  const query = useQuery();
  const searchQuery = query.get("q") || ""; 
  const dispatch = useDispatch<AppDispatch>();
  const { searchResults, loading } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    if (searchQuery.trim()) {
      dispatch(searchMoviesAsync(searchQuery));
    }
  }, [dispatch, searchQuery]);

  if (loading) {
    return <Loading message="Searching movies..." />;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search Results for "{searchQuery}"
      </Typography>
      <Grid container spacing={3}>
        {searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ mt: 2 }}>
            No movies found for "{searchQuery}".
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Search;
