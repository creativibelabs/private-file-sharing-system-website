import React, { useState } from 'react';
import { ChevronDown } from 'react-feather';

const faqs = [
    {
        question: 'What is a Payment Gateway?',
        answer: 'This project is a dynamic dashboard showcasing various features like user authentication, post creation, and real-time updates using Firebase.',
    },
    {
        question: 'Can I contribute to this project?',
        answer: 'Yes, contributions are welcome! Just fork the repository, make your changes, and submit a pull request.',
    },
    {
        question: 'Is this project mobile responsive?',
        answer: 'Absolutely! The entire UI is built with responsiveness in mind using Tailwind CSS and React best practices.',
    },
    {
        question: 'How is data stored in this project?',
        answer: 'All user, post, and media data is stored and managed using Firebase Firestore and Storage.',
    },
];

const FaqSection = () => {
    const [openFaq, setOpenFaq] = useState(null);

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
