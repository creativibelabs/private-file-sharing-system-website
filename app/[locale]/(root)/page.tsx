import Hero from '@/components/Home/Hero'
import PowerfulFeatures from '@/components/Home/Powerful Features'
import Testimonials from '@/components/Home/Testimonials'


export default function LandingPage() {

  return (
    <main>
      <div  className=" bg-cover"
            style={{ backgroundImage: "url('/images/bg-img.jpg')" }}>
              
      <Hero />
      <PowerfulFeatures/>
      {/* <Testimonials /> */}
      </div>
    </main>
  )
}
