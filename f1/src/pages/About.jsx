import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Award, Users, Globe, TrendingUp, Brain, Lightbulb, Target, Heart } from 'lucide-react';
import { companyInfo, leadership } from '../data/mock';

export default function About() {
  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "Leveraging cutting-edge technology, and operations research to solve complex logistics challenges."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Our success depends on the collective creative energy, intelligence, and contributions from all team members."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Continuously improving and delivering exceptional business value for forward-thinking enterprises."
    },
    {
      icon: Heart,
      title: "Diversity & Inclusion",
      description: "Fostering a culture of diversity, equity and inclusion among our team members and communities worldwide."
    }
  ];

  const timeline = [
    {
      year: "1990s",
      title: "Foundation of Expertise",
      description: "Dr. Surya Sahoo begins 30+ years journey in decision science and operations research"
    },
    {
      year: "2004",
      title: "Industry Recognition",
      description: "Franz Edelman Award recognition for outstanding achievements in operations research"
    },
    {
      year: "2010s",
      title: "Enterprise Solutions",
      description: "Developed solutions for top-tier firms including Waste Management, FedEx, and major environmental service companies"
    },
    {
      year: "Today",
      title: "ZignEx Innovation",
      description: "Leading the industry with innovative logistics solutions and digital transformation"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-200 via-white to-orange-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              About ZignEx
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {companyInfo.tagline}
            </h1>
            <p className="text-xl text-blue-700 font-medium mb-4">
              {companyInfo.motto}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {companyInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-200 to-blue-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-700 rounded-xl mr-4">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {companyInfo.vision}
                </p>
              </CardContent>
            </Card>

            

            {/* Mission */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-orange-500 rounded-xl mr-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide Enterprise Business Values by designing and developing products and solutions that are critical for the highly competitive business landscape of the 21st century and beyond, powered by innovation and client needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Industry experts with proven track record in logistics and operations research
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="aspect-square lg:aspect-auto lg:h-full relative">
                    <img 
                      src={leadership.ceo.image} 
                      alt={leadership.ceo.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {leadership.ceo.name}
                      </h3>
                      <p className="text-lg text-blue-700 font-medium mb-4">
                        {leadership.ceo.title}
                      </p>
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 mb-4">
                        <Award className="h-3 w-3 mr-1" />
                        {leadership.ceo.credentials}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {leadership.ceo.bio}
                    </p>

                    {/* Achievements */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-2xl font-bold text-blue-700">30+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-700">2004</div>
                        <div className="text-sm text-gray-600">Franz Edelman Award</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence, innovation, and inclusive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center group">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Three decades of innovation and excellence in logistics solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  {/* Timeline marker */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-blue-200"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200 w-fit">
                          {item.year}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-gray-600">
              Serving clients across continents with local expertise and global reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* USA Headquarters */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl mb-6">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  USA Headquarters
                </h3>
                <p className="text-lg text-blue-700 mb-3">
                  {companyInfo.headquarters}
                </p>
                <p className="text-gray-600 text-sm">
                  Strategic operations, R&D, and client services for North American markets
                </p>
              </CardContent>
            </Card>

            {/* India Operations */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  India Development Center
                </h3>
                <p className="text-lg text-orange-600 mb-3">
                  Indore, India
                </p>
                <p className="text-gray-600 text-sm">
                  Software development, and technical support services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of our journey to transform logistics operations worldwide through innovation, expertise, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold">
              Explore Careers
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}