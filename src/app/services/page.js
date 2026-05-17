import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesBackground from "@/components/services/ServicesBackground";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ProcessExplanation from "@/components/services/ProcessExplanation";
import PricingPreview from "@/components/services/PricingPreview";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Our Services",
  description:
    "Explore EPIC Smart Laundry's premium services — washing, ironing, dry cleaning, shoe cleaning, and express pickup & delivery. Student-friendly pricing.",
  alternates: {
    canonical: "https://epicsmartlaundry.com/services",
  },
  openGraph: {
    title: "Our Services — EPIC Smart Laundry",
    description:
      "Premium washing, ironing, dry cleaning and express delivery. Student-friendly pricing.",
    url: "https://epicsmartlaundry.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col relative" id="main-content">
        <ServicesBackground />
        <ServicesHero />
        <ServiceGrid />
        <ProcessExplanation />
        <PricingPreview />
        <ServiceBenefits />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
