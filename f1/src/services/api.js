// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKEND_URL = 'https://backend-blond-gamma-18.vercel.app';
const API_BASE = `${BACKEND_URL}/api`;

// API service functions
class ApiService {
  static async request(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Company Information
  static async fetchCompanyInfo() {
    return {
      "name":"ZignEx",
        "tagline":"Converging and Evolving...",
        "motto":'Powered by "Your Imagination and Your Need" ™',
        "headquarters":"The Woodlands, TX, USA",
        "description":"ZignEx is a forward-looking logistics software company focused on providing Enterprise Business Values by designing and developing products and solutions that are critical for the highly competitive business landscape of the 21st century and beyond.",
        "vision":"To use data analytics to gain business intelligence, optimize business processes, continuously improve customer experience, and create exceptional business value for forward-thinking enterprises.",
        "technologies":["Operations Research", "Advanced Analytics", "Data Science"]
    }
  }

  // Services
  static async fetchServices() {
    return this.request('/services');
  }

  // Planning Services
  static async fetchPlanningServices() {
    return this.request('/planning-services');
  }

  // Testimonials
  static async fetchTestimonials() {
    return this.request('/testimonials');
  }

  // Leadership
  static async fetchLeadership() {
    return this.request('/leadership');
  }

  // Statistics
  static async fetchStats() {
    return this.request('/stats');
  }

  // Contact Form Submission
  static async submitContactForm(formData) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Get Contact Submissions (admin)
  static async fetchContactSubmissions() {
    return this.request('/contact-submissions');
  }
}

export default ApiService;