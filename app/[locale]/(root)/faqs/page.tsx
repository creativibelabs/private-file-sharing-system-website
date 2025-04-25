"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const categories = ["General", "Pricing", "Support", "Security"];

const faqs = [
  {
    question: "What is a private cloud?",
    answer:
      "A private cloud is a cloud computing environment dedicated to a single organization.",
  },
  {
    question: "How secure is my data?",
    answer:
      "Your data is encrypted in transit and at rest using industry best practices.",
  },
  {
    question: "Can I upgrade my plan anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan from your dashboard anytime.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Yes, our support team is available 24/7 via chat and email.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section style={{
      backgroundImage: "url(/images/pricing-shade.png)",
      backgroundSize: "cover",
    
    }}
      className="min-h-screen p-4 text-white " >


      <div className="max-w-5xl mx-auto px-4 sm:px-6  pt-12 text-center"
      
      >
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 pt-20 text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
          Find answers to common questions about your private cloud experience
        </p>

        {/* Styled Category Nav Buttons */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2 items-center p-1 rounded-xl border border-emerald-300 text-[#FDFDFD]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`md:px-10 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeCategory === cat
                    ? "bg-emerald-50/20 border border-emerald-300 text-white"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-white">
          {activeCategory} Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <section className="">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className=" overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex  border border-emerald-300 rounded-xl justify-between items-center focus:bg-gradient-to-r from-emerald-600/50 to-emerald-900/50"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <div
                    className={`transform transition-transform duration-300 ${openFaq === index ? "rotate-180" : "rotate-0"
                      }`}
                  >
                    <ChevronDown size={20} className="text-white" />
                  </div>
                </button>
                <div
                  className={`transition-all  duration-300 ease-in-out overflow-hidden ${openFaq === index
                      ? "max-h-96 opacity-100 "
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 py-4 text-gray-200 rounded-b-xl">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section
  className="relative  md:min-h-screen flex items-center justify-center bg-mobile  text-center px-4"
  style={{
    backgroundImage: "url('/images/icons/circle-bg_large.svg')", 
    // backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Left shade image */}
  <img
    src="/images/icons/right-shad's.png"
    alt="Left Shade"
    className=" z-10 absolute -left-4 pointer-events-none"
  />
  {/* center shade image */}
  <img
    src="/images/icons/Rectangle_shade.png"
    alt="center Shade"
    className=" absolute md:left-0 md:top-60 bottom-30 rotate-0 pointer-events-none"
  />

  {/* Right shade image */}
  <img
    src="/images/icons/left-shad's.png"
    alt="Right Shade"
    className=" z-10 absolute -right-4  pointer-events-none"
  />

  {/* Content */}
  <div className="z-10 max-w-xl text-white">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      Still have questions?
    </h2>
    <p className="text-base md:text-lg mb-6">
      Contact support at <a href="mailto:support@yourdomain.com" className="underline">support@yourdomain.com</a><br />
      or use the live chat.
    </p>
    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
      LIVE CHAT
    </button>
  </div>
</section>

    </section>
  );
}
