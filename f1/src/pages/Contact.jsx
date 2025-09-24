import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Globe,
  Users,
  MessageSquare,
  Calendar,
  Truck,
  Loader2
} from 'lucide-react';
import ApiService from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const info = await ApiService.fetchCompanyInfo();
        setCompanyInfo(info);
      } catch (error) {
        console.error('Error fetching company info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyInfo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await ApiService.submitContactForm(formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Static contact info
  const contactInfo = {
    phone: "(281) 323-4099",
    email: "hiring@zignex.com",
    address: "The Woodlands, TX, USA",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM CST"
  };

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

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: contactInfo.phone,
      link: `tel:${contactInfo.phone}`,
      description: "Call us directly for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email", 
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      value: companyInfo.headquarters,
      description: "Visit our main office for in-person meetings"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: contactInfo.hours,
      description: "Monday through Friday, Central Standard Time"
    }
  ];

  const serviceOptions = [
    "Roll-Off Container Services",
    "Commercial Waste Collection", 
    "Residential Collection Services",
    "Strategic Planning Solutions",
    "Route Planning & Optimization",
    "Route Execution & Monitoring",
    "Post Execution Analytics",
    "Custom Enterprise Solution",
    "General Inquiry"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-200 via-white to-orange-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              Contact ZignEx
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Talk About Your Logistics Needs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your operations? Our team of logistics experts is here to help you optimize your waste management and logistics processes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center group">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    <method.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  {method.link ? (
                    <a 
                      href={method.link}
                      className="text-blue-700 hover:text-blue-700 font-medium mb-2 block transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-blue-700 font-medium mb-2">
                      {method.value}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for contacting us. We'll respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="border-gray-300"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="border-gray-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                            className="border-gray-300"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className="border-gray-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your logistics challenges or questions..."
                          rows={4}
                          className="border-gray-300"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-blue-700 hover:bg-blue-700 text-white group"
                        size="lg"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900">
                    <MessageSquare className="h-5 w-5 mr-2 text-blue-700" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button className="w-full justify-start bg-blue-700 hover:bg-blue-700 text-white">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule a Demo
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-blue-200 text-blue-700 hover:bg-blue-50">
                      <Phone className="h-4 w-4 mr-2" />
                      Request Callback
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-gray-300">
                      <Truck className="h-4 w-4 mr-2" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Global Offices */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900">
                    <Globe className="h-5 w-5 mr-2 text-blue-700" />
                    Our Global Presence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-1">USA Headquarters</h4>
                    <p className="text-sm text-blue-700">{companyInfo?.headquarters || "The Woodlands, TX, USA"}</p>
                    <p className="text-xs text-blue-700 mt-1">Primary operations & client services</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-medium text-orange-800 mb-1">India Development Center</h4>
                    <p className="text-sm text-orange-700">ZignEx India Private Limited - Indore, India</p>
                    <p className="text-xs text-orange-600 mt-1">Software development & technical support</p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900">
                    <Users className="h-5 w-5 mr-2 text-blue-700" />
                    Frequently Asked
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900 mb-1">How quickly can we get started?</p>
                    <p className="text-gray-600">Most implementations begin within 2-4 weeks of contract signing.</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900 mb-1">Do you offer custom solutions?</p>
                    <p className="text-gray-600">Yes, we specialize in tailored logistics solutions for your specific needs.</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900 mb-1">What's the typical ROI timeline?</p>
                    <p className="text-gray-600">Most clients see measurable cost savings within 3-6 months.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let inefficient logistics hold your business back. Contact us today and discover how ZignEx can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold">
              <Phone className="h-4 w-4 mr-2" />
              Call {contactInfo.phone}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}