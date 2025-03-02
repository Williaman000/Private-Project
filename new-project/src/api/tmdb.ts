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

export const fetchSimilarMovies = async (movieId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/similar`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching similar movies:", error);
    return [];
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

export const fetchMovieGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: { api_key: API_KEY },
    });
    return response.data.genres;
  } catch (error) {
    console.error("Error fetching movie genres:", error);
    throw error;
  }
};

export const fetchMoviesByCategory = async (genreId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching movies for genre ${genreId}:`, error);
    throw error;
  }
};

export const fetchTVSeries = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data.results;
};

export const fetchTVSeriesDetails = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch TV series details");
  }
  return await response.json();
};
