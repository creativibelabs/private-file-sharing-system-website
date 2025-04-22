import Link from "next/link";
import LanguageSelector from "./langSelector";
import { navList } from "@/constant/constant";

export default function Header({locale}: {locale: string}) {
    return (
        <header className="bg-green-700 flex justify-between items-center px-10 py-4 border-b border-green-700">
            <div className="text-lg font-bold">logo</div>


            <nav>
                <ul className="flex gap-6">
                    {navList.map((nav, index) => {
                        return(
                            <Link key={index}  href={`/${locale}${nav.path}`}>
                                <li>{nav.title}</li>
                            </Link>
                        )
                    })}
                </ul>
            </nav>

            
            <LanguageSelector locale={locale} />
        </header>
    )
}