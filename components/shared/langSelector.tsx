"use client"
import { usePathname, useRouter } from "@/i18n/routing"
import { useState, useEffect } from "react"

export default function LanguageSelector({ locale }: { locale: string }) {
    const [lang, setLang] = useState(locale)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        setLang(locale)
    }, [locale])

    const handleLanguageChange = (newLocale: string) => {
        setLang(newLocale)
        router.replace(pathname, { locale: newLocale })
    }

    return (
        <div className="flex items-center gap-4">
            {/* Language selector */}
            <select
                value={lang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-transparent border border-green-500 rounded px-2 py-1 text-white"
            >
                <option value="en">English</option>
                <option value="zh">Chinese</option>
                <option value="ja">Japanese</option>
            </select>
            <button className="border border-green-500 px-4 py-1 rounded">Login</button>
        </div>
    )
}