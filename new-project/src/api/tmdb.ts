import axios from "axios";

const API_KEY = "08664a7b18cca7f408e2f94625521a28";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const fetchSearchResults = async (query: string) => {
  const url = `${BASE_URL}/search/movie`;
  const response = await axios.get(url, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data;
};
