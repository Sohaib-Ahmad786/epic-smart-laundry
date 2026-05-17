import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesSection from "@/components/home/ServicesSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";
import WhatsAppBanner from "@/components/home/WhatsAppBanner";

export const metadata = {
  title: "EPIC Smart Laundry — Premium Pickup & Delivery Laundry Service",
  description:
    "Premium laundry pickup & delivery for students and professionals. Wash, iron, dry clean with free doorstep service. 24h turnaround. Book your pickup today!",
  alternates: {
    canonical: "https://epicsmartlaundry.com",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col" id="main-content">
        <HeroSection />
        <HowItWorks />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTABanner />
        <WhatsAppBanner />
      </main>
      <Footer />
    </>
  );
}
