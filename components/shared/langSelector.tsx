"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import Image from "next/image";
import { ChevronDownIcon, CheckIcon } from "lucide-react";

// Images
import UK from "@/public/images/uk.png";
import ZH from "@/public/images/zh.png";
import JA from "@/public/images/ja.png";

const languages = [
  { code: "en", name: "English", flag: UK },
  { code: "zh", name: "Chinese", flag: ZH },
  { code: "ja", name: "Japanese", flag: JA },
];

export default function LanguageSelector({ locale }: { locale: string }) {
  const [lang, setLang] = useState(locale);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setLang(newLocale);
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  const currentLanguage = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-between w-full rounded-xl border border-emerald-500 bg-green-900/40 px-4 py-2.5 text-sm text-gray-200 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <Image
            src={currentLanguage.flag}
            alt={`${currentLanguage.name} flag`}
            width={20}
            height={15}
            className="rounded-sm"
          />
          <span>{currentLanguage.name}</span>
        </div>
        <ChevronDownIcon
          className={`h-4 w-4 ml-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute z-50 mt-2 w-full rounded-xl border border-emerald-500 bg-green-950 shadow-xl animate-fadeIn overflow-hidden"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="flex w-full items-center gap-3 px-6 py-2 text-sm text-white hover:bg-emerald-800 transition-colors relative"
            >
              {lang === language.code && (
                <CheckIcon className="absolute left-2 h-4 w-4 text-emerald-300" />
              )}
              <Image
                src={language.flag}
                alt={`${language.name} flag`}
                width={20}
                height={15}
                className="rounded-sm"
              />
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
