import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  paymentIcons,
  socialIcons,
  quickLinks,
  legalLinks,
} from "@/constant/constant";

const Footer = ({ locale }: { locale: string }) => {
  return (
    <footer className="bg-[#1C825E] rounded-xl border border-emerald-700 overflow-hidden bg-gradient-to-r from-emerald-950 to-emerald-600/50 p-4 md:p-8 ">
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        <section>
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="bg-emerald-400/90 text-white px-15 py-4 rounded-xl text-sm shadow-2xl md:text-left text-center block w-fit md:mx-0 mx-auto"
          >
            logo
          </Link>
          <p className="mt-6 md:mt-12 text-gray-100 text-sm md:text-base">
            Welcome to your private, secure cloud space
          </p>
          <p className="mt-2 md:mt-4 text-gray-100 text-xs md:text-sm max-w-sm">
            Upload, manage, and access your files with full control and
            end-to-end protection.
          </p>
          <div className="flex items-center md:gap-x-6 gap-x-4  md:mt-7 mt-4">
            {socialIcons.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Image src={item.icon} alt={item.title} />
                </Link>
              );
            })}
          </div>
          <div className="flex items-center space-x-1 mt-4">
            {paymentIcons.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="border border-emerald-300 rounded-xl px-1.5 py-1 bg-emerald-50/20 w-16 h-9 flex items-center justify-center"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </Link>
              );
            })}
          </div>
        </section>

        <section className="md:ms-14 ms-5 mt-9 md:mt-0 flex flex-col md:text-center">
          <h1 className="text-emerald-400 font-bold mb-8 text-sm">
            Quick Links
          </h1>
          <div className="flex flex-col md:items-center">
            {quickLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="text-gray-100 hover:text-emerald-400 transition-colors mt-1.5 md:mt-2.5 block border border-emerald-400 py-1.5 text-xs text-center rounded-full w-28"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="md:ms-14 ms-5 mt-9 md:mt-0 flex flex-col ">
          <h2 className="text-emerald-400 font-bold mb-8 text-sm">
            Legal Links
          </h2>
          {legalLinks.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="text-gray-100 hover:text-emerald-400 transition-colors mt-1.5 md:mt-2.5 block border border-emerald-400 py-1.5 text-xs text-center rounded-full w-28"
              >
                {item.title}
              </Link>
            );
          })}
        </section>

        <section className="text-center md:text-left mt-9 md:mt-0">
          <h2 className=" font-bold mb-4">Stay Tuned!</h2>
          <p className="text-gray-100 text-xs md:text-sm mb-6">
            Get the latest articles and business updates that you need to know,
            you'll even get special recommendations weekly.
          </p>
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2.5 rounded-full bg-emerald-800/50 border border-emerald-300 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-300"
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-full px-6 bg-emerald-50/20 text-white rounded-full text-sm font-medium hover:bg-emerald-500/30 transition-colors border-l border-r border-l-emerald-300 border-r-gray-400"
            >
              Subscribe
            </button>
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-2 md:mt-10 mt-4 text-sm text-gray-300 font-semibold">
        <p className="order-3 text-emerald-300">support@PrivateFileShare.com</p>
        <p className="order-2 text-[#39FF14]">© 2025 Ai All Rights Reserved.</p>
        <p className=""></p>
      </div>
    </footer>
  );
};

export default Footer;
