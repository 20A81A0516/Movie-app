// import axios from 'axios'; 

// const api = axios.create({ 
//   baseURL: 'https://api.themoviedb.org/3', 
//   params: { 
//     api_key: import.meta.env.VITE_TMDB_API_KEY, 
//   }, 
//   headers: {
//     'Content-Type': 'application/json', 
//   }, 
// }); 

// export const getPopularMovies = () => api.get('/movie/popular'); 

// export const getTrendingMovies = () => api.get('/trending/movie/day'); 

// export default api; 


import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};
