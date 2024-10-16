import Herosection from "@/app/components/raviproject/navebar/herosection";
import FeturedProducts from "@/app/components/raviproject/feturedProducts";
import WhyChooseus from "@/app/components/raviproject/whyChooseus";
import OurCards from "@/app/components/raviproject/OurCards";
import ProductTestimonial from "@/app/components/raviproject/productTestimonial";
import OurTeams from "@/app/components/raviproject/ourTeams";
import Footer from "@/app/components/raviproject/footer";


export default function Home() {
  return (
      <>
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   
    <Herosection/>
    <FeturedProducts/>
    <WhyChooseus/>
    <OurCards/>
    <ProductTestimonial/>
    <OurTeams/>
    <Footer/>
</main>
      </>
  );
}
