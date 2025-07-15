import React from 'react';
import { Activity, Brain, BarChart3, Clock, Shield, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Non-Verbal Analysis',
      description: 'Advanced AI analyzes facial expressions, body language, and vocal patterns to provide deeper insights into participant engagement and emotional states.',
      color: 'blue'
    },
    {
      icon: Activity,
      title: 'Physiological Monitoring',
      description: 'Real-time tracking of heart rate, stress levels, and respiration to understand participant wellness and meeting effectiveness.',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Instant Summaries',
      description: 'AI-generated meeting summaries with key insights, action items, and sentiment analysis delivered immediately after each session.',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Real-Time Insights',
      description: 'Live analytics dashboard showing participant engagement, emotional states, and meeting dynamics as they happen.',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and privacy controls ensure your meeting data remains secure and compliant with global standards.',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Seamless Integration',
      description: 'Works seamlessly with Zoom, Microsoft Teams, and Google Meet without requiring additional software or plugins.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600',
      red: 'bg-red-50 text-red-600',
      indigo: 'bg-indigo-50 text-indigo-600'
    };
    return colorMap[color] || 'bg-gray-50 text-gray-600';
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modern Teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Go-X combines advanced AI with physiological monitoring to provide unprecedented insights into your virtual meetings and team dynamics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;