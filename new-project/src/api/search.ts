import axios from "axios";

const API_KEY = "08664a7b18cca7f408e2f94625521a28";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchContent = async (query: string, filter: string) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      include_adult: false,
      sort_by: filter,
    },
  });
  return response.data.results;
};
