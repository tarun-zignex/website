import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Truck, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "./zignex_logo.png"; // import it

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Planning Solutions', href: '/planning' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div>
               <img src={logo} alt="ZignEx Logo" className="h-9 w-24" />
              {/* <p className="text-[0.5rem] text-blue-700 font-medium">Powered By "Your Imagination and Your Need" </p> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-blue-700 ${
                  isActive(item.href) 
                    ? 'text-blue-700' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:(281)323-4099" className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">(281) 323-4099</span>
            </a>
            <Button className="bg-blue-700 hover:bg-emerald-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="p-2 bg-blue-700 rounded-lg">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-gray-900">ZignEx</span>
                    <p className="text-xs text-blue-700 font-medium">Logistics Solutions</p>
                  </div>
                </Link>
                
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium px-4 py-2 rounded-md transition-colors ${
                        isActive(item.href)
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="pt-4 border-t border-gray-200">
                  <a href="tel:(281)323-4099" className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 transition-colors mb-4">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">(281) 323-4099</span>
                  </a>
                  <Button className="w-full bg-blue-700 hover:bg-emerald-700 text-white">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};