"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "@/i18n/routing"
import Image from "next/image"
import * as Select from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

// Make sure to replace these with actual flags
import UK from "@/public/images/uk.png"
import ZH from "@/public/images/zh.png" // Fix import for Chinese flag
import JA from "@/public/images/ja.png" // Fix import for Japanese flag

const languages = [
  {
    code: "en",
    name: "English",
    flag: UK
  },
  {
    code: "zh",
    name: "Chinese",
    flag: ZH
  },
  {
    code: "ja",
    name: "Japanese",
    flag: JA
  }
]

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

  // Find the current language object
  const currentLanguage = languages.find(language => language.code === lang) || languages[0]

  return (
    <Select.Root value={lang} onValueChange={handleLanguageChange}>
      <Select.Trigger 
        className="inline-flex items-center justify-between rounded-lg border border-emerald-500 px-4 py-2 text-sm text-gray-200 focus:outline-none"
        aria-label="Select a language"
      >
        <div className="flex items-center gap-2">
          <Image 
            src={currentLanguage.flag} 
            alt={`${currentLanguage.name} flag`} 
            width={20} 
            height={15} 
            className="rounded-sm"
          />
          <Select.Value>{currentLanguage.name}</Select.Value>
        </div>
        <Select.Icon>
          <ChevronDownIcon className="h-4 w-4 text-gray-200" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content 
          className="overflow-hidden rounded-md border border-emerald-500 bg-green-950"
          position="popper"
        >
          <Select.Viewport className="p-1">
            {languages.map((language) => (
              <Select.Item
                key={language.code}
                value={language.code}
                className="flex items-center gap-2 rounded-md px-6 py-2 text-sm text-white hover:bg-emerald-800 hover:text-white data-[state=checked]:bg-emerald-700 data-[highlighted]:outline-none"
              >
                <Select.ItemIndicator className="absolute left-2">
                  <CheckIcon className="h-4 w-4" />
                </Select.ItemIndicator>
                
                <Image 
                  src={language.flag} 
                  alt={`${language.name} flag`} 
                  width={20} 
                  height={15} 
                  className="rounded-sm"
                />
                <Select.ItemText>{language.name}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}