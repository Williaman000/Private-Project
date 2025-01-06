const API_KEY = '08664a7b18cca7f408e2f94625521a28';
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Fetch currently playing movies from TMDB API.
 */
export const fetchNowPlayingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch now playing movies');
    }
    const data = await response.json();
    return data.results; // Return the list of now playing movies
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return [];
  }
};
