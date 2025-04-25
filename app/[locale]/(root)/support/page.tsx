"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Search,
  FileText,
  Video,
  Book,
  HelpCircle,
  Settings,
  Coffee,
  Compass,
  Code
} from 'lucide-react';
import ContactForm from "@/components/support/contactsection";


export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password.",
    },
    {
      question: "How can I update my account information?",
      answer:
        "You can update your account information by navigating to 'My Account' in the top right corner after logging in. From there, you can edit your profile details.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for most regions.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team through email at support@example.com or by using the contact form in the 'Contact Us' section. Our support hours are 24/7.",
    },
  ];

  const troubleshootingItems = [
    { icon: <FileText size={24} />, title: "Upload & File Issues" },
    { icon: <Video size={24} />, title: "Sharing & Links" },
    { icon: <Book size={24} />, title: "Security & Privacy" },
    { icon: <HelpCircle size={24} />, title: "Billing & Subscription" },
    { icon: <Settings size={24} />, title: "Account Management" },
    { icon: <Coffee size={24} />, title: "Backup & Data Recovery" },
    { icon: <Compass size={24} />, title: "Navigation Help" },
    { icon: <Code size={24} />, title: "Integrations & External Access" },
  ];


  return (
    <section
      className="min-h-screen  p-4 bg-cover bg-center pt-30"
      style={{ backgroundImage: "url(/images/pricing-shade.png)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-7xl font-extrabold mb-2">Need Help?</h1>
          <h2 className="text-3xl md:text-7xl font-extrabold">We're Here for You.</h2>
          <p className="mt-4 text-sm md:text-2xl font-semibold">
            Find Quick Answers, Helpful Guides, Or Contact Our Support
          </p>
          <p className="md:text-2xl  font-semibold">
            Team - Your Privacy And Experience Are Our Top Priorities.
          </p>
        </header>

        {/* Search */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-3 mb-12">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Trouble shooting wizards and FAQs."
              className="w-full cursor-pointer px-6 py-4 rounded-lg border border-emerald-300  shadow-lg bg-gradient-to-r from-emerald-600/50 to-emerald-900/50"
            />
          </div>
          <button
            type="submit"
            className="text-white border border-emerald-500 bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 hover:from-emerald-800/50 hover:to-emerald-600/50 transition-all duration-300 shadow-sm flex justify-center items-center px-5 rounded-xl"
          >
            <Search size={20} className="mr-2" />
            Search
          </button>
        </form>

        {/* FAQ Section - with smooth animations */}
        <section className="mb-12">
          <h3 className="text-2xl md:text-6xl text-center font-bold mb-10 ">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="backdrop-blur-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex border border-emerald-300 rounded-xl justify-between items-center focus:bg-gradient-to-r from-emerald-600/50 to-emerald-900/50"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <div className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100  ' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-6 py-4 ">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting Section - ensuring 2 columns layout */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold py-10 text-center md:text-6xl ">Trouble Shooting</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {troubleshootingItems.map((item, index) => (
              <div
                key={index}
                className="text-white border border-emerald-500 bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 hover:from-emerald-800/50 hover:to-emerald-600/50 transition-all duration-300 shadow-sm flex justify-center items-center py-4 px-5 rounded-xl"
              >
                <div className="text-emerald-500 pr-3 ">{item.icon}</div>
                <span className="font-medium text-md">{item.title}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      <ContactForm />
    </section>
  );
}