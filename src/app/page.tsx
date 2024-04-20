import HeroSection from "@/app/components/Hero/Layout";
import BuyerSection from "@/app/components/Buyer/Layout";
import Faq from "@/app/components/FAQ/Layout";
import Footer from "@/app/components/Footer/Layout";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <HeroSection />
      <BuyerSection />
      <Faq />
      <Footer />
    </main>
  );
}
