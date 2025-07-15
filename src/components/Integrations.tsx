import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      name: 'Zoom',
      description: 'Seamless integration with Zoom meetings',
      logo: '🎥',
      status: 'Available'
    },
    {
      name: 'Microsoft Teams',
      description: 'Full compatibility with Teams platform',
      logo: '💬',
      status: 'Available'
    },
    {
      name: 'Google Meet',
      description: 'Works perfectly with Google Meet',
      logo: '📹',
      status: 'Available'
    },
    {
      name: 'Slack',
      description: 'Get insights delivered to Slack',
      logo: '💬',
      status: 'Coming Soon'
    }
  ];

  return (
    <section id="integrations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Works with Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Favorite Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Go-X integrates seamlessly with popular video conferencing platforms without requiring any additional software or plugins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{integration.logo}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                integration.status === 'Available' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-yellow-100 text-yellow-600'
              }`}>
                {integration.status === 'Available' && <CheckCircle className="w-3 h-3 mr-1" />}
                {integration.status}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Meetings?</h3>
          <p className="text-xl mb-8 opacity-90">
            Start getting deeper insights into your team's virtual interactions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;