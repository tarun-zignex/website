from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from models import ContactSubmissionCreate, ContactSubmission
from database import (
    contact_collection, get_company_info, get_services, 
    get_planning_services, get_testimonials, get_leadership, get_statistics
)
import logging

logger = logging.getLogger(__name__)

router = APIRouter()

@router.post("/contact")
async def submit_contact_form(form_data: ContactSubmissionCreate):
    """Handle contact form submission"""
    try:
        # Create contact submission object
        submission = ContactSubmission(**form_data.dict())
        
        # Insert into database
        result = await contact_collection.insert_one(submission.dict())
        
        logger.info(f"Contact form submitted successfully: {result.inserted_id}")
        
        return {
            "success": True,
            "message": "Contact form submitted successfully",
            "id": str(result.inserted_id)
        }
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@router.get("/company-info")
async def get_company_information():
    """Get company information"""
    try:
        company_info = await get_company_info()
        if not company_info:
            raise HTTPException(status_code=404, detail="Company information not found")
        
        return {
            "name": company_info.name,
            "tagline": company_info.tagline,
            "motto": company_info.motto,
            "headquarters": company_info.headquarters,
            "description": company_info.description,
            "vision": company_info.vision,
            "technologies": company_info.technologies
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching company info: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch company information")

@router.get("/services")
async def get_services_data():
    """Get all services data"""
    try:
        services = await get_services()
        
        # Format services data to match frontend expectations
        services_dict = {}
        for service in services:
            services_dict[service.key] = {
                "title": service.title,
                "description": service.description,
                "image": service.image,
                "features": service.features
            }
        
        return services_dict
    except Exception as e:
        logger.error(f"Error fetching services: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch services")

@router.get("/planning-services")
async def get_planning_services_data():
    """Get all planning services data"""
    try:
        planning_services = await get_planning_services()
        
        # Format planning services data to match frontend expectations
        services_dict = {}
        for service in planning_services:
            services_dict[service.key] = {
                "title": service.title,
                "description": service.description,
                "image": service.image,
                "capabilities": service.capabilities
            }
        
        return services_dict
    except Exception as e:
        logger.error(f"Error fetching planning services: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch planning services")

@router.get("/testimonials")
async def get_testimonials_data():
    """Get all testimonials"""
    try:
        testimonials = await get_testimonials()
        
        # Format testimonials data to match frontend expectations
        return [
            {
                "id": testimonial.order,
                "company": testimonial.company,
                "quote": testimonial.quote,
                "author": testimonial.author,
                "rating": testimonial.rating
            }
            for testimonial in testimonials
        ]
    except Exception as e:
        logger.error(f"Error fetching testimonials: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch testimonials")

@router.get("/leadership")
async def get_leadership_data():
    """Get leadership information"""
    try:
        leadership = await get_leadership()
        if not leadership:
            raise HTTPException(status_code=404, detail="Leadership information not found")
        
        return {
            "ceo": {
                "name": leadership.name,
                "title": leadership.title,
                "image": leadership.image,
                "bio": leadership.bio,
                "credentials": leadership.credentials
            }
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching leadership: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch leadership information")

@router.get("/stats")
async def get_statistics_data():
    """Get company statistics"""
    try:
        stats = await get_statistics()
        
        # Format stats data to match frontend expectations
        return [
            {
                "label": stat.label,
                "value": stat.value
            }
            for stat in stats
        ]
    except Exception as e:
        logger.error(f"Error fetching statistics: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch statistics")

@router.get("/contact-submissions")
async def get_contact_submissions():
    """Get all contact submissions (for admin use)"""
    try:
        submissions = await contact_collection.find().sort("created_at", -1).to_list(100)
        
        return [
            {
                "id": str(submission["_id"]),
                "name": submission["name"],
                "email": submission["email"],
                "company": submission.get("company"),
                "phone": submission.get("phone"),
                "service": submission.get("service"),
                "message": submission["message"],
                "created_at": submission["created_at"],
                "status": submission["status"]
            }
            for submission in submissions
        ]
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contact submissions")