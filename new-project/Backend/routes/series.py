from fastapi import APIRouter
from database import series_db

router = APIRouter()

@router.get("/")
def get_series():
    return {"series": series_db}
