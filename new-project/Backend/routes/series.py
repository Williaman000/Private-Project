from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, Series

router = APIRouter()

# DB 세션 의존성 주입
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ✅ 시리즈 목록 조회
@router.get("/")
def get_series(db: Session = Depends(get_db)):
    series = db.query(Series).all()
    return {"series": series}
