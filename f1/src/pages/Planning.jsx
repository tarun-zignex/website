import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, ArrowRight, Brain, Map, BarChart3, Clock, Zap } from 'lucide-react';
import { planningServices } from '../data/mock';

export default function Planning() {
  const processSteps = [
    {
      step: 1,
      title: "Strategic Planning",
      description: "Network optimization and territory design for maximum efficiency",
      icon: Brain
    },
    {
      step: 2,
      title: "Route Planning", 
      description: "Advanced algorithms create optimal routes and schedules",
      icon: Map
    },
    {
      step: 3,
      title: "Route Execution",
      description: "Real-time monitoring and dynamic routing adjustments",
      icon: Zap
    },
    {
      step: 4,
      title: "Post Execution",
      description: "Analytics and insights for continuous improvement",
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-200 via-white to-orange-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              Advanced Planning Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Logistics Planning Ecosystem
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From strategic network design to real-time execution, our comprehensive planning solutions optimize every aspect of your logistics operations using advanced technologies and operations research.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 4-Stage Planning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete end-to-end solution that transforms your logistics from planning to execution and continuous optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <Card key={item.step} className="relative border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-6">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-xl mb-4 mt-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Services Detail */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {Object.entries(planningServices).map(([key, service], index) => (
              <div key={key} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
                      Step {index + 1}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Core Capabilities:</h3>
                    <div className="space-y-3">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology highlights */}
                  <Card className="border-blue-200 bg-blue-50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-blue-800 mb-3">Powered By</h4>
                      <div className="flex flex-wrap gap-2">
                        {[ 'Operations Research', 'Real-time Analytics', 'Predictive Modeling'].map((tech) => (
                          <Badge key={tech} className="bg-blue-100 text-blue-700 border-blue-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Button className="bg-blue-700 hover:bg-blue-700 text-white group">
                    Explore {service.title}
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
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-2xl"></div>
                    {/* Floating badge */}
                    {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-blue-700">AI-Powered</span>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-600">
              Our planning solutions deliver tangible results across all operational metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                metric: "25%",
                title: "Cost Reduction",
                description: "Average operational cost savings through optimized routing and resource allocation"
              },
              {
                metric: "40%",
                title: "Planning Time Saved",
                description: "Reduction in manual planning time with automated optimization algorithms"
              },
              {
                metric: "98%",
                title: "On-Time Performance",
                description: "Improved service reliability with predictive routing and real-time monitoring"
              },
              {
                metric: "15%",
                title: "Fuel Savings", 
                description: "Reduced fuel consumption through intelligent route optimization"
              },
              {
                metric: "30%",
                title: "Faster Response",
                description: "Quicker adaptation to service changes and emergency requests"
              },
              {
                metric: "50%",
                title: "Better Visibility",
                description: "Enhanced operational transparency with real-time tracking and analytics"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-blue-700 mb-2">
                    {benefit.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
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
            Transform Your Planning Process Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how our innovative planning solutions can revolutionize your logistics operations and drive measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold">
              Schedule Planning Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}