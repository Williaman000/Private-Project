import requests
from fastapi import APIRouter
from config import TMDB_API_KEY, BASE_URL

router = APIRouter()

@router.get("/movies")
def get_movies():
    url = f"{BASE_URL}/movie/popular"
    params = {"api_key": TMDB_API_KEY, "language": "en-US", "page": 1}

    response = requests.get(url, params=params)
    data = response.json()

    if response.status_code != 200:
        return {"error": "Failed to fetch data from TMDb"}

    return {"movies": data["results"]}
