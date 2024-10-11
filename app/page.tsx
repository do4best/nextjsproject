import Herosection from "@/app/components/navebar/herosection";
import FeturedProducts from "@/app/components/feturedProducts";
import WhyChooseus from "@/app/components/whyChooseus";
import OurCards from "@/app/components/OurCards";


export default function Home() {
  return (
      <>
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   
    <Herosection/>
    <FeturedProducts/>
    <WhyChooseus/>
    <OurCards/>
</main>
      </>
  );
}
