"use client"
import Link from "next/link";
import LanguageSelector from "./langSelector";
import { navList } from "@/constant/constant";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ locale }: { locale: string }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-transparent pt-3">
            <div className="">
                <div className="flex md:justify-center justify-between px-6 space-x-3  items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href={`/${locale}`} className="bg-emerald-400/90 text-white px-8 py-2 rounded-xl font-medium">
                            logo
                        </Link>
                    </div>

                    <nav className="hidden md:block">
                        <div
                            className="rounded-xl border border-emerald-700 max-w-3xl"


                        >
                            <ul className=" flex items-center overflow-hidden bg-no-repeat bg-cover justify-center bg-gradient-to-b from-emerald-600/60 to-emerald-900/40  rounded-xl backdrop-filter backdrop-blur-md hover:backdrop-blur-md " >
                                {navList.map((nav, index) => (
                                    <li key={index}>
                                        <Link
                                            href={`/${locale}${nav.path}`}
                                            className=" transition-colors text-sm font-medium px-13 py-2.5 inline-block  hover:text-white hover:bg-gradient-to-r from-emerald-600/60 to-emerald-900/40   hover:to-emerald-500/20  rounded-xl text-gray-200 "
                                        >
                                            {nav.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>


                    {/* Right section - Desktop */}
                    <div className="hidden md:flex  space-x-3">
                        <LanguageSelector locale={locale} />
                        <Link
                            href={`/${locale}/Auth/User_login`}
                            className="flex items-center justify-center px-6 py-2 text-sm font-medium rounded-xl text-white border border-emerald-500 bg-gradient-to-b from-emerald-600/60 to-emerald-900/40 backdrop-blur-lg  hover:to-emerald-500/50 transition-all duration-300 shadow-sm"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-200 hover:text-white hover:bg-emerald-800/50 transition-colors"
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">
                            {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                        </span>
                        {isMobileMenuOpen ? (
                            <X className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="block h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? ' opacity-100 backdrop-filter backdrop-blur-lg font-semibold  ' : 'max-h-0 opacity-0 overflow-hidden '
                    }`}
            >
                <div className="px-4 py-3  space-y-2 border-b rounded   border-t border-emerald-700/50 ">
                    {navList.map((nav, index) => (
                        <Link
                            key={index}
                            href={`/${locale}${nav.path}`}
                            className="block px-4 py-3 text-base text-gray-200 hover:text-white hover:bg-emerald-800/50 rounded-lg transition-colors cursor-pointer"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {nav.title}
                        </Link>
                    ))}
                    <div className="pt-2 pb-1">
                        <LanguageSelector locale={locale} />
                    </div>
                    <Link
                        href={`/${locale}/login`}
                        className="block px-4 py-2 text-base text-gray-200 hover:text-white hover:bg-emerald-800/50 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}