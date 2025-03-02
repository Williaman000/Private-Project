from sqlalchemy import Column, Integer, String, Float
from database import Base

class Movie(Base):
    __tablename__ = "movies"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    overview = Column(String)
    poster_path = Column(String)
    vote_average = Column(Float)
