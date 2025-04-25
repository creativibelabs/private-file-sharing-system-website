import Tabs from "@/components/Pricing/Tabs";
import Image from "next/image";
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
      <div className="flex flex-col items-center text-center md:pt-35 pt-25 mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold md:w-[671px] w-full">
          Flexible Plans for Every User
        </h1>
        <p className="mt-3 md:w-90 w-full">
          Choose The Storage Plan That Fits Your Needs — Always Private, Always
          Secure
        </p>
      </div>
      <Tabs />
      <div className="absolute top-70 right-130 w-full pointer-events-none">
        <Image
          src="/images/shade.png"
          height={500}
          width={1920}
          alt="Bottom Shade"
          className="w-full object-cover object-bottom"
          priority
        />
      </div>
    </main>
  );
};

export default PricingPage;
