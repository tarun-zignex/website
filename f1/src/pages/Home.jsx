import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, CheckCircle, Star, TrendingUp, Shield, Zap, Users, Loader2 } from 'lucide-react';
// import { Link } from 'react-router-dom';
import ApiService from '../services/api';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState({
    companyInfo: null,
    services: null,
    testimonials: null,
    stats: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const [companyInfo, services, testimonials, stats] = const 
        const planningServices = {
          strategic: {
            title: "Strategic Planning",
            description: "Network-wide optimization for depot locations, territory design, and disposal strategies.",
            image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86",
            capabilities: [
              "Network Cost Optimization",
              "Depot & Transfer Station Location",
              "Territory Design & Service Areas",
              "Disposal Strategy Optimization"
            ]
          },
          route: {
            title: "Route Planning",
            description: "Advanced algorithms for optimal route design, sequencing, and vehicle assignments.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            capabilities: [
              "Cost-Based Route Optimization",
              "Time Window Management",
              "Multi-Week Service Scheduling",
              "Container Upsizing Recommendations"
            ]
          },
          execution: {
            title: "Route Execution",
            description: "Real-time routing with dynamic adjustments and comprehensive monitoring systems.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            capabilities: [
              "Dynamic Routing & Auto Insertion",
              "Real-Time Route Completion Tracking",
              "Driver Route Monitoring",
              "Exception Handling & Reconciliation"
            ]
          },
          post: {
            title: "Post Execution Analytics",
            description: "Comprehensive analytics and insights for continuous operational improvement.",
            image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b",
            capabilities: [
              "Route Performance Analysis",
              "Video/Photo Analytics for Proof of Service",
              "Contamination Detection",
              "Operational Efficiency Metrics"
            ]
          }
        };
        const heroData = {
          title: "Advanced Logistics Solutions for the Modern Enterprise",
          subtitle: "Powered by, Operations Research, and Data Science",
          description: "Transform your logistics operations with our cutting-edge route optimization, strategic planning, and dynamic routing solutions. Built specifically for the waste management industry.",
          cta: "Discover Our Solutions",
          backgroundImage: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        };
        const  companyInfo = {
          name: "ZignEx",
          tagline: "Converging and Evolving...",
          motto: "Powered by \"Your Imagination and Your Need\" ™",
          headquarters: "The Woodlands, TX, USA",
          description: "ZignEx is a forward-looking logistics software company focused on providing Enterprise Business Values by designing and developing products and solutions that are critical for the highly competitive business landscape of the 21st century and beyond.",
          vision: "To use data analytics to gain business intelligence, optimize business processes, continuously improve customer experience, and create exceptional business value for forward-thinking enterprises.",
          technologies: ["Operations Research", "Advanced Analytics", "Data Science"]
        };
        const services = [
          {
            "key": "rolloff",
            "title": "Roll-Off Container Services",
            "description": "Optimize your roll-off operations with intelligent route planning and container management systems.",
            "image": "https://images.unsplash.com/photo-1651884533118-cc8e1a8b35e5",
            "features": [
              "Container tracking and management",
              "Optimal pickup and delivery routing",
              "Real-time status updates",
              "Customer notification systems"
            ]
          },
          {
            "key": "commercial",
            "title": "Commercial Waste Collection",
            "description": "Streamline commercial waste collection with advanced route optimization and fleet management.",
            "image": "https://images.unsplash.com/photo-1621859191129-6bc88cf02966",
            "features": [
              "Multi-stop route optimization",
              "Fleet capacity management",
              "Service scheduling automation",
              "Cost-per-serve analytics"
            ]
          },
          {
            "key": "residential",
            "title": "Residential Collection Services",
            "description": "Enhance residential waste collection efficiency with smart routing and customer service tools.",
            "image": "https://images.unsplash.com/photo-1687367445499-2a3ec7025aed",
            "features": [
              "Neighborhood route optimization",
              "Service day management",
              "ETA notifications to customers",
              "Pickup confirmation tracking"
            ]
          }
        ]
        const testimonials = [
          {
            id: 1,
            company: "Major Waste Management Corp",
            quote: "ZignEx transformed our route optimization, reducing operational costs by 25% while improving customer satisfaction.",
            author: "Operations Director",
            rating: 5
          },
          {
            id: 2,
            company: "Regional Logistics Provider",
            quote: "The strategic planning module helped us optimize our entire network, saving millions in infrastructure costs.",
            author: "VP of Operations",
            rating: 5
          },
          {
            id: 3,
            company: "Environmental Services Inc",
            quote: "Real-time route execution monitoring has revolutionized our dispatch operations and customer communication.",
            author: "Fleet Manager",
            rating: 5
          }
        ];
        const leadership = {
          ceo: {
            name: "Dr. Surya N Sahoo, Ph.D., P.E.",
            title: "President & CEO",
            image: "https://www.zignex.com/files/surya-sahoo-8-3.png",
            bio: "Dr. Sahoo has over 30 years of experience in the area of decision science, operations research and enterprise Digital transformation in supporting operational and strategic vision, for top-tier firms including Waste Management, FedEx, IIT, ESRI, and top ten environmental service companies in North America.",
            credentials: "Franz Edelman Laureate (2004), P.E., Ph.D. in Civil Engineering"
          }
        };
        const stats = [
          { label: "Years of Experience", value: "30+" },
          { label: "Cost Reduction", value: "25%" },
          { label: "Client Satisfaction", value: "98%" },
          { label: "Routes Optimized", value: "10,000+" }
        ];
        const contactInfo = {
          phone: "(281) 323-4099",
          email: "hiring@zignex.com",
          address: "The Woodlands, TX, USA",
          hours: "Monday - Friday: 9:00 AM - 6:00 PM CST"
        };

        setData({
          companyInfo,
          services,
          testimonials,
          stats
        });
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load page data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-700 mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const { companyInfo, services, testimonials, stats } = data;

  // Hero data derived from companyInfo
  const heroData = {
    title: "Advanced Logistics Solutions for the Modern Enterprise",
    subtitle: "Powered by, Operations Research, and Data Science", 
    description: companyInfo?.description || "Transform your logistics operations with our cutting-edge route optimization, strategic planning, and dynamic routing solutions.",
    cta: "Discover Our Solutions"
  };

 
    
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-200 via-white to-orange-100 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23059669\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">
                  {companyInfo?.tagline}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {heroData.title}
                </h1>
                <p className="text-xl text-blue-700 font-medium">
                  {heroData.subtitle}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {heroData.description}
                </p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {companyInfo?.technologies?.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-blue-200 text-blue-700">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4"   >
                <Button size="lg" className="bg-blue-700 hover:bg-blue-700 text-white group"   onClick={() => navigate("/planning")}>
                  {heroData.cta}
              
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50"   onClick={() => navigate("/contact")}>
                  Schedule Demo
                </Button>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats?.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-700 mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Waste Management Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From roll-off containers to residential collection, optimize every aspect of your waste management operations with our innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services && Object.entries(services).map(([key, service]) => (
              <Card key={key} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    {service.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group border-blue-200 text-blue-700 hover:bg-blue-50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ZignEx?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built by industry experts with 30+ years of experience in logistics and operations research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "25% Cost Reduction",
                description: "Proven track record of reducing operational costs through intelligent route optimization and resource allocation."
              },
              {
                icon: Shield,
                title: "Industry Expertise",
                description: "30+ years of experience with top-tier firms including Waste Management, FedEx, and leading environmental service companies."
              },
              {
                icon: Zap,
                title: "Real-Time Optimization",
                description: "Dynamic routing capabilities that adapt to real-world conditions and unexpected changes throughout the day."
              },
              {
                icon: Users,
                title: "Easy Integration",
                description: "Designed from the ground up for the waste industry. No prior GIS knowledge required for end users."
              },
              {
                icon: CheckCircle,
                title: "Comprehensive Analytics",
                description: "Detailed reporting and analytics to measure performance and identify continuous improvement opportunities."
              },
              {
                icon: Star,
                title: "Customer Satisfaction",
                description: "ETA notifications, proof of service, and enhanced customer communication capabilities."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-xl mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See how leading companies are transforming their operations with ZignEx.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-blue-700">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join industry leaders who are already saving costs and improving efficiency with ZignEx solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}