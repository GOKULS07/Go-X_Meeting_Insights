import React from 'react';
import { Play, ArrowRight, Activity, Brain, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                <Activity className="w-4 h-4 mr-2" />
                AI-Powered Meeting Intelligence
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Virtual Meetings</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Go-X analyzes non-verbal cues, generates instant summaries, and tracks physiological data to provide unprecedented insights into your team's virtual interactions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.2%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Global Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Real-time</div>
                <div className="text-sm text-gray-600">Analysis</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-500">Meeting Analysis</div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4 h-32 relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
                    alt="Video conference meeting" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    Live Meeting
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-blue-600 text-sm font-medium mb-1">Heart Rate</div>
                    <div className="text-2xl font-bold text-blue-700">72 BPM</div>
                    <div className="text-xs text-blue-600">Normal range</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-green-600 text-sm font-medium mb-1">Stress Level</div>
                    <div className="text-2xl font-bold text-green-700">Low</div>
                    <div className="text-xs text-green-600">Optimal</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-purple-600 text-sm font-medium mb-1">Engagement</div>
                    <div className="text-2xl font-bold text-purple-700">94%</div>
                    <div className="text-xs text-purple-600">High</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-orange-600 text-sm font-medium mb-1">Speech Rate</div>
                    <div className="text-2xl font-bold text-orange-700">Normal</div>
                    <div className="text-xs text-orange-600">Balanced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;