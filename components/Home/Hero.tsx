import Link from "next/link";
import LanguageSelector from "../shared/langSelector";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
    const t = await getTranslations("HomePage")
    return (
        <section>
            <div
                className="min-h-screen text-white relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/bg.png') !important" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-green-950/90 z-0" />

                {/* Main Content */}
                <div className="relative z-10">

                    {/* Hero Section */}
                    <section className="text-center mt-16 px-6">
                        {/* Floating Images */}
                        <Image
                            src="/images/storage.png"
                            alt="Storage"
                            width={100}
                            height={100}
                            className="absolute top-32 left-10 rotate-[15deg]"
                        />
                        <Image
                            src="/images/usage.png"
                            alt="Usage"
                            width={100}
                            height={100}
                            className="absolute top-32 right-10 -rotate-[12deg]"
                        />

                        {/* Main Text */}
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            {t("title_1")}<br />
                            <span className="text-white">{t("title_2")}</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8">
                            {t("subtitle_1")}<br />
                            {t("subtitle_2")}
                        </p>

                        {/* Buttons */}
                        <div className="flex justify-center gap-4">
                            <button className="bg-green-600 px-6 py-2 rounded-full text-white hover:bg-green-700">
                                Secure Your Files Now
                            </button>
                            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-green-900 transition">
                                View Pricing
                            </button>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="mt-24 px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-center">
                            Powerful Features<br />At Your Fingertips.
                        </h2>
                    </section>
                </div>
            </div>
        </section>
    )
}