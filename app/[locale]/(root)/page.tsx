import Hero from "@/components/Home/Hero";
import PowerfulFeatures from "@/components/Home/Features";
import Testimonials from "@/components/Home/Testimonials";
import GetStarted from "@/components/Home/GetStarted";

export default function LandingPage() {
  return (
    <main>
      <div
        className="bg-cover"
        style={{ backgroundImage: "url('/images/background-img.png')" }}
      >
        <Hero />
        <PowerfulFeatures />
        <GetStarted />
      </div>
    </main>
  );
}
