from fastapi import APIRouter
from database import movies_db

router = APIRouter()

@router.get("/")
def get_movies():
    return {"movies": movies_db}
