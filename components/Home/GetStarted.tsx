import React from "react";
import Image from "next/image";
import StepsCard from "./StepsCard";
import Testimonials from "./Testimonials";
import { getTranslations } from "next-intl/server";

const GetStarted = async () => {
  const t = await getTranslations("HomePage.getStarted")
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/center-piece.png"
          alt="Background"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Background shade */}
      <div className="absolute -top-[20%] -right-[30%] w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] lg:w-[1200px] lg:h-[1200px]">
        <div className="relative w-full h-full">
          <Image
            src="/images/Ellipse 1581.png"
            alt="Background shade"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-5xl font-bold md:mb-3 text-white">
            {t("h3_1")}
          </h3>
          <p className="text-md md:text-xl text-gray-200">
            <span className="block md:inline">
            {t("s1")}
            </span>{" "}
            <span className="block">
            {t("s2")}
            </span>
          </p>
        </div>

        <StepsCard />

        <div className="text-center max-w-3xl mx-auto md:mt-16 mt-4">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 mt-10 text-white">
          {t("h3_2")}
          </h3>
          <p className="text-lg md:text-xl text-gray-200 w-full max-w-100 mx-auto">
            {t("p")}
          </p>
        </div>

        <Testimonials />
      </div>
    </section>
  );
};

export default GetStarted;
