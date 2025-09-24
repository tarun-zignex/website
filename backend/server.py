from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from routes import router as api_routes
from contextlib import asynccontextmanager
from database import seed_initial_data

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

client = None
db = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifespan handler for startup and shutdown events"""
    global client, db
    # Startup logic
    logger.info("🚀 Starting ZignEx API server...")

    try:
        mongo_url = os.environ["MONGO_URL"]
        client = AsyncIOMotorClient(mongo_url)
        db = client[os.environ["DB_NAME"]]

        await seed_initial_data()
        logger.info("✅ Database initialization completed")
    except Exception as e:
        logger.error(f"❌ Database initialization failed: {str(e)}")

    yield  # app is now running

    # Shutdown logic
    logger.info("🛑 Shutting down ZignEx API server...")
    if client:
        client.close()



# Create the main app without a prefix
app = FastAPI(title="ZignEx API", description="Backend API for ZignEx logistics solutions",lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Add health check endpoint
@api_router.get("/")
async def root():
    return {"message": "ZignEx API is running", "status": "healthy"}

# Include all API routes
api_router.include_router(api_routes)

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

