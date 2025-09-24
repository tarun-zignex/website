from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from routes.router import router as api_routes
from contextlib import asynccontextmanager
from database import seed_initial_data

# Load environment variables
ROOT_DIR = Path(__file__).parent.parent
load_dotenv(ROOT_DIR / '.env')

# Globals
client = None
db = None

# Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    global client, db
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

    logger.info("🛑 Shutting down ZignEx API server...")
    if client:
        client.close()

# Create FastAPI app
app = FastAPI(
    title="ZignEx API",
    description="Backend API for ZignEx logistics solutions",
    lifespan=lifespan
)

# Router with /api prefix
api_router = APIRouter(prefix="/api")

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "ZignEx API is running", "status": "healthy"}

# Include your routes
api_router.include_router(api_routes)
app.include_router(api_router)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],  # Change to your frontend domain in production
    allow_methods=["*"],
    allow_headers=["*"],
)
