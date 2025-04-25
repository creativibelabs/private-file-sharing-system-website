"use client"

import React, { useState } from 'react';
import PricingCard from './Card';
import { pricingPlans } from '@/constant/constant';

const Tabs = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 md:mb-20 mb-10">
      {/* Pricing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center p-1 rounded-xl border border-emerald-300 text-[#FDFDFD]">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              !isYearly ? 'bg-emerald-50/20 border border-emerald-300' : 'text-gray-300 hover:text-white'
            }`}
          >
            Pay Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              isYearly ? 'bg-emerald-50/20 border border-emerald-300' : 'text-gray-300 hover:text-white'
            }`}
          >
            Pay Yearly <span className='border p-[3px] rounded-lg text-[9px]'>Save 20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {(isYearly ? pricingPlans.yearly : pricingPlans.monthly).map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            period={plan.period}
            features={plan.features}
            buttonText={plan.buttonText}
            popular={plan.popular}
            desc={plan.desc}
            msg={plan.msg}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;