"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const AccountTypeSelection = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const router = useRouter();
  const locale = useLocale(); 

  const handleClick = () => {
    if (selectedType === "business") {
      router.push(`/${locale}/sign-up/business`);
    } else {
      router.push(`/${locale}/sign-up/personal`);
    }
  };
  return (
    <main>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
        style={{
          backgroundImage: "url(/images/pricing-shade.png)",
          backgroundSize: "cover",
        }}
      >
        {/* Glow - Bottom Left */}
        <div className="absolute bottom-[-50px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#43E1A9] blur-[130px] opacity-60 z-0" />

        {/* Glow - Bottom Right */}
        <div className="absolute bottom-[-110px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[#43E1A9] blur-[120px] opacity-35 z-0" />

        {/* Main Content */}
        <div className="max-w-4xl w-full text-center px-4 sm:px-6 relative z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Choose Your Account Type
          </h1>
          <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8">
            Select How You Want To Use Our Platform
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 w-full">
            {/* Personal Account Option */}
            <div className="border-[2px] rounded-lg border-emerald-600 flex   justify-center items-center mb-8 ">
              <div
                className={`w-full sm:w-[341px] h-auto sm:h-[268px] border rounded-xl overflow-hidden
              transition-all duration-300 ease-in-out transform cursor-pointer
              flex items-center justify-center 
              ${selectedType === "personal"
                    ? "border-emerald-300 bg-gradient-to-b from-emerald-600/60 to-emerald-900/10  rounded-xl  backdrop-blur-md shadow-emerald-400/20 scale-109"
                    : "border-none"
                  }`}
                onClick={() => setSelectedType("personal")}
              >
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="w-50 h-50 mb-4 relative">
                    <Image
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src="/images/Header/type_user.png"
                      alt="Personal Account"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="md:text-lg  font-medium text-white">
                    Personal Account
                  </h3>
                </div>
              </div>
              {/* Business Account Option */}
              <div
                className={`w-full sm:w-[341px] h-auto sm:h-[268px] border rounded-xl overflow-hidden
              transition-all duration-300 ease-in-out transform cursor-pointer
              flex items-center justify-center
              ${selectedType === "business"
                    ? "border-emerald-300 bg-gradient-to-b from-emerald-600/60 to-emerald-900/10  rounded-xl  backdrop-blur-md shadow-emerald-400/20 scale-109"
                    : "border-none"
                  }`}
                onClick={() => setSelectedType("business")}
              >
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="w-50 h-50  mb-4 relative">
                    <Image
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src="/images/Header/type_business.png"
                      alt="Business Account"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-white">
                    Business Account
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <button onClick={() => router.push("/")} className="flex items-center justify-center gap-2 bg-transparent text-white border border-white/50 rounded-full px-5 sm:px-6 py-2 hover:bg-emerald-800/60 hover:border-white/70 transition-all duration-300 w-full sm:w-auto">
              <ArrowLeft size={16} />
              BACK TO HOME
            </button>
            <button
              className={`bg-emerald-700 text-white rounded-full px-8 sm:px-10 py-2 transition-all duration-300 w-full sm:w-auto
              ${selectedType
                  ? "opacity-100 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-500/20"
                  : "opacity-70 cursor-not-allowed"
                }`}
              disabled={!selectedType}
              onClick={handleClick}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccountTypeSelection;
