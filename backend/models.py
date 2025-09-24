from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
from bson import ObjectId

# Contact Form Models
class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    service: Optional[str] = None
    message: str

class ContactSubmission(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    service: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"  # new, contacted, resolved

# Company Information
class CompanyInfo(BaseModel):
    name: str
    tagline: str
    motto: str
    headquarters: str
    description: str
    vision: str
    technologies: List[str]
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Service Model
class Service(BaseModel):
    key: str  # rolloff, commercial, residential
    title: str
    description: str
    image: str
    features: List[str]
    is_active: bool = True

# Planning Service Model
class PlanningService(BaseModel):
    key: str  # strategic, route, execution, post
    title: str
    description: str
    image: str
    capabilities: List[str]
    is_active: bool = True

# Testimonial Model
class Testimonial(BaseModel):
    company: str
    quote: str
    author: str
    rating: int
    is_active: bool = True
    order: int = 0

# Leadership Model
class Leadership(BaseModel):
    name: str
    title: str
    image: str
    bio: str
    credentials: str
    is_active: bool = True

# Statistics Model
class Statistic(BaseModel):
    label: str
    value: str
    order: int = 0
    is_active: bool = True