import Link from "next/link";
import LanguageSelector from "../shared/langSelector";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
    const t = await getTranslations("HomePage");

    return (
        <section
            className="relative bg-cover min-h-screen flex items-center justify-center"
            style={{ backgroundImage: "url('/images/bg-img.jpg')" }}
        >
            {/* Optional Overlay with Blur */}
            <div className="absolute inset-0 bg-[#00281A]/80 backdrop-blur-md z-0" />

            {/* Floating Images */}
            <div className="absolute top-30 left-30 z-10">
                <Image
                    src="/images/storage.png"
                    alt="Storage"
                    width={180}
                    height={180}
                    className="rotate-[8deg] hidden md:block"
                />
            </div>
            <div className="absolute bottom-30 right-40 z-10">
                <Image
                    src="/images/usage.png"
                    alt="Usage"
                    width={180}
                    height={180}
                    className="-rotate-[6deg] hidden md:block"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-20 text-white text-center px-6 max-w-4xl w-full">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                    {t("title_1")}<br />
                    <span className="text-white md:text-5xl">{t("title_2")}</span>
                </h1>

                {/* Subtitles with Framed Icons */}
                <div className="text-lg md:text-xl mb-10 space-y-4">
                    {/* Subtitle 1 */}
                    <div className="flex justify-center items-center gap-3 flex-wrap">
                        <span>{t("subtitle_1")}</span>
                        <div
                            className="w-12 h-12 bg-center bg-contain bg-no-repeat flex items-center justify-center"
                            style={{ backgroundImage: "url('/images/icons/frame.png')" }}
                        >
                            <Image src="/images/icons/file.png" alt="File Icon" width={24} height={24} />
                        </div>
                    </div>

                    {/* Subtitle 2 */}
                    <div className="flex justify-center items-center gap-3 flex-wrap">
                        <div
                            className="w-12 h-12 bg-center bg-contain bg-no-repeat flex items-center justify-center"
                            style={{ backgroundImage: "url('/images/icons/frame.png')" }}
                        >
                            <Image src="/images/icons/lock.png" alt="Lock Icon" width={60} height={60} />
                        </div>
                        <span>{t("subtitle_2")}</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 flex-wrap">
                    <button className="rounded-full px-4 border border-emerald-700 overflow-hidden bg-gradient-to-r from-emerald-950 to-emerald-600/50">
                        Secure Your Files Now
                    </button>
                    <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-green-900 transition">
                        View Pricing
                    </button>
                </div>
            </div>
        </section>
    );
}
