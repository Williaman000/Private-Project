from fastapi import FastAPI
from routes import movies, series

app = FastAPI(title="WillAn API", description="Movies and Series API", version="1.0")

app.include_router(movies.router, prefix="/movies", tags=["Movies"])
app.include_router(series.router, prefix="/series", tags=["Series"])

@app.get("/")
def home():
    return {"message": "Welcome to WillAn API!"}
