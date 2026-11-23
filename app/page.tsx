import { QuoteProvider } from "@/components/QuoteProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Reach from "@/components/Reach";
import Compare from "@/components/Compare";
import Booking from "@/components/Booking";
import Bond from "@/components/Bond";
import Reviews from "@/components/Reviews";
import Commercial from "@/components/Commercial";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <QuoteProvider>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Reach />
        <Compare />
        <Booking />
        <Bond />
        <Reviews />
        <Commercial />
        <Faq />
      </main>
      <Footer />
      <StickyBar />
    </QuoteProvider>
  );
}