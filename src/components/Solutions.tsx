import React from 'react';
import { Building2, Users, Briefcase, GraduationCap, Heart, Shield, Zap, BarChart3 } from 'lucide-react';

const Solutions = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Enterprise',
      description: 'Large-scale deployment for global organizations with advanced security and compliance features.',
      features: ['SSO Integration', 'Advanced Analytics', 'Custom Reporting', 'Dedicated Support'],
      color: 'blue'
    },
    {
      icon: Briefcase,
      title: 'Sales Teams',
      description: 'Optimize sales calls and client meetings with real-time engagement insights and performance analytics.',
      features: ['Deal Intelligence', 'Client Sentiment', 'Performance Tracking', 'CRM Integration'],
      color: 'green'
    },
    {
      icon: Users,
      title: 'HR & Recruiting',
      description: 'Enhance interview processes and team meetings with behavioral analysis and candidate assessment.',
      features: ['Interview Analytics', 'Candidate Scoring', 'Team Dynamics', 'Bias Detection'],
      color: 'purple'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Improve online learning experiences with student engagement monitoring and attention tracking.',
      features: ['Student Engagement', 'Learning Analytics', 'Attention Tracking', 'Progress Reports'],
      color: 'orange'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Support telemedicine with patient monitoring and stress level assessment during consultations.',
      features: ['Patient Monitoring', 'Stress Assessment', 'Compliance Tracking', 'Health Insights'],
      color: 'red'
    },
    {
      icon: Shield,
      title: 'Legal',
      description: 'Enhance legal proceedings and client consultations with emotional intelligence and credibility analysis.',
      features: ['Credibility Analysis', 'Emotional Intelligence', 'Case Insights', 'Client Assessment'],
      color: 'indigo'
    }
  ];

  const useCases = [
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track team performance and meeting effectiveness over time',
      metrics: ['94% accuracy', '50+ metrics', 'Real-time insights']
    },
    {
      icon: Zap,
      title: 'Instant Summaries',
      description: 'AI-generated meeting summaries with key insights and action items',
      metrics: ['5-second generation', 'Multi-language', 'Smart categorization']
    },
    {
      icon: Users,
      title: 'Team Dynamics',
      description: 'Understand team collaboration patterns and communication styles',
      metrics: ['Interaction mapping', 'Influence tracking', 'Collaboration scores']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
      red: 'bg-red-50 text-red-600 border-red-200',
      indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    };
    return colorMap[color] || 'bg-gray-50 text-gray-600 border-gray-200';
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solutions for Every
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Industry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Go-X adapts to your industry's unique needs, providing specialized insights and analytics for better decision-making and team performance.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${getColorClasses(industry.color)} rounded-lg flex items-center justify-center mb-6 border`}>
                <industry.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{industry.title}</h3>
              <p className="text-gray-600 mb-6">{industry.description}</p>
              <ul className="space-y-2">
                {industry.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Key Use Cases</h3>
            <p className="text-lg text-gray-600">
              Discover how Go-X transforms different aspects of your virtual meetings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h4>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Industry?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how Go-X can be customized for your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;