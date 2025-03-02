import requests
from fastapi import APIRouter
from config import TMDB_API_KEY, BASE_URL

router = APIRouter()

@router.get("/series")
def get_series():
    url = f"{BASE_URL}/tv/popular"
    params = {"api_key": TMDB_API_KEY, "language": "en-US", "page": 1}

    response = requests.get(url, params=params)
    data = response.json()

    if response.status_code != 200:
        return {"error": "Failed to fetch data from TMDb"}

    return {"series": data["results"]}
