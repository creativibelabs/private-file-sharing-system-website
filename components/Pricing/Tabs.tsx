"use client";

import React, { useState } from 'react';
import PricingCard from './Card';
import { useTranslations } from 'next-intl';

interface PricingPlan {
  title: string;
  price: string;
  period?: string;
  features: Array<{ feature: string }>;
  buttonText: string;
  popular?: boolean;
  desc: string;
  msg: string;
}

interface PricingTab {
  title: string;
  plans: PricingPlan[];
}

interface PricingData {
  monthly: PricingTab;
  yearly: PricingTab;
}

const Tabs = () => {
  const [isYearly, setIsYearly] = useState(false);
  const t = useTranslations("PricingPage");

  // Get pricing data using useTranslations
  const pricingData: PricingData = {
    monthly: {
      title: t("tabs.monthly.title"),
      plans: [
        {
          title: t("tabs.monthly.plans.0.title"),
          price: t("tabs.monthly.plans.0.price"),
          desc: t("tabs.monthly.plans.0.desc"),
          msg: t("tabs.monthly.plans.0.msg"),
          features: t.raw("tabs.monthly.plans.0.features") as Array<{ feature: string }>,
          buttonText: t("tabs.monthly.plans.0.buttonText"),
          popular: false 
        },
        {
          title: t("tabs.monthly.plans.1.title"),
          price: t("tabs.monthly.plans.1.price"),
          period: t("tabs.monthly.plans.1.period"),
          desc: t("tabs.monthly.plans.1.desc"),
          msg: t("tabs.monthly.plans.1.msg"),
          features: t.raw("tabs.monthly.plans.1.features") as Array<{ feature: string }>,
          buttonText: t("tabs.monthly.plans.1.buttonText"),
          popular: false 
        },
        {
          title: t("tabs.monthly.plans.2.title"),
          price: t("tabs.monthly.plans.2.price"),
          period: t("tabs.monthly.plans.2.period"),
          desc: t("tabs.monthly.plans.2.desc"),
          msg: t("tabs.monthly.plans.2.msg"),
          features: t.raw("tabs.monthly.plans.2.features") as Array<{ feature: string }>,
          buttonText: t("tabs.monthly.plans.2.buttonText"),
          popular: true // Popular plan in monthly
        },
        {
          title: t("tabs.monthly.plans.3.title"),
          price: t("tabs.monthly.plans.3.price"),
          desc: t("tabs.monthly.plans.3.desc"),
          msg: t("tabs.monthly.plans.3.msg"),
          features: t.raw("tabs.monthly.plans.3.features") as Array<{ feature: string }>,
          buttonText: t("tabs.monthly.plans.3.buttonText"),
          popular: false 
        }
      ]
    },
    yearly: {
      title: t("tabs.yearly.title"),
      plans: [
        {
          title: t("tabs.yearly.plans.0.title"),
          price: t("tabs.yearly.plans.0.price"),
          desc: t("tabs.yearly.plans.0.desc"),
          msg: t("tabs.yearly.plans.0.msg"),
          features: t.raw("tabs.yearly.plans.0.features") as Array<{ feature: string }>,
          buttonText: t("tabs.yearly.plans.0.buttonText"),
          popular: false
        },
        {
          title: t("tabs.yearly.plans.1.title"),
          price: t("tabs.yearly.plans.1.price"),
          period: t("tabs.yearly.plans.1.period"),
          desc: t("tabs.yearly.plans.1.desc"),
          msg: t("tabs.yearly.plans.1.msg"),
          features: t.raw("tabs.yearly.plans.1.features") as Array<{ feature: string }>,
          buttonText: t("tabs.yearly.plans.1.buttonText"),
          popular: false
        },
        {
          title: t("tabs.yearly.plans.2.title"),
          price: t("tabs.yearly.plans.2.price"),
          period: t("tabs.yearly.plans.2.period"),
          desc: t("tabs.yearly.plans.2.desc"),
          msg: t("tabs.yearly.plans.2.msg"),
          features: t.raw("tabs.yearly.plans.2.features") as Array<{ feature: string }>,
          buttonText: t("tabs.yearly.plans.2.buttonText"),
          popular: true // Only Pro plan is popular in yearly too
        },
        {
          title: t("tabs.yearly.plans.3.title"),
          price: t("tabs.yearly.plans.3.price"),
          desc: t("tabs.yearly.plans.3.desc"),
          msg: t("tabs.yearly.plans.3.msg"),
          features: t.raw("tabs.yearly.plans.3.features") as Array<{ feature: string }>,
          buttonText: t("tabs.yearly.plans.3.buttonText"),
          popular: false
        }
      ]
    }
  };

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
            {pricingData.monthly.title}
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              isYearly ? 'bg-emerald-50/20 border border-emerald-300' : 'text-gray-300 hover:text-white'
            }`}
          >
            {pricingData.yearly.title} <span className='border p-[3px] rounded-lg text-[9px]'>{t("savePercentage")}</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {(isYearly ? pricingData.yearly.plans : pricingData.monthly.plans).map((plan, index) => (
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