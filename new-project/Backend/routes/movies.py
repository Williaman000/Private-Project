from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import engine, Base, SessionLocal
from models import Movie
from routes import movies

app = FastAPI()

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def add_sample_movies():
    db: Session = SessionLocal()
    if db.query(Movie).count() == 0: 
        sample_movies = [
            Movie(title="Inception", overview="A mind-bending thriller.", poster_path="/inception.jpg", vote_average=8.8),
            Movie(title="Interstellar", overview="A space exploration epic.", poster_path="/interstellar.jpg", vote_average=8.6),
        ]
        db.add_all(sample_movies)
        db.commit()
    db.close()

add_sample_movies()

app.include_router(movies.router)
