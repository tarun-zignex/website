from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os
from pathlib import Path
from models import (
    CompanyInfo, Service, PlanningService, 
    Testimonial, Leadership, Statistic
)

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Database collections
contact_collection = db.contact_submissions
company_collection = db.company_info
services_collection = db.services
planning_services_collection = db.planning_services
testimonials_collection = db.testimonials
leadership_collection = db.leadership
statistics_collection = db.statistics

async def seed_initial_data():
    """Seed the database with initial data from mock.js equivalent"""
    
    # Check if data already exists
    existing_company = await company_collection.find_one()
    if existing_company:
        return  # Data already seeded
    
    # Company Info
    company_info = CompanyInfo(
        name="ZignEx",
        tagline="Converging and Evolving...",
        motto='Powered by "Your Imagination and Your Need" ™',
        headquarters="The Woodlands, TX, USA",
        description="ZignEx is a forward-looking logistics software company focused on providing Enterprise Business Values by designing and developing products and solutions that are critical for the highly competitive business landscape of the 21st century and beyond.",
        vision="To use data analytics to gain business intelligence, optimize business processes, continuously improve customer experience, and create exceptional business value for forward-thinking enterprises.",
        technologies=["Operations Research", "Advanced Analytics", "Data Science"]
    )
    await company_collection.insert_one(company_info.dict())
    
    # Services
    services = [
        Service(
            key="rolloff",
            title="Roll-Off Container Services",
            description="Optimize your roll-off operations with intelligent route planning and container management systems.",
            image="https://images.unsplash.com/photo-1651884533118-cc8e1a8b35e5",
            features=[
                "Container tracking and management",
                "Optimal pickup and delivery routing",
                "Real-time status updates",
                "Customer notification systems"
            ]
        ),
        Service(
            key="commercial",
            title="Commercial Waste Collection",
            description="Streamline commercial waste collection with advanced route optimization and fleet management.",
            image="https://images.unsplash.com/photo-1621859191129-6bc88cf02966",
            features=[
                "Multi-stop route optimization",
                "Fleet capacity management", 
                "Service scheduling automation",
                "Cost-per-serve analytics"
            ]
        ),
        Service(
            key="residential",
            title="Residential Collection Services",
            description="Enhance residential waste collection efficiency with smart routing and customer service tools.",
            image="https://images.unsplash.com/photo-1687367445499-2a3ec7025aed",
            features=[
                "Neighborhood route optimization",
                "Service day management",
                "ETA notifications to customers",
                "Pickup confirmation tracking"
            ]
        )
    ]
    for service in services:
        await services_collection.insert_one(service.dict())
    
    # Planning Services
    planning_services = [
        PlanningService(
            key="strategic",
            title="Strategic Planning",
            description="Network-wide optimization for depot locations, territory design, and disposal strategies.",
            image="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86",
            capabilities=[
                "Network Cost Optimization",
                "Depot & Transfer Station Location",
                "Territory Design & Service Areas",
                "Disposal Strategy Optimization"
            ]
        ),
        PlanningService(
            key="route",
            title="Route Planning",
            description="Advanced algorithms for optimal route design, sequencing, and vehicle assignments.",
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            capabilities=[
                "Cost-Based Route Optimization",
                "Time Window Management",
                "Multi-Week Service Scheduling",
                "Container Upsizing Recommendations"
            ]
        ),
        PlanningService(
            key="execution",
            title="Route Execution",
            description="Real-time routing with dynamic adjustments and comprehensive monitoring systems.",
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            capabilities=[
                "Dynamic Routing & Auto Insertion",
                "Real-Time Route Completion Tracking",
                "Driver Route Monitoring",
                "Exception Handling & Reconciliation"
            ]
        ),
        PlanningService(
            key="post",
            title="Post Execution Analytics",
            description="Comprehensive analytics and insights for continuous operational improvement.",
            image="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b",
            capabilities=[
                "Route Performance Analysis",
                "Video/Photo Analytics for Proof of Service",
                "Contamination Detection",
                "Operational Efficiency Metrics"
            ]
        )
    ]
    for planning_service in planning_services:
        await planning_services_collection.insert_one(planning_service.dict())
    
    # Testimonials
    testimonials = [
        Testimonial(
            company="Major Waste Management Corp",
            quote="ZignEx transformed our route optimization, reducing operational costs by 25% while improving customer satisfaction.",
            author="Operations Director",
            rating=5,
            order=1
        ),
        Testimonial(
            company="Regional Logistics Provider",
            quote="The strategic planning module helped us optimize our entire network, saving millions in infrastructure costs.",
            author="VP of Operations",
            rating=5,
            order=2
        ),
        Testimonial(
            company="Environmental Services Inc",
            quote="Real-time route execution monitoring has revolutionized our dispatch operations and customer communication.",
            author="Fleet Manager",
            rating=5,
            order=3
        )
    ]
    for testimonial in testimonials:
        await testimonials_collection.insert_one(testimonial.dict())
    
    # Leadership
    leadership = Leadership(
        name="Dr. Surya N Sahoo, Ph.D., P.E.",
        title="President & CEO",
        image="https://www.zignex.com/files/surya-sahoo-8-3.png",
        bio="Dr. Sahoo has over 30 years of experience in the area of decision science, operations research and enterprise Digital transformation in supporting operational and strategic vision, for top-tier firms including Waste Management, FedEx, IIT, ESRI, and top ten environmental service companies in North America.",
        credentials="Franz Edelman Laureate (2004), P.E., Ph.D. in Civil Engineering"
    )
    await leadership_collection.insert_one(leadership.dict())
    
    # Statistics
    statistics = [
        Statistic(label="Years of Experience", value="30+", order=1),
        Statistic(label="Cost Reduction", value="25%", order=2),
        Statistic(label="Client Satisfaction", value="98%", order=3),
        Statistic(label="Routes Optimized", value="10,000+", order=4)
    ]
    for stat in statistics:
        await statistics_collection.insert_one(stat.dict())
    
    print("✅ Database seeded with initial data successfully")

# Database helper functions
async def get_company_info():
    company = await company_collection.find_one()
    if company:
        return CompanyInfo(**company)
    return None

async def get_services():
    services = await services_collection.find({"is_active": True}).to_list(100)
    return [Service(**service) for service in services]

async def get_planning_services():
    services = await planning_services_collection.find({"is_active": True}).to_list(100)
    return [PlanningService(**service) for service in services]

async def get_testimonials():
    testimonials = await testimonials_collection.find({"is_active": True}).sort("order", 1).to_list(100)
    return [Testimonial(**testimonial) for testimonial in testimonials]

async def get_leadership():
    leader = await leadership_collection.find_one({"is_active": True})
    if leader:
        return Leadership(**leader)
    return None

async def get_statistics():
    stats = await statistics_collection.find({"is_active": True}).sort("order", 1).to_list(100)
    return [Statistic(**stat) for stat in stats]