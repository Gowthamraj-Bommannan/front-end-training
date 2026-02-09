from service import login_user
from pydantic import BaseModel
from fastapi import APIRouter

router = APIRouter()

class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
def api_login(login_request: LoginRequest):
    return login_user(login_request.email, login_request.password)