import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, ArrowRight, Truck, Users, Clock, TrendingUp } from 'lucide-react';
import { servicesData } from '../data/mock';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-200 via-white to-orange-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              Waste Management Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Waste Collection Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Optimize your waste management operations with our specialized solutions for roll-off containers, commercial, and residential collection services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {Object.entries(servicesData).map(([key, service], index) => (
              <div key={key} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <Card className="border-blue-200 bg-blue-50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-blue-800 mb-3">Business Benefits</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-blue-700" />
                          <span className="text-blue-700">Reduce Costs</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-blue-700" />
                          <span className="text-blue-700">Save Time</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-blue-700" />
                          <span className="text-blue-700">Happy Customers</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Truck className="h-4 w-4 text-blue-700" />
                          <span className="text-blue-700">Fleet Efficiency</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button className="bg-blue-700 hover:bg-blue-700 text-white group">
                    Learn More About {service.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-2xl -z-10 blur-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right solution for your specific needs
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Roll-Off</th>
                    <th className="px-6 py-4 text-center font-semibold">Commercial</th>
                    <th className="px-6 py-4 text-center font-semibold">Residential</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    ['Container Tracking', true, true, false],
                    ['Route Optimization', true, true, true],
                    ['Real-time Updates', true, true, true],
                    ['Customer Notifications', true, false, true],
                    ['Multi-stop Planning', false, true, true],
                    ['Service Scheduling', true, true, true],
                    ['Fleet Management', true, true, false],
                    ['Cost Analytics', true, true, false]
                  ].map(([feature, rolloff, commercial, residential], index) => (
                    <tr key={feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
                      <td className="px-6 py-4 text-center">
                        {rolloff ? (
                          <CheckCircle className="h-5 w-5 text-blue-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">−</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {commercial ? (
                          <CheckCircle className="h-5 w-5 text-blue-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">−</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {residential ? (
                          <CheckCircle className="h-5 w-5 text-blue-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">−</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Fleet?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our waste management solutions can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}