import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';


const FaqSection = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const t = useTranslations('FaqPage');

    const faqs = [
        {
            question: t("faqSection.0.question"),
            answer: t("faqSection.0.answer"),
        },
        {
            question: t("faqSection.1.question"),
            answer: t("faqSection.1.answer"),
        },
        {
            question: t("faqSection.2.question"),
            answer: t("faqSection.2.answer"),
        },
        {
            question: t("faqSection.3.question"),
            answer: t("faqSection.3.answer"),
        }        
    ];

    const toggleFaq = (index) => {
        setOpenFaq((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="mb-12 px-4 md:px-8">
            <h3 className="text-4xl md:text-6xl text-center font-bold mb-10">
                Frequently Asked Questions
            </h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                        <div
                         
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full rounded-lg border border-emerald-300 px-6 py-4 text-left flex justify-between items-center transition-all duration-500 ease-in-out bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 shadow-lg"
                                
                            >
                                <span className="font-semibold text-white">{faq.question}</span>
                                <div
                                    className={`transform transition-transform duration-500 ease-in-out ${
                                        isOpen ? 'rotate-180 text-white' : 'rotate-0 text-emerald-200'
                                    }`}
                                >
                                    <ChevronDown size={20} />
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-700 ease-in-out px-6 text-gray-100 overflow-hidden ${
                                    isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                                }`}
                            >
                                <p className="pt-4 text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FaqSection;
