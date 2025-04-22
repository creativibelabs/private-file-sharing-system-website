import Link from "next/link";
import LanguageSelector from "./langSelector";
import { navList } from "@/constant/constant";
import Image from "next/image";

export default function Header({ locale }: { locale: string }) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-green-950 pt-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-around items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href={`/${locale}`} className="bg-emerald-400/90 text-white px-13 py-3 rounded-xl">
                            logo
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:block">
                        <div className="rounded-xl border border-emerald-700 overflow-hidden bg-gradient-to-r from-emerald-950 to-emerald-600/50">
                            <ul className="flex items-center gap-15">
                                {navList.map((nav, index) => (
                                    <li key={index}>
                                        <Link
                                            href={`/${locale}${nav.path}`}
                                            className="text-gray-200 hover:text-white transition-colors text-md font-medium px-6 py-2.5 inline-block"
                                        >
                                            {nav.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    {/* Right section */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:block">
                            <LanguageSelector locale={locale} />
                        </div>
                        <Link
                            href={`/${locale}/login`}
                            className="hidden md:flex items-center justify-center px-9 py-2 text-base font-medium rounded-xl text-white border border-emerald-500 bg-gradient-to-r from-emerald-900 to-emerald-600/90 hover:from-emerald-400 hover:to-emerald-500 transition-colors shadow-sm"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navList.map((nav, index) => (
                        <Link
                            key={index}
                            href={`/${locale}${nav.path}`}
                            className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            {nav.title}
                        </Link>
                    ))}
                    <Link
                        href={`/${locale}/login`}
                        className="text-gray-200 hover:text-white block px-6 py-2 rounded-xl"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}