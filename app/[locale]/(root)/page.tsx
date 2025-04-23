import Hero from "@/components/Home/Hero";
import PowerfulFeatures from "@/components/Home/Powerful Features";
import Testimonials from "@/components/Home/Testimonials";

export default function LandingPage() {
  return (
    <main>
      <div
        className="bg-cover bg-[#00281A]"
        style={{ backgroundImage: "url('/images/background-img.png')" }}
      >
        <Hero />
        <PowerfulFeatures />
        {/* <Testimonials /> */}
      </div>
    </main>
  );
}
