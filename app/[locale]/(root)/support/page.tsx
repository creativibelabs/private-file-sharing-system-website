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
import { useTranslations } from 'next-intl';
import ContactForm from "@/components/support/contactSection";

export default function SupportPage() {
  const t = useTranslations("SupportPage");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const troubleshootingItems = [
    { icon: <FileText size={24} />, title: t("troubleshooting.uploadFileIssues") },
    { icon: <Video size={24} />, title: t("troubleshooting.sharingLinks") },
    { icon: <Book size={24} />, title: t("troubleshooting.securityPrivacy") },
    { icon: <HelpCircle size={24} />, title: t("troubleshooting.billingSubscription") },
    { icon: <Settings size={24} />, title: t("troubleshooting.accountManagement") },
    { icon: <Coffee size={24} />, title: t("troubleshooting.backupDataRecovery") },
    { icon: <Compass size={24} />, title: t("troubleshooting.navigationHelp") },
    { icon: <Code size={24} />, title: t("troubleshooting.integrationsExternalAccess") }
  ];

  const faqs = [
    { question: t("faqs.0.question"), answer: t("faqs.0.answer") },
    { question: t("faqs.1.question"), answer: t("faqs.1.answer") },
    { question: t("faqs.2.question"), answer: t("faqs.2.answer") },
    { question: t("faqs.3.question"), answer: t("faqs.3.answer") },
  ];

  return (
    <section
      className="min-h-screen p-4 bg-cover bg-center pt-30"
      style={{ backgroundImage: "url(/images/pricing-shade.png)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-7xl font-extrabold mb-2">{t("h1")}</h1>
          <h2 className="text-3xl md:text-7xl font-extrabold">{t("h2")}</h2>
          <p className="mt-4 text-sm md:text-2xl font-semibold">
            {t("p1")}
          </p>
          <p className="md:text-2xl font-semibold">
            {t("p2")}
          </p>
        </header>

        {/* Search */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-3 mb-12">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Troubleshooting wizards and FAQs."
              className="w-full cursor-pointer px-6 py-4 rounded-lg border border-emerald-300 shadow-lg bg-gradient-to-r from-emerald-600/50 to-emerald-900/50"
            />
          </div>
          <button
            type="submit"
            className="text-white border border-emerald-500 bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 hover:from-emerald-800/50 hover:to-emerald-600/50 transition-all duration-300 shadow-sm flex justify-center items-center px-5 rounded-xl"
          >
            <Search size={20} className="mr-2" />
            {t("searchBtn")}
          </button>
        </form>

        {/* FAQ Section */}
        <section className="mb-12">
          <h3 className="text-2xl md:text-6xl text-center font-bold mb-10">
            {t("h3")}
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="backdrop-blur-sm overflow-hidden">
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
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 py-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold py-10 text-center md:text-6xl">
            {t("h3_2")}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {troubleshootingItems.map((item, index) => (
              <div
                key={index}
                className="text-white border border-emerald-500 bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 hover:from-emerald-800/50 hover:to-emerald-600/50 transition-all duration-300 shadow-sm flex justify-center items-center py-4 px-5 rounded-xl"
              >
                <div className="text-emerald-500 pr-3">{item.icon}</div>
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
