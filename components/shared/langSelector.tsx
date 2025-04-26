"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "@/i18n/routing"
import Image from "next/image"
import * as Select from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

// Images
import UK from "@/public/images/uk.png"
import ZH from "@/public/images/zh.png"
import JA from "@/public/images/ja.png"

const languages = [
  { code: "en", name: "English", flag: UK },
  { code: "zh", name: "Chinese", flag: ZH },
  { code: "ja", name: "Japanese", flag: JA }
]

export default function LanguageSelector({ locale }: { locale: string }) {
  const [lang, setLang] = useState(locale)
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setLang(locale)
  }, [locale])


  useEffect(() => {

    const fixScrollbarVisibility = () => {
      if (open) {
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('padding-right');
        document.body.style.overflow = 'auto';
      }
    };


    if (open) {
      fixScrollbarVisibility();
      const timeoutId = setTimeout(fixScrollbarVisibility, 10);
      return () => clearTimeout(timeoutId);
    }
  }, [open]);

  const handleLanguageChange = (newLocale: string) => {
    setLang(newLocale)
    router.replace(pathname, { locale: newLocale })
  }

  const currentLanguage = languages.find(language => language.code === lang) || languages[0]

  return (
    <div className="relative">
      <Select.Root
        value={lang}
        onValueChange={handleLanguageChange}
        open={open}
        onOpenChange={setOpen}
      >
        <Select.Trigger
          className="inline-flex items-center bg-gradient-to-b from-emerald-600/60 to-emerald-900/40  justify-between w-full rounded-xl border border-emerald-500  px-4 py-2.5 text-sm text-gray-200 focus:outline-none shadow-md  transition-all duration-300"
          aria-label="Select a language"
        >
          <div className="flex items-center gap-3">
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
            <ChevronDownIcon className="h-4 w-4 text-gray-200 ml-3" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="z-50 overflow-hidden rounded-xl border border-emerald-500 bg-gradient-to-b from-emerald-600/60 to-emerald-900/40 backdrop-blur-lg  animate-dropdown-open"
            position="popper"
            sideOffset={5}
            align="start"
            avoidCollisions={false}
          >
            <Select.Viewport className="p-1 max-h-60 overflow-y-auto">
              {languages.map((language) => (
                <Select.Item
                  key={language.code}
                  value={language.code}
                  className="relative flex items-center gap-2 rounded-md px-6 py-2 text-sm text-white hover:border-b hover:border-emerald-500 hover:text-white data-[state=checked]:bg-emerald-700 data-[highlighted]:outline-none cursor-pointer transition-colors"
                >
                  <Select.ItemIndicator className="absolute left-2">
                    <CheckIcon className="h-4 w-4 text-emerald-300" />
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
    </div>
  )
}