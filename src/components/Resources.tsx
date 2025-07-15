import React from 'react';
import { BookOpen, Video, FileText, Users, Download, ExternalLink, Calendar, Lightbulb } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      color: 'blue',
      items: [
        { title: 'Getting Started Guide', type: 'Guide', readTime: '5 min' },
        { title: 'API Reference', type: 'Documentation', readTime: '15 min' },
        { title: 'Integration Tutorials', type: 'Tutorial', readTime: '10 min' },
        { title: 'Best Practices', type: 'Guide', readTime: '8 min' }
      ]
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and demos',
      color: 'purple',
      items: [
        { title: 'Platform Overview', type: 'Demo', readTime: '12 min' },
        { title: 'Setting Up Your First Meeting', type: 'Tutorial', readTime: '8 min' },
        { title: 'Understanding Analytics', type: 'Tutorial', readTime: '15 min' },
        { title: 'Advanced Features', type: 'Tutorial', readTime: '20 min' }
      ]
    },
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Real-world success stories and use cases',
      color: 'green',
      items: [
        { title: 'TechCorp: 40% Meeting Efficiency Boost', type: 'Case Study', readTime: '6 min' },
        { title: 'HealthSystem: Improved Patient Care', type: 'Case Study', readTime: '8 min' },
        { title: 'EduInstitute: Enhanced Learning', type: 'Case Study', readTime: '7 min' },
        { title: 'SalesTeam: 25% Revenue Increase', type: 'Case Study', readTime: '5 min' }
      ]
    },
    {
      icon: Lightbulb,
      title: 'Best Practices',
      description: 'Tips and strategies for optimal results',
      color: 'orange',
      items: [
        { title: 'Maximizing Meeting Engagement', type: 'Guide', readTime: '10 min' },
        { title: 'Interpreting Physiological Data', type: 'Guide', readTime: '12 min' },
        { title: 'Team Performance Optimization', type: 'Guide', readTime: '15 min' },
        { title: 'Privacy and Compliance', type: 'Guide', readTime: '8 min' }
      ]
    }
  ];

  const webinars = [
    {
      title: 'The Future of Virtual Meeting Analytics',
      date: 'March 15, 2024',
      time: '2:00 PM EST',
      speaker: 'Dr. Sarah Chen, AI Research Director',
      description: 'Explore the latest advancements in AI-powered meeting insights and what\'s coming next.',
      status: 'upcoming'
    },
    {
      title: 'Implementing Go-X in Enterprise Environments',
      date: 'March 8, 2024',
      time: '1:00 PM EST',
      speaker: 'Michael Rodriguez, Solutions Architect',
      description: 'Learn best practices for deploying Go-X across large organizations.',
      status: 'recorded'
    },
    {
      title: 'Physiological Monitoring: Science and Applications',
      date: 'February 28, 2024',
      time: '3:00 PM EST',
      speaker: 'Dr. Emily Watson, Behavioral Scientist',
      description: 'Deep dive into the science behind physiological monitoring in virtual meetings.',
      status: 'recorded'
    }
  ];

  const downloads = [
    {
      title: 'Go-X Implementation Checklist',
      description: 'Step-by-step checklist for successful Go-X deployment',
      type: 'PDF',
      size: '2.1 MB'
    },
    {
      title: 'ROI Calculator Template',
      description: 'Calculate the return on investment for your Go-X implementation',
      type: 'Excel',
      size: '1.8 MB'
    },
    {
      title: 'Meeting Analytics Report Template',
      description: 'Professional template for presenting meeting insights to stakeholders',
      type: 'PowerPoint',
      size: '3.2 MB'
    },
    {
      title: 'Privacy and Security Whitepaper',
      description: 'Comprehensive overview of Go-X security measures and compliance',
      type: 'PDF',
      size: '4.5 MB'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200'
    };
    return colorMap[color] || 'bg-gray-50 text-gray-600 border-gray-200';
  };

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Resources &
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Learning Center</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to get the most out of Go-X. From quick start guides to advanced tutorials and case studies.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className={`w-12 h-12 ${getColorClasses(category.color)} rounded-lg flex items-center justify-center mb-4 border`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
              <div className="space-y-2">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 hover:text-blue-600 cursor-pointer">{item.title}</span>
                    <span className="text-gray-400">{item.readTime}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Webinars Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Webinars & Events</h3>
              <p className="text-gray-600">Join our experts for live sessions and recorded presentations</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Events
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    webinar.status === 'upcoming' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                  </span>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{webinar.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{webinar.description}</p>
                <div className="text-sm text-gray-500 mb-3">
                  <div>{webinar.date} • {webinar.time}</div>
                  <div>Speaker: {webinar.speaker}</div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                  {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Downloads & Templates</h3>
            <p className="text-gray-600">Ready-to-use resources to accelerate your Go-X implementation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {downloads.map((download, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{download.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{download.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{download.type} • {download.size}</span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h3>
          <p className="text-lg text-gray-600 mb-8">
            Connect with other Go-X users, share insights, and get help from our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              Join Community Forum
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;