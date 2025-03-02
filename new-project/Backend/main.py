from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI backend for WillAn world!"}

@app.get("/movies")
def get_movies():
    return {"movies": ["Movie 1", "Movie 2", "Movie 3"]}
