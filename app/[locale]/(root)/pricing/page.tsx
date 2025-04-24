import Tabs from "@/components/Pricing/Tabs";
import React from "react";

const PricingPage = () => {
  return (
    <main
      style={{
        backgroundImage: "url(/images/pricing-shade.png)",
        backgroundSize: "cover",
      }}
      className="min-h-screen p-4"
    >
      <div className="flex flex-col items-center text-center md:pt-35 pt-20 mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold md:w-[671px] w-full">
          Flexible Plans for Every User
        </h1>
        <p className="mt-3 w-90">
          Choose The Storage Plan That Fits Your Needs — Always Private, Always
          Secure
        </p>
      </div>
      <Tabs />
    </main>
  );
};

export default PricingPage;
