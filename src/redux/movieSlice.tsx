// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import { getPopularMovies, getTrendingMovies } from '../utils/api'; 

// interface MovieState { 
//   popularMovies: any[]; 
//   trendingMovies: any[];
//   loading: boolean; 
//   error: string | null; 
// } 

// const initialState: MovieState = { 
//   popularMovies: [], 
//   trendingMovies: [], 
//   loading: false, 
//   error: null, 
// }; 

// export const fetchPopularMovies = createAsyncThunk( 
//   'movies/fetchPopularMovies', 
//   async () => { 
//     const response = await getPopularMovies(); 
//     return response.data.results; 
//   } 
// ); 

// export const fetchTrendingMovies = createAsyncThunk( 
//   'movies/fetchTrendingMovies', 
//   async () => {
//     const response = await getTrendingMovies(); 
//     return response.data.results; 
//   } 
// ); 

// const movieSlice = createSlice({ 
//   name: 'movies', 
//   initialState, 
//   reducers: {}, 
//   extraReducers: (builder) => { 
//     builder 
//       .addCase(fetchPopularMovies.pending, (state) => { 
//         state.loading = true; 
//       }) 
//       .addCase(fetchPopularMovies.fulfilled, (state, action: PayloadAction<any[]>) => { 
//         state.loading = false; 
//         state.popularMovies = action.payload; 
//       }) 
//       .addCase(fetchPopularMovies.rejected, (state, action) => { 
//         state.loading = false; 
//         state.error = action.error.message || 'Failed to fetch popular movies'; 
//       }) 
//       .addCase(fetchTrendingMovies.pending, (state) => { 
//         state.loading = true; 
//       }) 
//       .addCase(fetchTrendingMovies.fulfilled, (state, action: PayloadAction<any[]>) => { 
//         state.loading = false; 
//         state.trendingMovies = action.payload;
//       }) 
//       .addCase(fetchTrendingMovies.rejected, (state, action) => { 
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch trending movies'; 
//       }); 
//   }, 
// }); 

// export default movieSlice.reducer; 

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getPopularMovies, getTrendingMovies } from "../utils/api";

// interface MovieState {
//   popularMovies: any[];
//   trendingMovies: any[];
//   loading: boolean;
//   error: string | null;
// }

// // Initial state
// const initialState: MovieState = {
//   popularMovies: [],
//   trendingMovies: [],
//   loading: false,
//   error: null,
// };

// // Async actions
// export const fetchPopularMovies = createAsyncThunk("movies/fetchPopular", async () => {
//   return await getPopularMovies();
// });

// export const fetchTrendingMovies = createAsyncThunk("movies/fetchTrending", async () => {
//   return await getTrendingMovies();
// });

// // Movie slice
// const movieSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPopularMovies.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchPopularMovies.fulfilled, (state, action) => {
//         state.loading = false;
//         state.popularMovies = action.payload;
//       })
//       .addCase(fetchPopularMovies.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Failed to fetch popular movies";
//       })
//       .addCase(fetchTrendingMovies.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
//         state.loading = false;
//         state.trendingMovies = action.payload;
//       })
//       .addCase(fetchTrendingMovies.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || "Failed to fetch trending movies";
//       });
//   },
// });

// export default movieSlice.reducer;



// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import { getPopularMovies, getTrendingMovies } from '../utils/api';
// import api from '../utils/api';

// interface MovieState {
//   popularMovies: any[];
//   trendingMovies: any[];
//   searchResults: any[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: MovieState = {
//   popularMovies: [],
//   trendingMovies: [],
//   searchResults: [],
//   loading: false,
//   error: null,
// };

// export const fetchPopularMovies = createAsyncThunk(
//   'movies/fetchPopularMovies',
//   async () => {
//     const response = await getPopularMovies();
//     return response.data.results;
//   }
// );

// export const fetchTrendingMovies = createAsyncThunk(
//   'movies/fetchTrendingMovies',
//   async () => {
//     const response = await getTrendingMovies();
//     return response.data.results;
//   }
// );

// export const searchMoviesAsync = createAsyncThunk(
//   'movies/searchMovies',
//   async (query: string) => {
//     const response = await api.get(`/search/movie?query=${query}`);
//     return response.data.results;
//   }
// );

// const movieSlice = createSlice({
//   name: 'movies',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPopularMovies.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchPopularMovies.fulfilled, (state, action: PayloadAction<any[]>) => {
//         state.loading = false;
//         state.popularMovies = action.payload;
//       })
//       .addCase(fetchPopularMovies.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch popular movies';
//       })
//       .addCase(fetchTrendingMovies.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchTrendingMovies.fulfilled, (state, action: PayloadAction<any[]>) => {
//         state.loading = false;
//         state.trendingMovies = action.payload;
//       })
//       .addCase(fetchTrendingMovies.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch trending movies';
//       })
//       .addCase(searchMoviesAsync.fulfilled, (state, action: PayloadAction<any[]>) => {
//         state.searchResults = action.payload;
//       });
//   },
// });

// export default movieSlice.reducer;


import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
//import { getPopularMovies, getTrendingMovies } from '../utils/api';
import api from '../utils/api';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number | null;
}

interface MovieState {
  popularMovies: Movie[];
  trendingMovies: Movie[];
  searchResults: Movie[];
  watchlist: Movie[]; 
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  popularMovies: [],
  trendingMovies: [],
  searchResults: [],
  watchlist: [], 
  loading: false,
  error: null,
};


export const searchMoviesAsync = createAsyncThunk<Movie[], string>(
  'movies/search',
  async (query) => {
    const response = await api.get(`/search/movie?query=${query}`);
    return response.data.results; 
  }
);

export const fetchPopularMovies = createAsyncThunk<Movie[]>(
  'movies/fetchPopularMovies',
  async () => {
    const response = await api.get('/movie/popular');
    return response.data.results; 
  }
);

export const fetchTrendingMovies = createAsyncThunk<Movie[]>(
  'movies/fetchTrendingMovies',
  async () => {
    const response = await api.get('/trending/movie/week');
    return response.data.results; 
  }
);


const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: { 
  addToWatchlist: (state, action: PayloadAction<Movie>) => { 
    if (!state.watchlist.find((movie) => movie.id === action.payload.id)) { 
      state.watchlist.push(action.payload); 
    } 
  }, 
  removeFromWatchlist: (state, action: PayloadAction<Movie>) => {
  
    state.watchlist = state.watchlist.filter( 
      (movie) => movie.id !== action.payload.id 
    ); 
  }, 
}, 
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.loading = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch popular movies';
      })
      
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.loading = false;
        state.trendingMovies = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch trending movies';
      })
      
      .addCase(searchMoviesAsync.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.searchResults = action.payload;
      });
  },
});

export const { addToWatchlist, removeFromWatchlist } = movieSlice.actions;

export default movieSlice.reducer;

