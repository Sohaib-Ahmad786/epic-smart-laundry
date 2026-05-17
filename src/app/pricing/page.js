import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingBackground from "@/components/pricing/PricingBackground";
import PricingHero from "@/components/pricing/PricingHero";
import PerClothPricing from "@/components/pricing/PerClothPricing";
import SubscriptionPlans from "@/components/pricing/SubscriptionPlans";
import ComparisonSection from "@/components/pricing/ComparisonSection";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";

export const metadata = {
  title: "Pricing",
  description:
    "Simple, transparent, and affordable pricing plans for premium laundry and dry cleaning services. Student, hostel, and professional packages available.",
  alternates: {
    canonical: "https://epicsmartlaundry.com/pricing",
  },
  openGraph: {
    title: "Pricing Plans — EPIC Smart Laundry",
    description:
      "Simple, transparent, affordable pricing for premium laundry services.",
    url: "https://epicsmartlaundry.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col relative" id="main-content">
        <PricingBackground />
        <PricingHero />
        <PerClothPricing />
        <SubscriptionPlans />
        <ComparisonSection />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
}
