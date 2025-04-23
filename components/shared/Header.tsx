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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href={`/${locale}`} className="bg-emerald-400/90 text-white px-6 py-2.5 rounded-xl font-medium">
                            logo
                        </Link>
                    </div>

                    {/* Navigation - Desktop */}
                    <nav className="hidden md:block">
                        <div className="rounded-xl border border-emerald-700 overflow-hidden bg-gradient-to-r from-emerald-950 to-emerald-600/50">
                            <ul className="flex items-center">
                                {navList.map((nav, index) => (
                                    <li key={index}>
                                        <Link
                                            href={`/${locale}${nav.path}`}
                                            className="text-gray-200 hover:text-white transition-colors text-sm font-medium px-6 py-2.5 inline-block hover:bg-emerald-800/50"
                                        >
                                            {nav.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    {/* Right section - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageSelector locale={locale} />
                        <Link
                            href={`/${locale}/login`}
                            className="flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-xl text-white border border-emerald-500 bg-gradient-to-r from-emerald-900 to-emerald-600/90 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 shadow-sm"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-200 hover:text-white hover:bg-emerald-800/50 transition-colors "
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
                className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
            >
                <div className="px-4 pt-2 pb-3 space-y-2 bg-[#00281A]    border-t border-emerald-800/50 mt-3">
                    {navList.map((nav, index) => (
                        <Link
                            key={index}
                            href={`/${locale}${nav.path}`}
                            className="block px-4 py-2 text-base text-gray-200 hover:text-white hover:bg-emerald-800/50 rounded-lg transition-colors cursor-pointer"
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