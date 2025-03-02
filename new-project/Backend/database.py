from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///./movies.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Movie(Base):
    __tablename__ = "movies"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    overview = Column(String)
    poster_path = Column(String)
    vote_average = Column(Integer)

class Series(Base):
    __tablename__ = "series"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    seasons = Column(Integer)

Base.metadata.create_all(bind=engine)
