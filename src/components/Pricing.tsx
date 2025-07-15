import React, { useState } from 'react';
import { Check, X, Star, Zap, Shield, Users } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started with meeting insights',
      monthlyPrice: 29,
      annualPrice: 24,
      icon: Users,
      color: 'gray',
      features: [
        'Up to 10 participants per meeting',
        'Basic physiological monitoring',
        'Meeting summaries',
        'Email support',
        '5GB storage',
        'Standard integrations'
      ],
      limitations: [
        'Advanced analytics',
        'Custom reporting',
        'API access',
        'Priority support'
      ]
    },
    {
      name: 'Professional',
      description: 'Advanced features for growing teams and businesses',
      monthlyPrice: 79,
      annualPrice: 65,
      icon: Zap,
      color: 'blue',
      popular: true,
      features: [
        'Up to 50 participants per meeting',
        'Advanced physiological monitoring',
        'Real-time analytics dashboard',
        'Custom reporting',
        'Priority support',
        '50GB storage',
        'All integrations',
        'API access',
        'Team performance insights'
      ],
      limitations: [
        'White-label solution',
        'Dedicated account manager'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      monthlyPrice: 199,
      annualPrice: 165,
      icon: Shield,
      color: 'purple',
      features: [
        'Unlimited participants',
        'Full physiological monitoring suite',
        'Advanced AI insights',
        'Custom integrations',
        'Dedicated account manager',
        'Unlimited storage',
        'White-label solution',
        'SSO integration',
        'Advanced security features',
        'Custom training',
        '24/7 phone support'
      ],
      limitations: []
    }
  ];

  const getColorClasses = (color: string, popular?: boolean) => {
    if (popular) {
      return {
        border: 'border-blue-500',
        icon: 'bg-blue-100 text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700 text-white',
        badge: 'bg-blue-600 text-white'
      };
    }
    
    const colorMap: { [key: string]: any } = {
      gray: {
        border: 'border-gray-200',
        icon: 'bg-gray-100 text-gray-600',
        button: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
        badge: 'bg-gray-600 text-white'
      },
      purple: {
        border: 'border-purple-200',
        icon: 'bg-purple-100 text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700 text-white',
        badge: 'bg-purple-600 text-white'
      }
    };
    return colorMap[color] || colorMap.gray;
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. All plans include our core AI-powered meeting insights.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.popular);
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg ${colors.border} border-2 ${
                  plan.popular ? 'scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`${colors.badge} px-4 py-2 rounded-full text-sm font-medium flex items-center`}>
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">${price}</span>
                    <span className="text-gray-600">/user/month</span>
                    {isAnnual && (
                      <div className="text-sm text-gray-500 mt-1">
                        Billed annually (${price * 12}/user/year)
                      </div>
                    )}
                  </div>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${colors.button}`}>
                    Start Free Trial
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-start">
                        <X className="w-5 h-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h4>
              <p className="text-gray-600 mb-4">Yes! All plans come with a 14-day free trial. No credit card required.</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600 mb-4">Absolutely. You can upgrade or downgrade your plan at any time from your account settings.</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is my data secure?</h4>
              <p className="text-gray-600 mb-4">Yes. We use bank-grade encryption and comply with GDPR, HIPAA, and SOC 2 standards.</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer custom pricing?</h4>
              <p className="text-gray-600 mb-4">Yes, we offer custom pricing for large organizations with specific requirements.</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">What integrations are available?</h4>
              <p className="text-gray-600">We integrate with Zoom, Microsoft Teams, Google Meet, Slack, and many other platforms.</p>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Contact our sales team for enterprise pricing and custom features
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;