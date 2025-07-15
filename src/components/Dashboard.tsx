import React from 'react';
import { TrendingUp, Users, Heart, Brain, Activity } from 'lucide-react';

const Dashboard = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real-Time Meeting
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor participant engagement, physiological responses, and meeting dynamics in real-time with our advanced analytics dashboard.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Live Meeting Analysis</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600">Live</span>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6 h-64 relative overflow-hidden mb-6">
                <img 
                  src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop" 
                  alt="Team video conference" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded">
                  <p className="text-sm font-medium">Team Meeting</p>
                  <p className="text-xs opacity-90">4 participants • 23:45 duration</p>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                  REC
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Engagement Score</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-700">89%</div>
                  <div className="text-xs text-blue-600">+12% from last meeting</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">Attention Level</span>
                  </div>
                  <div className="text-2xl font-bold text-green-700">High</div>
                  <div className="text-xs text-green-600">Consistent focus</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Physiological Metrics</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-red-600">Heart Rate</span>
                      <Heart className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="text-xl font-bold text-red-700">72 BPM</div>
                    <div className="w-full bg-red-200 rounded-full h-2 mt-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-purple-600">Stress Level</span>
                      <Activity className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="text-xl font-bold text-purple-700">Low</div>
                    <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-orange-600">Respiration</span>
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                    </div>
                    <div className="text-xl font-bold text-orange-700">Normal</div>
                    <div className="w-full bg-orange-200 rounded-full h-2 mt-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Insights</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2"></div>
                      High engagement during product demo
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2"></div>
                      Positive sentiment in Q&A section
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 mr-2"></div>
                      Brief attention drop at 18:30
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;