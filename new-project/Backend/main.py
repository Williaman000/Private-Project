from fastapi import FastAPI
from routes import series

app = FastAPI()

app.include_router(series.router, prefix="/series", tags=["Series"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Movie API"}
