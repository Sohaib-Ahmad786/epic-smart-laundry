import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutBackground from "@/components/about/AboutBackground";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import ServiceAreas from "@/components/about/ServiceAreas";
import AboutStats from "@/components/about/AboutStats";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us",
  description:
    "Learn about EPIC Smart Laundry's mission to revolutionize fabric care and convenience for students and professionals. Our story, vision, and service areas.",
  alternates: {
    canonical: "https://epicsmartlaundry.com/about",
  },
  openGraph: {
    title: "About EPIC Smart Laundry",
    description:
      "Learn about our mission to revolutionize fabric care for students and professionals.",
    url: "https://epicsmartlaundry.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col relative" id="main-content">
        <AboutBackground />
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <ServiceAreas />
        <AboutStats />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
