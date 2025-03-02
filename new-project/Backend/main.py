from fastapi import FastAPI
from routes import movies, series
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(movies.router, prefix="/api", tags=["Movies"])
app.include_router(series.router, prefix="/api", tags=["Series"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to the Movie API"}
