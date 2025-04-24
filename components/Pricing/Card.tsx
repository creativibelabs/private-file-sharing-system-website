import React from 'react';
import Link from 'next/link';

interface PricingFeature {
  feature: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string | number;
  period?: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  buttonText,
  popular
}) => {
  return (
    <div className={`rounded-2xl border border-emerald-300/30 backdrop-blur-sm p-6 relative ${popular ? 'border-emerald-400/50' : ''}`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold text-white">{price === 'Free' ? price : `$${price}`}</span>
            {period && <span className="text-gray-300 mb-1">/{period}</span>}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 pt-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg
                className={`w-5 h-5 ${feature.included ? 'text-emerald-400' : 'text-gray-500'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={feature.included ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'}
                />
              </svg>
              <span className={`text-sm ${feature.included ? 'text-gray-200' : 'text-gray-500'}`}>
                {feature.feature}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link
          href="/signup"
          className={`mt-6 block text-center py-2.5 px-4 rounded-xl font-medium transition-all duration-200
            ${popular 
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
              : 'border border-emerald-300/30 text-white hover:bg-emerald-500/10'
            }`}
        >
          {buttonText}
        </Link>
      </div>

      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-3 -right-3">
          <span className="bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            Popular
          </span>
        </div>
      )}
    </div>
  );
};

export default PricingCard; 