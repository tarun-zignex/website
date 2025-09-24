import React, { useState, useEffect } from 'react';
import { Truck, Phone, Mail, MapPin, Linkedin, Globe, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ApiService from '../services/api';
import logo from "./zignex_logo.png"; // import it

export const Footer = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const info = await ApiService.fetchCompanyInfo();
        setCompanyInfo(info);
      } catch (error) {
        console.error('Error fetching company info:', error);
      }
    };

    fetchCompanyInfo();
  }, []);

  // Static contact info
  const contactInfo = {
    phone: "(281) 323-4099",
    email: "hiring@zignex.com"
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
            <div>
               <img src={logo} alt="ZignEx Logo" className="h-9 w-24" />
              </div>
            
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              {companyInfo?.motto || 'Powered by "Your Imagination and Your Need" ™'}
            </p>
            <p className="text-gray-400 text-sm">
              Transforming logistics operations with innovative solutions and operations research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Planning Solutions', href: '/planning' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Services</h3>
            <ul className="space-y-2">
              {[
                'Roll-Off Container Services',
                'Commercial Waste Collection',
                'Residential Collection',
                'Strategic Planning',
                'Route Optimization',
                'Dynamic Routing'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm hover:text-orange-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  {companyInfo?.headquarters || "The Woodlands, TX, USA"}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  ZignEx India Private Limited - Indore, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ZignEx. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};