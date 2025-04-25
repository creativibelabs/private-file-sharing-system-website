
import Image from 'next/image';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [issueType, setIssueType] = useState('');
    const [message, setMessage] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleIssueTypeChange = (type: string) => {
        setIssueType(type);
        setDropdownOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, issueType, message });
    };

    return (
        <section className="min-h-screen">
            <div className="max-w-6xl mx-auto p-8 relative rounded-xl">
                <h2 className="text-2xl md:text-5xl font-bold text-center text-white mb-10">
                    Tell Us Your Questions
                </h2>
                <div className="absolute flex justify-end  -top-130 left-3 md:left-14 w-full ">
                    <img src="/images/icons/left-shad's.png" alt="Left Shadow" width={1000} height={1000}  />
                </div>
                <div className="absolute flex justify-end  -bottom-101 -left-110 w-full ">
                    <img src="/images/icons/right-shad's.png" alt="Left Shadow" width={1000} height={1000}  />
                </div>


                <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Name and Email Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>

                            <input
                                id="name"
                                type="text"
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl outline-none backdrop-blur-lg border border-emerald-500 bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 hover:from-emerald-800/50 hover:to-emerald-600/50 transition-all duration-300 shadow-sm"
                                required
                            />
                        </div>

                        <div>

                            <input
                                id="email"
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl outline-none backdrop-blur-lg border border-emerald-500 bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 hover:from-emerald-800/50 hover:to-emerald-600/50 transition-all duration-300 shadow-sm"
                                required
                            />
                        </div>
                    </div>

                    {/* Issue Type Dropdown */}
                    <div className="relative">

                        <button
                            type="button"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="w-full px-4 py-3 text-emerald-50/50 rounded-xl outline-none backdrop-blur-lg border border-emerald-500 bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 hover:from-emerald-800/50 hover:to-emerald-600/50 transition-all duration-300 shadow-sm inline-flex items-center justify-between"
                        >
                            {issueType || 'Issue Type'}
                            <svg
                                className="w-4 h-4 ml-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute z-10 mt-2 w-full border border-emerald-500 backdrop-blur-2xl rounded-xl shadow-lg">
                                <ul className="py-2 text-sm ">
                                    {['Technical Issue', 'Account Issue', 'Billing Issue', 'Feature Request'].map(
                                        (type) => (
                                            <li key={type}>
                                                <button
                                                    type="button"
                                                    onClick={() => handleIssueTypeChange(type)}
                                                    className="block w-full text-left px-4 py-2 hover:bg-emerald-500/50 transition-all duration-300 "
                                                >
                                                    {type}
                                                </button>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Message Field */}
                    <div>

                        <textarea
                            id="message"
                            placeholder='Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full  px-4 py-3 rounded-xl outline-none backdrop-blur-lg border border-emerald-500 bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 hover:from-emerald-800/50 hover:to-emerald-600/50 transition-all duration-300 shadow-sm"
                            rows={6}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="text-white border border-emerald-500 bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 hover:from-emerald-800/50 hover:to-emerald-600/50 transition-all duration-300 shadow-sm  items-center px-6 md:px-40 py-3 font-medium rounded-full backdrop-blur-2xl"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>


            <section className="py-12">
                {/* Heading for Billing & Technical Issues */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold">For Billing & Technical Issues</h2>
                </div>

                {/* Cards Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {/* Card 1 */}
                    <div className="p-6 flex items-center justify-between rounded-2xl border border-emerald-300 backdrop-blur-sm  relative transition-all duration-300 hover:shadow-[0_4px_30px_rgba(16,185,129,0.4)] bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 ">
                        <div>
                            <h3 className="text-xl font-semibold">Live Chat</h3>
                            <button className="mt-4 text-white border px-4 py-2 rounded-full">
                                Chat with us
                            </button>
                        </div>
                        <Image
                            src="/images/icons/Message_icon.png" // Add your image URL here
                            alt="Billing Icon"
                            width={150}
                            height={150}
                            className="ml-4 "
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 flex items-center justify-between rounded-2xl border border-emerald-300 backdrop-blur-sm  relative transition-all duration-300 hover:shadow-[0_4px_30px_rgba(16,185,129,0.4)] bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 "   >
                        <div>
                            <h3 className="text-xl font-semibold">Contact Number</h3>
                            <button className="mt-4 text-white border px-6 py-2 rounded-full">
                                Call us
                            </button>
                        </div>
                        <Image
                            src="/images/icons/Phone_icon.png" // Add your image URL here
                            alt="Technical Support Icon"
                            width={70}
                            height={70}
                            className="ml-4"
                        />
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 flex items-center justify-between rounded-2xl border border-emerald-300 backdrop-blur-sm  relative transition-all duration-300 hover:shadow-[0_4px_30px_rgba(16,185,129,0.4)] bg-gradient-to-r from-emerald-600/50 to-emerald-900/50 ">
                        <div>
                            <h3 className="text-xl font-semibold">Account Issues</h3>
                            <button className="mt-4 text-white px-4 py-2 rounded-full">
                                Email us
                            </button>
                        </div>
                        <Image
                            src="/images/icons/Mail_icon.png" // Add your image URL here
                            alt="Account Icon"
                            width={150}
                            height={150}
                            className="ml-4"
                        />
                    </div>
                </div>

                {/* Centered Section with Icons */}
                <div className="text-center py-1 text-white">
                    <div className="flex items-center justify-center">
                        {/* Left Icon */}
                        <Image
                            src="/images/icons/quote-left.png" // Add your image URL here
                            alt="Left Icon"
                            width={100}
                            height={100}
                            className="mr-4"
                        />
                        <div>
                            <h3 className="md:text-5xl text-lg font-bold">We're committed to your security and</h3>
                            <h3 className="md:text-5xl text-lg font-bold">satisfaction every step of the way.</h3>
                        </div>

                        {/* Right Icon */}
                        <Image
                            src="/images/icons/quote-right.png" // Add your image URL here
                            alt="Right Icon"
                            width={100}
                            height={100}
                            className="ml-4"
                        />
                    </div>
                </div>
            </section>

        </section>



    );
};

export default ContactForm;
