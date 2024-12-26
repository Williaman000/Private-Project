const API_KEY = '08664a7b18cca7f408e2f94625521a28';
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Fetch latest movie news (using upcoming movies API as a source for news-like data).
 */
export const fetchMovieNews = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch movie news');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movie news:', error);
    return [];
  }
};
